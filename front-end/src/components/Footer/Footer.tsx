import style from "./Footer.module.css"
import styles from "../../App.module.css"

const Footer = () => {
   return (
      <footer className={style.footer}>
         <div className={styles.container}>
            <p>&copy; 2022 Wild Code School</p>
         </div>
      </footer>
   )
}

export default Footer
