import { Dispatch, SetStateAction, createContext } from 'react';
import { Wilder } from '../components/interface/interface';


export type ContextProps = {
   wilders: Wilder[];
   setWilders: Dispatch<SetStateAction<Wilder[]>>;
   fetchData: () => void;
}

export const WildersContext = createContext<null | ContextProps>(null);