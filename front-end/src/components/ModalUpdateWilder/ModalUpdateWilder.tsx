import axios from "axios"
import React, { useState } from "react"
import Modal from "react-modal"
import { useWilders } from "../../context/WildersProvider"

interface Props {
   id: number
}

const ModalUpdateWilder: React.FC<Props> = ({ id }) => {
   const [modalIsOpen, setIsOpen] = React.useState(false)
   const [newName, setNewName] = useState("")
   const { fetchData } = useWilders()

   function openModal() {
      setIsOpen(true)
   }
   function closeModal() {
      setIsOpen(false)
   }

   const handleSubmit = async () => {
      console.log("ICI")
      try {
         await axios.put("http://localhost:5001/api/wilder", {
            newData: { name: newName },
            id: id,
         })
         fetchData()
         setNewName("")
         setIsOpen(false)
      } catch (error) {
         console.log(error)
      }
   }

   return (
      <div>
         <button onClick={openModal}>Modifier</button>
         <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
         >
            <div>Modifie ton nom jeune Wilder !</div>
            <form>
               <input
                  type="text"
                  placeholder="Yoda..."
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
               />
            </form>
            <button onClick={handleSubmit}>Confirmer</button>
            <button onClick={closeModal}>Annuler</button>
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
