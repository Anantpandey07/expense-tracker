import { createContext, useContext, useState } from "react";
import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/";

const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [err, setErr] = useState(null)

    const addIncome = async (income) =>{
        const response = await axios.post(`${BASE_URL}add-income`, income).catch((er) =>{
            setErr(er.response.data.message)
        })
    }

    return (
        <GlobalContext.Provider value={{addIncome,}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}