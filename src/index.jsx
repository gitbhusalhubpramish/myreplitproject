import React, { useState } from "react";
import App from "./App";
import Navbar from "./component/navbar";
import "./App.css";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import Menu from "./component/menu";
import ComponentInApp from "./component/componentinapp";

const Root = () => {
	const [showMenu, setShowMenu] = useState(true);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	return (
		<React.StrictMode>
			<div
				className="root "
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Navbar toggleMenu={toggleMenu} />
				<div id="menuandapppar">
					<div id="menu-root" className={`${showMenu ? "menuopen" : ""}`}>
						{showMenu && <Menu />}
					</div>
					<App showMenu={showMenu} />
				</div>
			</div>
		</React.StrictMode>
	);
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
