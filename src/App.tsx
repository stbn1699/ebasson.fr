import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ShareCookBook from "./pages/ShareCookBook";
import Mythorium from "./pages/Mythorium";
import CommandCraftor from "./pages/CommandCraftor";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
	return (
		<Router>
			<Header/>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/shareCookBook" element={<ShareCookBook/>}/>
				<Route path="/mythorium" element={<Mythorium/>}/>
				<Route path="/commandCraftor" element={<CommandCraftor/>}/>
				<Route path="/contact" element={<Contact/>}/>
			</Routes>
		</Router>
	);
}

export default App;