import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';   //Provider provides store for all of our components
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'; //for cross-browser consistency
import './styles/styles.scss';

const store= configureStore();

const jsx = (

	<Provider store={store} >
		<AppRouter />
	</Provider>
	 
);

ReactDOM.render(jsx, document.getElementById('app'));

