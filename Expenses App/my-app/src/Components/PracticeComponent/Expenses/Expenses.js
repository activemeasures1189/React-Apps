import React, {useState} from "react";
import ExpenseItem from '../Expenses/ExpenseItem'
import '../Expenses/Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from "./ExpenseFilter";

const Expenses = (props)=>{
  const [enteredYear, setEnteredYear] = useState('2019')
  const filterSelectedYear = (selectedyear)=>{
    setEnteredYear(selectedyear)

  }
    return(
    
  
  <Card className='expenses'>
  <ExpensesFilter selected={enteredYear} onChangeYear={filterSelectedYear}/>
  {props.items.map((expense)=>(
    <ExpenseItem key={expense.id}title={expense.title} amount={expense.amount} date={expense.date} />
  ))}
</Card>
    )

}

export default Expenses