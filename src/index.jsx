import React from 'react';
import App from './App';
import Navbar from './navbar';
import "./App.css";
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import Menu from './menu';
const Root = ({openmenu}) => {
	var menuopen = openmenu;
	return (
		<React.StrictMode>
			<div className="root">
				<Menu />
				<Navbar />
				<App />
			</div>
			
		</React.StrictMode>
	);
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
