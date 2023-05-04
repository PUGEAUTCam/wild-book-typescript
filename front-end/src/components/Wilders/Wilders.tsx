import styles from "../../App.module.css"
import style from "./Wilders.module.css"
import Wilder from "../Wilder/Wilder"
import { useWilders } from "../../context/WildersProvider"

const Wilders = () => {
   const { wilders } = useWilders()

   return (
      <main className={styles.container}>
         <h2>Wilders</h2>
         <section className={style["card-row"]}>
            {wilders?.map((wilder, index) => (
               <Wilder
                  key={index}
                  name={wilder.name}
                  city={wilder.city}
                  id={wilder.id}
                  skills={wilder.skills}
               />
            ))}
         </section>
      </main>
   )
}

export default Wilders
