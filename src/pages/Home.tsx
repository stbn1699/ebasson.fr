import React from "react";
import "../styles/Home.css";

const Home: React.FC = () => {
	return (
		<main className="home-main">
			<h1 className="home-title">Bienvenue</h1>
			<p className="home-description">Ceci est un portfolio visant à présenter mes différents projets.</p>
		</main>
	);
};

export default Home;