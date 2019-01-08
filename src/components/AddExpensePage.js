import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpensePage = (props) => (
	<div>
		<h1>Add Expense</h1>
		<ExpenseForm 
			onSubmit={(expense)=>{
				props.dispatch(addExpense(expense));
				props.history.push('/'); //to redirect the page and also no full page refresh(client side routing)
			}}
		/>
	</div>
);

export default connect()(AddExpensePage);