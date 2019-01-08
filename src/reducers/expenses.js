

//Expences Reducers
const expencesReducersDefaultState = [];

const expensesReducer = (state = expencesReducersDefaultState , action) => {
	switch(action.type) {
		case 'ADD_EXPENSE':
			return [...state, action.expense] //using spread operator 

			//state.concat(action.expense); //concat doesn't changes state, it just return new array , and push changes state directly so don't use it
		case 'REMOVE_EXPENSE':
			return state.filter(({ id })=>  id!==action.id); //removes the false returned object
		case 'EDIT_EXPENSE': 
			return state.map((expense) => { //map is used to iterate through all items
				if(expense.id === action.id){
					return {
						...expense,
						...action.updates  //overwriting expense object with the updates using spread operator for OBJECTS
					}
				} else {
					return expense;
				}
			});
		default: 
			return state;
	}
};

 export default expensesReducer;