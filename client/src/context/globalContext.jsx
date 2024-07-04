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
        getIncomes()
    }

    const addExpense = async (expense) =>{
        const res = await axios.post(`${BASE_URL}add-expense`, expense).catch((er) =>{
            setErr(er.res.data.message)
        })
        getExpenses()
    }

    const getIncomes = async (income) =>{
        const response = await axios.get(`${BASE_URL}get-incomes`)
        setIncomes(response.data)
        //console.log(response.data)
    }

    const getExpenses = async(expense) =>{
        const res = await axios.get(`${BASE_URL}get-expenses`)
        setExpenses(res.data)
    }

    const deleteIncome = async (id) =>{
        const response = await axios.delete(`${BASE_URL}delete-income/${id}`)
        getIncomes()
    }

    const deleteExpense = async (id) =>{
        const res = await axios.delete(`${BASE_URL}delete-expense/${id}`)
        getExpenses()
    }


    const totalMoney = () => {
        let totalM = 0;
        incomes.forEach((income) =>{
            totalM = totalM + income.amount;
        })

        return totalM;
    }

    const totalExpense = () => {
        let totalExp = 0;
        expenses.forEach((expense) =>{
            totalExp = totalExp + expense.amount;
        })
        return totalExp;
    }

    //console.log(totalMoney())

    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes, 
            incomes, 
            deleteIncome, 
            totalMoney,
            addExpense,
            getExpenses,
            expenses,
            deleteExpense,
            totalExpense
            }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}