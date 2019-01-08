import React from 'react';
import { connect } from 'react-redux'; //connects components to redux store
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => ( //Now no need to worry for store.subscribe or store.getState
	<div>
		{
			props.expenses.length === 0? (
				<p>No expenses</p>
			) : (
			 	props.expenses.map((expense) => {
				return <ExpenseListItem key={expense.id} {...expense} />;
				})
			)
		}
		
	</div>
);

const mapStateToProps = (state) => {
	return {
		expenses: selectExpenses(state.expenses, state.filters)
	};
};

//refer Lecture 101  8:00 for connect()
const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

export default ConnectedExpenseList;