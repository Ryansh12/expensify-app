import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
	const state = filtersReducer(undefined, { type: '@@INIT' }); //as @@INIT is internally passed by redux
	expect(state).toEqual({
		text: '',
		sortBy: 'date',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')
	});
});

test('should set sortBy to amount', () => {
	const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
	expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date',() => {
	const currentState = {
		test:'',
		startDate: undefined,
		endDate:undefined,
		sortBy:'amount'
	}
	const action = {type: 'SORT_BY_DATE'};
	const state = filtersReducer(currentState, action );
	expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
	const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER' , text: 'e'});
	expect(state.text).toBe('e');
});

test('should set startDate filter', () => {
	const state = filtersReducer(undefined, {type: 'SET_START_DATE', startDate: moment().startOf('month')});
	expect(state.startDate).toEqual(moment().startOf('month'));
});

test('should set endDate filter', () => {
	const state = filtersReducer(undefined, {type: 'SET_END_DATE', endDate: moment().endOf('month')});
	expect(state.endDate).toEqual(moment().endOf('month'));
});