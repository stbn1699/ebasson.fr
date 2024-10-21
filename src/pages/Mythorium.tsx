import React from "react";
import "../styles/Mythorium.css";

const Mythorium: React.FC = () => {
	return (
		<main className="mythorium-main">
			<h1 className="mythorium-title">Mythorium</h1>
			<p className="mythorium-description">
				Le projet Mythorium est né de mon désir profond de créer un univers où
				mon imagination ne connaîtrait aucune limite. Je voulais un espace où
				je pourrais librement inventer des histoires captivantes, créer des
				personnages riches et diversifiés, établir des royaumes mystérieux et
				introduire des divinités uniques. Cet univers est un terrain de jeu
				créatif, dans lequel je peux expérimenter avec des idées originales,
				donner vie à des aventures inédites et développer des scénarios de
				roleplay qui évoluent selon mes envies. Mythorium est devenu pour moi
				un lieu où je peux non seulement explorer de nouvelles facettes de la
				narration, mais aussi inviter d'autres à participer à cette exploration
				infinie, en contribuant eux aussi à l'expansion de ce monde en
				constante évolution.</p>
			<div className="mythorium-buttons">
				<a onClick={() => window.open("https://mythorium.ebasson.fr/", "_blank")}>
					Accéder au projet
				</a>
				<a onClick={() => window.open("https://github.com/stbn1699/Mythorium", "_blank")}>
					Accéder au GitHub
				</a>
			</div>
		</main>
	);
};

export default Mythorium;