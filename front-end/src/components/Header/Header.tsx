import styles from "../../App.module.css"
import style from "./Header.module.css"

const Header = () => {
   return (
      <header className={style.header}>
         <div className={styles.container}>
            <h1>Wilders Book</h1>
         </div>
      </header>
   )
}

export default Header
