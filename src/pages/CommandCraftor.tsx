import React from "react";
import "../styles/CommandCraftor.css";

const CommandCraftor: React.FC = () => {
	return (
		<main className="commandCraftor-main">
			<h1 className="commandCraftor-title">CommandCraftor</h1>
			<p className="commandCraftor-description">
				ComandCraftor est un projet que j'ai lance, a la fois pour acquerir de l'experience et pour repondre a
				un besoin specifique dans la communaute des joueurs de Minecraft. J'ai remarque que beaucoup des
				generateurs de commandes existants sont souvent trop complexes, surtout pour les jeunes joueurs ou ceux
				qui ne cherchent qu'a generer des commandes basiques sans se perdre dans des options inutiles. Mon
				objectif etait de creer un generateur simple, intuitif et accessible a tous, sans sacrifier les
				fonctionnalites essentielles dont les joueurs ont besoin. Avec ComandCraftor, je voulais offrir un outil
				qui se concentre uniquement sur l'essentiel, sans ajouter de couches de complexite qui risquent de
				decourager les joueurs lambda, tout en etant assez performant pour satisfaire leurs attentes.
			</p>
			<div className="commandCraftor-buttons">
				<div className="McButtons" data-testid="ButtonsJavaEdition">
					<div className="mc-button full" onClick={() => window.open("https://commandcraftor.ebasson.fr/", "_blank")}>
						<div className="title">Acceder au projet</div>
					</div>
				</div>
				<div className="McButtons" data-testid="ButtonsJavaEdition">
					<div className="mc-button full" onClick={() => window.open("https://github.com/ESI4-2024-2025/command_craftor", "_blank")}>
						<div className="title">Acceder au GitHub</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default CommandCraftor;