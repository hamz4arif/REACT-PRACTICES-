import React from 'react';
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return(
        <div class="main-wrapper">
			
			<div class="error-box">
				<h1>500</h1>
				<h3 class="h2 mb-3"><i class="fa fa-warning"></i> Oops! Something went wrong</h3>
				<p class="h4 font-weight-normal">The page you requested was not found.</p>
				<Link to="/admin" className="btn btn-primary">Back to Home</Link>
			</div>
		
        </div>
    );
}
export default ErrorPage;
