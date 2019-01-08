import React from 'react';
import { Link } from  'react-router-dom';

const ExpenseListItem = ({  id, description, amount, createdAt }) => (  //destructuring props
	<div>
		<Link to={`/edit/${id}`}>
			<h3>{description}</h3>
		</Link>
		<p>{amount} - {createdAt}</p>
	
	</div>
);

export default ExpenseListItem; //this will allow access to dispatch 