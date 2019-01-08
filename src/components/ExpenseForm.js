import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';  //airbnb react-dates
import 'react-dates/lib/css/_datepicker.css';

//const now = moment();
//console.log(now.format('MMM Do, YYYY')); //refer momentjs.com

//class based component :)
class ExpenseForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			description: props.expense ? props.expense.description : '',
			note: props.expense ? props.expense.note : '',
			amount: props.expense ? (props.expense.amount / 100).toString() : '',
			createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
			calenderFocused: false,
			error: ''
		};
	}
	 
	onDescriptionChange = (e) => {
		const description = e.target.value;
		this.setState(()=> ({ description }));
	};
	onNoteChange = (e) => {
		const note = e.target.value;
		this.setState(()=>({ note }));
	};
	onAmountChange = (e) => {
		const amount = e.target.value;
		if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){ //RegExp for max two digit after decimal( Refer regex101.com )
			this.setState(() => ({ amount }));	
		}
	};
	onDateChange = (createdAt) => {
		if(createdAt) {
			this.setState(() => ({ createdAt }));
		}
	};
	onFocusedChange = ({focused}) => {
		this.setState(() => ({ calenderFocused: focused }))
	};
	onSubmit = (e) => {
		e.preventDefault(); //for no full page refresh

		if(!this.state.description || !this.state.amount ) {
			this.setState(() => ({error: 'Please provide description and amount.'}));
		} else {
			this.setState(() => ({error: ''}));
			this.props.onSubmit({
				description: this.state.description,
				amount: parseFloat(this.state.amount,10) * 100, //to work in cents
				createdAt: this.state.createdAt.valueOf(), //for timestamp(refer momentjs.com)
				note:this.state.note
			});
			console.log('submitted');
		}
	};
	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p> }
				<form onSubmit={this.onSubmit}>
					<input
						type="text"
						placeholder="Description" //when nothing is written
						autoFocus  //when visiting page cursor is automatically on this
						value={this.state.description}
						onChange={this.onDescriptionChange}
					/>
					<input
						type="text"
						placeholder="Amount"
						value={this.state.amount}
						onChange={this.onAmountChange}
					/>
					<SingleDatePicker
					  date={this.state.createdAt} 
					  onDateChange={this.onDateChange} 
					  focused={this.state.calenderFocused} 
					  onFocusChange={ this.onFocusedChange } 
					  numberOfMonths={1} 
					  isOutsideRange={() => false} //for showing previuos dates too 
					/>
					<textarea
						placeholder="Add a note for your expense(optional)"
						value={this.state.note}
						onChange={this.onNoteChange}
					>
					</textarea>
					<button>Add Expense</button>
				</form>
			</div>
		)
	}
}
export default ExpenseForm;