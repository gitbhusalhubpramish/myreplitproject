import React, { useState, memo, useMemo,useEffect, useCallback } from "react";
import App from "./App";
import Navbar from "./component/navbar";
import "./App.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Menu from "./component/menu";
import SignIn from "./component/singin";
import reportWebVitals from './reportWebVitals';
import "./index.css";
import About from "./component/about";
import SignUp from "./component/singup";

const Root = () => {
	const [showMenu, setShowMenu] = useState(true);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};
	const [results, setResults] = useState([]);
	const [respond, setRespond] = useState(false);
	const [query, setQuery] = useState("");
	const ResultsList = ({ results }) => {
		return (
			<div className="w-full max-w-md mt-0 bg-gray-400">
				{results.length > 0  ? (
					<ul className="list-disc pl-0 border-1 border-solid border-black">
						{results.map((result, index) => (
							<li
								className="border-1 border-solid border-black p-0"
								key={index}
							>
								{result}
							</li>
						))}
					</ul>
				) : null}
			</div>
		);
	};
	// Memoize fetchSearchResults
	const fetchSearchResults = useMemo(() => {
		return async () => {
			return new Promise((resolve) => {
				// Dummy data for demonstration purposes
				const data = [
					"Apple",
					"Banana",
					"Cherry",
					"Date",
					"Elderberry",
					"Fig",
					"Grape",
					"Honeydew",
				];
				const filteredResults = data.filter((item) =>
					item.toLowerCase().includes(query.toLowerCase()),
				);
				resolve(filteredResults);

			});
		};
	}, [query]); // Only re-create fetchSearchResults if query changes

	// Use useEffect to fetch data only when 'query' changes
	useEffect(() => {
		const fetchData = async () => {
			const results = await fetchSearchResults();
			setResults(results);
		};
		fetchData();
	}, [query, fetchSearchResults]); // Include fetchSearchResults in dependencies

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			performSearch();
		}
	};

	const performSearch = useCallback(() => {
		// Call fetchSearchResults to get the results
		fetchSearchResults();
	}, [fetchSearchResults]);
	const handleResultsChange = () => {
		setRespond(results.length > 0);
	};
	const routers = createBrowserRouter([
		{
			path: "/singinup/singin",
			element: <SignIn />,
		},
		{
			path: "/singinup/singup",
			element: <SignUp />,
		},
		{
			path: "/",
				element: <Navigate to="/home" />
		},
		{
			path: "/home",
			element: (
				<>
					<Navbar toggleMenu={toggleMenu} handleResultsChange={handleResultsChange} handleKeyPress={handleKeyPress} ResultsList={ResultsList} query={query} performSearch={performSearch} results={results} respond={respond} setQuery={setQuery}/>
					<div id="menuandapppar">
						<div id="menu-root" className={`${showMenu ? "menuopen" : ""}`}>
							{showMenu && <Menu />}
						</div>
						<App showMenu={showMenu} results={results} ResultsList={ResultsList}/>
					</div>
				</>
			),
		},
		{
			path:"/about",
			element: <About />
			
		}
	]);
	return (
		<React.StrictMode>
			<RouterProvider router={routers} />
		</React.StrictMode>
	);
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
reportWebVitals();