export interface Wilder {
   id: number
   name: string
   city: string
   skills: Skill[]
}

export interface Skill {
   title: string;
   votes: number
}
