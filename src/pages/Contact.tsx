import React from "react";
import "../styles/Contact.css";

const Contact: React.FC = () => {
	return (
		<main className="contact-main">
			<h1 className="contact-title">Contact</h1>
			<div className="contact-links">
				<a href="https://github.com/stbn1699">GitHub</a><br/>
				<a href="mailto:stbnbasson@gmail.com">E-mail</a><br/>
				<a href="https://www.linkedin.com/in/esteban-basson-2ab8761a5/">LinkedIn</a><br/>
				<a href="https://x.com/stbn_deb">Twitter / X</a><br/>
				<a href="https://www.instagram.com/stbn__169/">Instagram</a><br/>
				<a href="https://www.threads.net/@stbn__169">Threads</a><br/>
				<a href="https://letterboxd.com/stbn169/">Letterboxd</a><br/>
				<a href="https://www.youtube.com/channel/UCRy7b3lwxdaAHZL_Mbc2vQA">YouTube</a><br/>
			</div>
		</main>
	);
};

export default Contact;