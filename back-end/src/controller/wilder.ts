import type { Request, Response } from "express"
import dataSource from "../utils"
import { Wilder } from "../entity/Wilder"
import { Grade } from "../entity/Grade"


const wilderController = {
   create: async (req: Request, res: Response) => {
      try {
         const data = await dataSource
            .getRepository(Wilder)
            .save(req.body);
         res.send(data);

      } catch (error) {
         console.log(error);
         res.status(400).json({ error });
      }
   },
   read: async (req: Request, res: Response) => {
      try {
         const grades = await dataSource.getRepository(Grade).find({ relations: { wilder: true, skill: true } });
         console.log(grades);

         const wilders = await dataSource.getRepository(Wilder).find();
         console.log(wilders)

         const data = wilders.map((wilder) => {
            const wilderGrades = grades.filter(
               (grade) => grade.wilder.id === wilder.id
            )
            const wilderGradeLean = wilderGrades.map((el) => {
               return { title: el.skill.name, votes: el.grade };
            });
            const result = {
               ...wilder,
               skills: wilderGradeLean,
            }
            console.log(result);
            return result
         })
         res.send(data)

      } catch (error) {
         console.log(error)
         res.status(400).json({ error })
      }
   },
   update: async (req: Request, res: Response) => {
      try {
         await dataSource
            .getRepository(Wilder)
            .update(req.body.id, req.body.newData)

         res.send("updated");
      } catch (error) {
         console.log(error);
         res.status(400).json({ error })
      }
   },
   delete: async (req: Request, res: Response) => {
      try {
         await dataSource.getRepository(Grade).delete(req.params.id)
         await dataSource.getRepository(Wilder).delete(req.params.id);
         res.send("deleted");
      } catch (error) {
         console.log(error);
         res.status(400).json({ error })
      }
   }
}

export default wilderController;