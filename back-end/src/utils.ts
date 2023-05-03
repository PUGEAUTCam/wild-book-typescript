import { DataSource } from "typeorm";
// For the entities
import { Wilder } from "./entity/Wilder"
import { Skill } from "./entity/Skill"
import { Grade } from "./entity/Grade"

const dataSource = new DataSource({
   type: "sqlite",
   database: "./wildersdb.sqlite",
   synchronize: true,
   entities: [Wilder, Skill, Grade],
   logging: ["query", "error"]
})

export default dataSource;