import type { Request, Response } from "express"
import dataSource from "../utils"
import { Grade } from "../entity/Grade"
import { Wilder } from "../entity/Wilder"
import { Skill } from "../entity/Skill"

const gradeController = {
   create: async (req: Request, res: Response) => {
      try {
         const wilderFromDB = await dataSource
            .getRepository(Wilder)
            .findOneBy({ name: req.body.wilder });
         console.log("Wilder from DB", wilderFromDB);

         const skillFromDB = await dataSource
            .getRepository(Skill)
            .findOneBy({ name: req.body.skill });
         console.log("Skill from DB", skillFromDB);

         const reqBodyGrade: number = req.body.grade

         if (wilderFromDB != null && skillFromDB != null) {
            await dataSource.getRepository(Grade).save({
               grade: reqBodyGrade,
               skill: skillFromDB,
               wilder: wilderFromDB,
            })
            res.send("Created Grade");
         }
      } catch (error) {
         console.log(error);
         res.status(400).json({ error })
      }
   },
   read: async (req: Request, res: Response) => {
      try {
         const gradesFromDB = await dataSource
            .getRepository(Grade)
            .find()
         res.send(gradesFromDB);
      } catch (error) {
         console.log(error);
         res.status(400).json({ error })
      }
   },
}

export default gradeController;