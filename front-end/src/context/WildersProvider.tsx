import { useState, useEffect, PropsWithChildren, useContext } from "react"
import { ContextProps, WildersContext } from "./WildersContext"
import axios from "axios"
import { Wilder } from "../components/interface/interface"

type Props = PropsWithChildren<{}>

export const WildersProvider = ({ children }: Props) => {
   const [wilders, setWilders] = useState<Wilder[]>([])

   const fetchData = async () => {
      try {
         const wilders = await axios.get("http://localhost:5001/api/wilder")
         setWilders(wilders.data)
      } catch (error) {
         console.log(error)
      }
   }

   useEffect(() => {
      fetchData()
   }, [])

   const returnValues: ContextProps = {
      wilders,
      setWilders,
      fetchData,
   }

   return (
      <WildersContext.Provider value={returnValues}>
         {children}
      </WildersContext.Provider>
   )
}

export const useWilders = () => {
   const value = useContext(WildersContext)
   if (value === null) {
      throw new Error("Vous devez entourer ce composant d'un provider")
   }
   return value
}
