import React, { useState } from "react";
import App from "./App";
import Navbar from "./component/navbar";
import "./App.css";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./component/menu";
import SignIn from "./component/singinup";

const Root = () => {
	const [showMenu, setShowMenu] = useState(true);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};
	const routers = createBrowserRouter([
		{
			path: "/singinup",
			element: <SignIn />,
		},
		{
			path: "/",
			element: (
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
			),
		},
	]);
	return (
		<React.StrictMode>
			<RouterProvider router={routers} />
		</React.StrictMode>
	);
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
