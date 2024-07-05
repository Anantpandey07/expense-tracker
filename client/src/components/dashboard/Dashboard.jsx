import React, { useEffect } from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import Chart from '../Chart/Chart';
import { rupee } from '../../utils/Icons';
import { useGlobalContext } from '../../context/globalContext';
import History from '../History/History';

function Dashboard() {
  const {totalExpense, incomes, expenses,  totalMoney, remainBalance, getIncomes, getExpenses} = useGlobalContext()

  useEffect(() => {
    getExpenses()
    getIncomes()
  }, [])
  return (
    <DashboardStyled>
      <InnerLayout>
        <h1>All Transaction</h1>
        <div className='stats-cont'>
          <div className='chart-cont'>
            <Chart/>
            <div className='amnt-cont'>
              <div className='income'>
                <h2>Total Income</h2>
                <p>
                  {rupee} {totalMoney()}
                </p>
              </div>

              <div className='expense'>
                <h2>Total Expense</h2>
                <p>
                  {rupee} {totalExpense()}
                </p>
              </div>

              <div className='balance'>
                <h2>Remain Balance</h2>
                <p>
                  {rupee} {remainBalance()}
                </p>
              </div>
            </div>
          </div>
          <div className='history-cont'>
            <History />
              <h2 className="balance-title">Min <span>Income</span>Max</h2>
              <div className="balance-item">
                  <p>
                      {rupee} {Math.min(...incomes.map(item => item.amount))}
                  </p>
                  <p>
                     {rupee} {Math.max(...incomes.map(item => item.amount))}
                  </p>
              </div>
              <h2 className="balance-title">Min <span>Expense</span>Max</h2>
              <div className="balance-item">
                  <p>
                    {rupee} {Math.min(...expenses.map(item => item.amount))}
                  </p>
                  <p>
                    {rupee} {Math.max(...expenses.map(item => item.amount))}
                  </p>
              </div>
          </div>
        </div>
      </InnerLayout>
    </DashboardStyled>
  )
}

const DashboardStyled = styled.div`
   .stats-cont{
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 1rem;
      .chart-cont{
        grid-column: 1/4;
        height: 500px;
        .amnt-cont{
          display:grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          margin-top: 2rem;
          .income, .expense{
              grid-column: span 2;
              
          }
          .income, .expense, .balance{
               background: #FCF6F9;
               border: 2px solid #FFFFFF;
               box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
               border-radius: 20px;
               padding: 1rem;
               p{
                   font-size: 3.5 rem;
                   font-weight: 500;
               }
          }

          .balance{
            grid-column: 2 / 4;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            p{
              color: var(--color-green);
              opacity: 0.6;
              font-size: 4 rem;
            }
          }
        }
      }

      .history-cont{
        grid-column: 4 / 6;
        h2{
        margin: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        }
        .balance-title{
            font-size: 1.1rem;
            span{
              font-size: 1.4rem;
            }
        }
        .balance-item{
            background: #FCF6F9;
            border: 2px solid #FFFFFF;
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            padding: 0.8rem;
            border-radius: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            p{
              font-weight: 500;
              font-size: 1.2rem;
            }
        }
      }
   }
`;

export default Dashboard
