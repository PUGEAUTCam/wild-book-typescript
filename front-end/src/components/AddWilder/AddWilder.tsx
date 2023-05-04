import { useState } from "react"
import axios from "axios"
import styles from "./AddWilder.module.css"
import { useWilders } from "../../context/WildersProvider"
import { FormEvent } from "react"

const AddWilder = () => {
   const { fetchData } = useWilders()
   const [name, setName] = useState("")
   const [city, setCity] = useState("")
   const [skill, setSkill] = useState("")
   const [grade, setGrade] = useState("")

   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      try {
         let res = await axios.post("http://localhost:5001/api/wilder", {
            name,
            city,
         })
         await axios.post("http://localhost:5001/api/skill", { name: skill })
         await axios.post("http://localhost:5001/api/grade", {
            wilder: res.data.name,
            grade,
            skill,
         })
         fetchData()
         reset()
      } catch (error) {
         console.log(error)
      }
   }

   const reset = () => {
      setName("")
      setCity("")
      setSkill("")
      setGrade("")
   }

   return (
      <form onSubmit={handleSubmit}>
         <label>Name</label>
         <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Charles..."
            required
         />
         <label>City</label>
         <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Londres..."
            required
         />
         <label>Skill</label>
         <input
            type="text"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            placeholder="Ruby..."
            required
         />
         <label>Grade</label>
         <input
            type="number"
            min="0"
            max="10"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            className={styles.gradeinput}
            required
         />
         <button>Add Wilder</button>
      </form>
   )
}

export default AddWilder

//FOR FUTURE WHEN SEVERVAL SKILLS
// import React, { useState } from 'react';
// import axios from "axios";
// import styles from "./AddWilder.module.css"
// import style from "../Wilder/Wilder.module.css"
// import Skill from '../Skill/Skill';

// const AddWilder = ({ onUpdate }) => {
//    const [name, setName] = useState("");
//    const [city, setCity] = useState("");
//    const [skillInputValue, setSkillInputValue] = useState("");
//    const [gradeInputValue, setGradeInputValue] = useState("");
//    const [skills, setSkills] = useState([]);

//    const handleSubmit = async (e) => {
//       e.preventDefault();
//       try {
//          let res = await axios.post("http://localhost:5001/api/wilder", { name, city });
//          skills.forEach(async skill => {
//             console.log(skill);
//             await axios.post("http://localhost:5001/api/skill", { name: skill.title })
//             await axios.post("http://localhost:5001/api/grade", { wilder: res.data.name, grade: skill.votes, skill: skill.title })
//          });
//          onUpdate()
//          reset();
//       } catch (error) {
//          console.log(error.response);
//       }
//    };

//    // const handleAddSkill = async (e) => {
//    //    setSkills(prevSkills => [...prevSkills, { title: skillInputValue, votes: gradeInputValue }])
//    //    setSkillInputValue("")
//    //    setGradeInputValue("")
//    // }

//    const reset = () => {
//       setName("")
//       setCity("")
//       setSkillInputValue("")
//       setGradeInputValue("")
//       setSkills([])
//    }

//    return (
//       <div>
//          <form onSubmit={handleSubmit}>
//             <label>Name</label>
//             <input
//                type="text"
//                value={name}
//                onChange={(e) => setName(e.target.value)}
//             />
//             <label>City</label>
//             <input
//                type="text"
//                value={city}
//                onChange={(e) => setCity(e.target.value)}
//             />

//             <button>Create Wilder</button>
//          </form>

//          <div>
//             <label>Skill</label>
//             <input
//                type="text"
//                value={skillInputValue}
//                onChange={(e) => setSkillInputValue(e.target.value)}
//             />
//             <label>Grade</label>
//             <input
//                type="number"
//                min="0"
//                max="10"
//                value={gradeInputValue}
//                onChange={(e) => setGradeInputValue(e.target.value)}
//                className={styles.gradeinput}
//             />
//             <button onClick={handleAddSkill}>Add Skill</button>

//             <ul className={style.skills}>
//                {
//                   skills?.map((skill, index) =>
//                      <Skill
//                         skill={skill}
//                         key={index}
//                      />
//                   )
//                }
//             </ul>
//          </div>
//       </div>
//    );
// };

// export default AddWilder;
