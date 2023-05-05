import axios from "axios"
import React, { useState } from "react"
import Modal from "react-modal"
import { useWilders } from "../../context/WildersProvider"
import { useForm } from "react-hook-form"

interface Props {
   id: number
}
type FormData = {
   name: string
}

const ModalUpdateWilder: React.FC<Props> = ({ id }) => {
   const [modalIsOpen, setIsOpen] = useState(false)
   const { fetchData } = useWilders()

   function openModal() {
      setIsOpen(true)
   }
   function closeModal() {
      setIsOpen(false)
   }

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FormData>()

   const onSubmit = handleSubmit(async (data) => {
      try {
         await axios.put("http://localhost:5001/api/wilder", {
            newData: { name: data.name },
            id: id,
         })
         fetchData()
         setIsOpen(false)
      } catch (error) {
         console.log(error)
      }
   })

   return (
      <div>
         <button onClick={openModal}>Modifier</button>
         <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
         >
            <div>Modifie ton nom jeune Wilder !</div>
            <form onSubmit={onSubmit}>
               <input
                  type="text"
                  placeholder="Gin Tonic..."
                  {...register("name", { required: true })}
               />
               {errors.name && <p>Name is required</p>}
               <button>Confirmer</button>
            </form>
         </Modal>
      </div>
   )
}
export default ModalUpdateWilder

const customStyles = {
   content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
   },
}
