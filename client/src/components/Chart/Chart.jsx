import React from 'react'
import {Chart as ChartJs, CategoryScale, 
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js'

import {Line} from 'react-chartjs-2'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext'
import { dateFormat } from '../../utils/formatDate'

ChartJs.register(
    CategoryScale, 
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
)

function Chart() {
    const {incomes, expenses} = useGlobalContext()

    const data = {
        labels: incomes.map((income) =>{
            const {date} = income
            return dateFormat(date);
        }),


        datasets: [
            {
                label: 'Income',
                data: [
                    ...incomes.map((income) => {
                        const {amount} = income
                        return amount
                    })
                ],
                backgroundColor: 'green',
                tension: 0.2,
            }
            // {
            //     label: 'Expense',
            //     data: [
            //         ...expenses.map((ex) => {
            //             const {amount} = ex
            //             return amount
            //         })
            //     ],
            //     backgroundColor: 'red',
            //     tension:0.2,
            // }
        ]
    }

    const data1 = {
        labels: expenses.map((exp) =>{
            const {date} = exp
            return dateFormat(date);
        }),

        datasets: [
            {
                label: 'Expense',
                data: [
                    ...expenses.map((ex) => {
                        const {amount} = ex
                        return amount
                    })
                ],
                backgroundColor: 'red',
                tension:0.2,
            }
        ]
    }

  return (
    <ChartStyled>
        <Line data={data}/>
        <Line data={data1}/>
    </ChartStyled>
  )
}

const ChartStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 100%;
    `;

export default Chart
