import express from "express"
import cors from "cors"
import dataSource from "./utils"
import type { Response, Request } from "express"

// Import the controllers
import wilderController from "./controller/wilder"
import skillController from "./controller/skill"
import gradeController from "./controller/grade"

const app = express()
// Autorisation express to send JSON files
app.use(express.json())
app.use(cors())

// routes-Wilder
app.post("/api/wilder", wilderController.create)
app.get("/api/wilder", wilderController.read)
app.delete("/api/wilder/:id", wilderController.delete)
app.put("/api/wilder", wilderController.update)
// routes-Skill
app.post("/api/skill", skillController.create)
app.get("/api/skill", skillController.read)
app.delete("/api/skill", skillController.delete)
app.put("/api/skill", skillController.update)
// routes-Grade
app.post("/api/grade", gradeController.create)
app.get("/api/grade", gradeController.read)
// 404
app.use((req: Request, res: Response): void => {
   res.status(404).send("Sorry cant find that!")
})

// Start Server
const PORT = 5001

const start = async (): Promise<void> => {
   await dataSource.initialize()
   app.listen(PORT, () => console.log(`Server started on ${PORT}`))
}
void start()
