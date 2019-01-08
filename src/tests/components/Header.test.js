// react-test-renderer - allows us to render our components inside of just regular javascript code 
// and then we can assert something about what got render
import React from 'react';
import { shallow } from 'enzyme';
//import ReactShallowRenderer from 'react-test-renderer/shallow'; //and other is full DOM rendering
//shallow rendering renders the given component
//full DOM rendering renders child component also
//import toJSON from 'enzyme-to-json'; // setup automatically in jest.config.json file
//used to get snapshot just like jest
import Header from '../../components/Header';

test('should render Header correctly', () => {
	//const renderer = new ReactShallowRenderer();
	//renderer.render(<Header />);
	//console.log(renderer.getRenderOutput()/*returns rendered output of jsx we put in render i.e <Header /> */);
	//expect(renderer.getRenderOutput()).toMatchSnapshot();
	const wrapper = shallow(<Header />);
	//expect(wrapper.find('h1').length).toBe(1); //to checks if only one <h1>  tag exists
	expect(wrapper).toMatchSnapshot();
});

//Snapshots allows us to track change in data over time 