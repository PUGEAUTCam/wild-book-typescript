import styles from "./Wilder.module.css"
import avatar from "../../assets/avatar.png"
import Skill from "../Skill/Skill"
import axios from "axios"
import { useWilders } from "../../context/WildersProvider"
import { Wilder as WilderInterface } from "../interface/interface"
import React from "react"

const Wilder: React.FC<WilderInterface> = ({ name, city, id, skills }) => {
   const { fetchData } = useWilders()

   const handleDelete = async (id: number) => {
      console.log(id)
      try {
         await axios.delete(`http://localhost:5001/api/wilder/${id}`)
         fetchData()
      } catch (error) {
         console.log(error)
      }
   }

   return (
      <article className={styles.card}>
         <img src={avatar} alt={name} />
         <h3>{name}</h3>
         <h4>{city}</h4>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
         </p>
         <h4>Wild Skills</h4>
         <ul className={styles.skills}>
            {skills?.map((skill, index) => (
               <Skill key={index} title={skill.title} votes={skill.votes} />
            ))}
         </ul>
         <div className={styles.button}>
            <button onClick={() => handleDelete(id)}>Supprimer</button>
         </div>
      </article>
   )
}

export default Wilder
