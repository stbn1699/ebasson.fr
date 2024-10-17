import React from "react";
import "../styles/ShareCookBook.css";

const ShareCookBook: React.FC = () => {
	return (
		<main className="sharecookbook-main">
			<h1 className="sharecookbook-title">ShareCookBook</h1>
			<p className="sharecookbook-description">
				Ce projet est né de ma passion pour la cuisine et de mon envie de rendre le partage de recettes simple
				et accessible. J'ai toujours aimé découvrir de nouvelles saveurs et échanger des idées culinaires avec
				mes proches, et j'ai réalisé que créer une plateforme pour cela serait un excellent moyen de renforcer
				ces liens. L'objectif principal est de faciliter le partage de recettes entre amis et famille, tout en
				encourageant la découverte de nouvelles inspirations en cuisine. Ce projet vise également à rendre la
				cuisine plus accessible à tous, peu importe le niveau de compétence, en simplifiant les échanges
				d'idées. La cuisine, pour moi, est un espace de convivialité, où la communauté joue un rôle central, et
				je souhaite que ce projet reflète cette importance en offrant un cadre chaleureux pour échanger autour
				de plats délicieux.
			</p>
			<div className="sharecookbook-buttons">
				<button onClick={() => window.open("https://sharecookbook.ebasson.fr/", "_blank")}>
					Accéder au projet
				</button>
				<button onClick={() => window.open("https://github.com/stbn1699/ShareCookbook", "_blank")}>
					Accéder au GitHub
				</button>
			</div>
		</main>
	);
};

export default ShareCookBook;