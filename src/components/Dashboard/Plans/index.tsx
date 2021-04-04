import React, {
  ChangeEvent,
  Dispatch,
  FormEvent,
  HTMLAttributes,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react"
import { useDispatch, useSelector } from "react-redux"
import { MdAdd, MdEventNote, MdClose } from "react-icons/md"
import { useHistory } from "react-router-dom"
import { toast } from "react-toastify"

import { ApplicationStore } from "../../../store"
import api from "../../../services/api"
import { Plano } from "../../../types/dash-board"
import Loader from "../../Loader"
import { UserData } from "../../../store/user/types"
import { set_plans_data } from "../../../store/dashboard/actions"

import {
  Repositories,
  CardAddPlans,
  PlanCards,
  AddPlans,
  CardExit,
  CardModal,
} from "./style"

const Plans: React.FC = () => {
  const store = useSelector((state: ApplicationStore) => state.user)
  const [plans, setPlans] = useState<Plano[]>()
  const [loaded, setLoaded] = useState(true)

  const [isAddingCard, setIsAddingCard] = useState(false)

  const dashboard = useSelector((store: ApplicationStore) => store.dashboard)

  const dispatch = useDispatch()

  const closeModal = useCallback(() => {
    setIsAddingCard(false)
  }, [])

  useEffect(() => {
    if (plans) dispatch(set_plans_data(plans))
  }, [dispatch, plans])

  useEffect(() => {
    if (dashboard.plans_data) {
      setPlans(dashboard.plans_data)

      return
    }

    setLoaded(false)

    const getAccountPlans = async () => {
      const result = await api.get(
        `/lancamentos/planos-conta?login=${store?.login}`,
        {
          headers: {
            Authorization: store?.token,
          },
        }
      )
      setPlans(result.data)
      setLoaded(true)
    }

    getAccountPlans()
  }, [store, dashboard])

  if (loaded)
    return (
      <>
        {isAddingCard && (
          <AddPlansModal closeModal={closeModal} setPlans={setPlans} />
        )}
        {plans && (
          <AddPlans className="addCard" onClick={() => setIsAddingCard(true)}>
            {/* <MdAdd className="icon" size={30} /> */}
            <p>Adicionar novo plano</p>
          </AddPlans>
        )}
        <Repositories>
          <PlanCards>
          {plans?.map((plan, index) => {
            return (
                <a key={index}>
                  <p className="title-card">
                    <b>{plan.descricao}: </b>
                  </p>
                  <p> {plan.login} / </p>
                  <p className="type-movement">
                    Movimentação tipo: <span> {plan.tipoMovimento}</span>
                  </p>
                </a>
            )
          })}
          </PlanCards>
        </Repositories>
      </>
    )
  else return <Loader style={{ border: "solid #f0f0f0 4px" }} />
}

// div add Plans

interface AddPlansModalProps extends HTMLAttributes<HTMLDivElement> {
  setPlans: Dispatch<SetStateAction<Plano[] | undefined>>
  closeModal: () => void
  children?: React.ReactNode;
}

const AddPlansModal: React.FC<AddPlansModalProps> = ({
  closeModal,
  setPlans,
  ...props
}) => {
  const history = useHistory()

  const { token, login } = useSelector(
    (store: ApplicationStore) => store.user as UserData
  )

  const [type, setType] = useState("")
  const [description, setDescription] = useState("")

  const handleChangeDescription = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      if (e.target.value.length <= 20) setDescription(e.target.value)
    },
    []
  )

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      const filteredType = type.trim()
      const filteredDescription = description.trim()

      // Validação
      if (filteredType.length === 0 || filteredDescription.length === 0)
        return toast.error("Preencha todos os campos!")

      const data = {
        descricao: filteredDescription,
        id: 0,
        login,
        padrao: true,
        tipoMovimento: filteredType,
      }

      api
        .post("lancamentos/planos-conta", data, {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            setPlans((previewPlans) => {
              if (previewPlans) {
                toast.success("Plano adicionado com sucesso!")
                return [...previewPlans, data]
              }
            })
            closeModal()
          } else {
            toast.error("Ocorreu algum erro!")
            history.push("/error")
          }
        })
    },
    [token, type, login, description, setPlans, closeModal, history]
  )

  return (
    <CardModal {...props}>
      <CardAddPlans>
        <CardExit>
          <MdClose
            onClick={closeModal}
            className="icon"
            size={30}
            color="gray"
          />

          <h1>
            {/* <MdEventNote className="icon" /> */}
            Adicionar um plano
          </h1>
          <form onSubmit={handleSubmit}>
            <select onChange={(e) => setType(e.target.value)}>
              <option style={{ color: "#b3b3b3" }} value="">
                Escolha o tipo
              </option>
              <option value="R">Receita</option>
              <option value="D">Despesa</option>
              <option value="TC">Transferência entre contas</option>
              <option value="TU">Transferência entre usúarios</option>
            </select>
            <div>
              <textarea
                placeholder="Descrição"
                value={description}
                onChange={handleChangeDescription}
              />

              <label htmlFor="">Restante: {20 - description.length}</label>
            </div>

            <button type="submit">
              {/* <MdAdd size={18} /> */}
              Adicionar
            </button>
          </form>
        </CardExit>
      </CardAddPlans>
    </CardModal>
  )
}

export default Plans
