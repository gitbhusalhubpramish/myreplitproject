import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from './navbar';
import Menu from './menu';

const Root = () => {
	const [menubtnclick, setMenubtnclick] = useState(false);

	const toggleMenu = () => {
		setMenubtnclick(prevState => !prevState);
	};

	return (
		<React.StrictMode>
			{menubtnclick && <Menu />}
			{/* Pass toggleMenu function as a prop to Navbar */}
			<Navbar toggleMenu={toggleMenu} />
			<App />
		</React.StrictMode>
	);
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
