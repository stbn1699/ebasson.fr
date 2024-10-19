import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import "../styles/Header.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(window.innerWidth < 1030);

	const handleResize = () => {
		setIsMobile(window.innerWidth < 1030);
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<header>
			<nav>
				{isMobile ? (
					<div className="menu-container">
						<button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`menu-button ${isMenuOpen ? "active" : ""}`}>
							<FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars}/>
						</button>
					</div>
				) : null}
				{isMobile && (
					<div className={`menu-box ${isMenuOpen ? "" : "hidden"}`}>
						<ul>
							<li><Link to="/">Home</Link></li>
							<li><Link to="/shareCookBook">ShareCookBook</Link></li>
							<li><Link to="/mythorium">Mythorium</Link></li>
							<li><Link to="/commandCraftor">CommandCraftor</Link></li>
							<li><Link to="/contact">Contact</Link></li>
						</ul>
					</div>
				)}
				{!isMobile && (
					<div className="menu-box-desktop">
						<ul>
							<li><Link to="/">Home</Link></li>
							<li><Link to="/shareCookBook">ShareCookBook</Link></li>
							<li><Link to="/mythorium">Mythorium</Link></li>
							<li><Link to="/commandCraftor">CommandCraftor</Link></li>
							<li><Link to="/contact">Contact</Link></li>
						</ul>
					</div>
				)}
			</nav>
		</header>
	);
};

export default Header;