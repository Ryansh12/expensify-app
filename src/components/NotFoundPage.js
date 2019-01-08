import React from 'react';
import { Link } from 'react-router-dom';
// link helps for client side routing
const NotFoundPage = () => (
	<div>
	404 - <Link to="/">Go home</Link> 
	</div>
);

export default NotFoundPage;