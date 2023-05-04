import { Skill as SkillInterface } from "../interface/interface"
import styles from "./Skill.module.css"

const Skill: React.FC<SkillInterface> = ({ title, votes }) => {
   return (
      <li>
         {title}
         <span className={styles.votes}>{votes}</span>
      </li>
   )
}

export default Skill
