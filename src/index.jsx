import React, { useState } from 'react';
import App from './App';
import Navbar from './component/navbar';
import "./App.css";
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import Menu from './component/menu';

const Root = () => {
	const [showMenu, setShowMenu] = useState(true);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	return (
		<React.StrictMode>
			<div className="root">
				<div id="menu-root">
					{showMenu && <Menu />}
				</div>
				<Navbar toggleMenu={toggleMenu} />
				<App />
			</div>
		</React.StrictMode>
	);
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);