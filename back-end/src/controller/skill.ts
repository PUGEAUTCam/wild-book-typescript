import type { Request, Response } from "express"
import dataSource from "../utils"
import { Skill } from "../entity/Skill"


const skillController = {
   create: async (req: Request, res: Response) => {
      try {
         await dataSource
            .getRepository(Skill)
            .save(req.body)
         res.send("Skill Created")
      } catch (error) {
         console.log(error);
         res.status(400).json({ error })
      }
   },
   read: async (req: Request, res: Response) => {
      try {
         const data = await dataSource
            .getRepository(Skill)
            .find()
         res.send(data);
      } catch (error) {
         console.log(error);
         res.status(400).json({ error })
      }
   },
   delete: async (req: Request, res: Response) => {
      try {
         await dataSource
            .getRepository(Skill)
            .delete(req.body.id)
         res.send("Skill supprimes");
      } catch (error) {
         console.log(error);
         res.status(400).json({ error })
      }
   },
   update: async (req: Request, res: Response) => {
      try {
         await dataSource
            .getRepository(Skill)
            .update(req.body.id, req.body.newData)
         res.send("Skill modifies");
      } catch (error) {
         console.log(error);
         res.status(400).json({ error })
      }
   }
}

export default skillController;