import { createContext, useContext } from "react";
import useFetch from "../hooks";

const LogementContext = createContext();

export function LogementProvider({ children }) {
  const { data: logements, loading, error } = useFetch('/src/database/logements.json');
 
  return (
    <LogementContext.Provider value={{ logements, loading, error }}>
      {children}
    </LogementContext.Provider>
  );
}

export function useLogements() {
  return useContext(LogementContext);
}
