import { createStore } from 'redux';

//Action generators - functions that return action objects
const incrementCount = ({incrementBy = 1} = {}) => ({  //destructuring used here
		type: 'INCREMENT',
		incrementBy  //equal to incrementBy : incrementBy
});
const decrementCount = ({decrementBy = 1} = {}) => ({
	type: 'DECREMENT',
	decrementBy
});
const resetCount = () => ({
	type: 'RESET',
	count: 0
})
const setCount = ({count = 0 } = {}) => ({
	type: 'SET',
	count
})

//Reducers
//Reducers specify how the application's state changes in response to actions sent to the store. 
//Remember that actions only describe what happened, but don't describe how the application's state changes.
//key attributes of Reducers
//1. Reducers are pure functions i.e the output is only determined by input
//2. Never change state or action

const countReducer = (state = {count: 0 }, action) => {  //default value of state is count initialised with 0;
	switch (action.type) {
		case 'INCREMENT' :  
							return {
								count: state.count + action.incrementBy
							};
		case 'DECREMENT' : 
							return {
								count: state.count - action.decrementBy
							};
		case 'RESET'     : return {
								count: 0
							};

		case 'SET'		 : return {
								count:action.count
							};
		default          : return state;
	}
};

const store = createStore(countReducer);



const unsubscribe = store.subscribe(() => {
	console.log(store.getState());	
});




//Actions allows us to change redux store
//its an object that gets sent to the store


//store.dispatch({  // dispatch allows to send the action to redux store
//	type: 'INCREMENT', //COMPULSORY  to write atleast action type in actions 
//					  //and its a convention to write type in CAPS
//	incrementBy: 5
//});

store.dispatch(incrementCount({ incrementBy: 5}));
//unsubscribe(); //allows you to not get notified when changes happen
store.dispatch(incrementCount());

store.dispatch(decrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 10}));

store.dispatch(setCount({ count: 101}));