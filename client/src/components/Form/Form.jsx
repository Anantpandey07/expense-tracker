import React, { useState } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/globalContext';
import Button from '../Button/Button'
import { plus } from '../../utils/Icons';

function Form() {

    const {addIncome, getIncomes, err} = useGlobalContext()

    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    })

    const {title, amount, date, category, description } = inputState;

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
    }

    const handleSubmit = eve =>{
        eve.preventDefault()
        addIncome(inputState)
        getIncomes()
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        })
    }

  return (
    <FormStyled onSubmit={handleSubmit}>
        {/* {err && <p>{err}</p>} */}
        <div className='input-con'>
           <input 
           type='text'
            value={title}
            name='title'
            placeholder='Title'
            onChange={handleInput('title')}
           /> 
        </div>

        <div className='input-con'>
           <input 
           type='text'
            value={amount}
            name='amount'
            placeholder='Income amount'
            onChange={handleInput('amount')}
           /> 
        </div>

        <div className='input-con'> 
        <DatePicker id='date'
        placeholderText='Enter Date'
        selected={date}
        dateFormat={"dd/MM/yyyy"}
        onChange={(date) => {
            setInputState({...inputState, date: date})
        }} />
        </div>

        <div className="selects input-con">
                <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                    <option value=""  disabled >Select Option</option>
                    <option value="salary">Salary</option>
                    <option value="freelancing">Freelancing</option>
                    <option value="investments">Investments</option>
                    <option value="stocks">Stocks</option>
                    <option value="bitcoin">Bitcoin</option>
                    <option value="bank">Bank Transfer</option>   
                    <option value="other">Other</option>  
                </select>
            </div>

            <div className="input-con">
                <textarea name="description" value={description} placeholder='Add A Reference' id="description" cols="30" rows="4" onChange={handleInput('description')}></textarea>
            </div>

            <div className="submit-btn">
                <Button 
                    name={'Add Income'}
                    icon={plus}
                    bPading={'.8rem 1.6rem'}
                    bRadi={'30px'}
                    bg={'var(--color-accent'}
                    color={'#fff'}
                />
            </div>  
    </FormStyled>
  )
}

const FormStyled = styled.form`
display: flex;
    flex-direction: column;
    gap: 1.5rem;
    input, textarea, select{
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: .2rem .6rem;
        border-radius: 5px;
        border: 2px solid #fff;
        background: transparent;
        resize: none;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        color: rgba(34, 34, 96, 0.9);
        &::placeholder{
            color: rgba(34, 34, 96, 0.4);
        }
    }
    .input-con{
        input{
            width: 100%;
        }
    }

    .selects{
        display: flex;
        justify-content: flex-end;
        select{
            color: rgba(34, 34, 96, 0.4);
            &:focus, &:active{
                color: rgba(34, 34, 96, 1);
            }
        }
    }

    .submit-btn{
        button{
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            &:hover{
                background: var(--color-green) !important;
            }
        }
    }`;

export default Form
