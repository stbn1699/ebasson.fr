import React from "react";
import "../styles/Contact.css";

const Contact: React.FC = () => {
	return (
		<main className="contact-main">
			<h1 className="contact-title">Contact</h1>
			<div className="contact-links">
				<a id="contact-button" data-umami-event="github-project" href="https://github.com/stbn1699">GitHub</a><br/>
				<a id="contact-button" data-umami-event="email-project" href="mailto:stbnbasson@gmail.com">E-mail</a><br/>
				<a id="contact-button" data-umami-event="linkedin-project" href="https://www.linkedin.com/in/esteban-basson-2ab8761a5/">LinkedIn</a><br/>
				<a id="contact-button" data-umami-event="twitter-project" href="https://x.com/stbn_deb">Twitter / X</a><br/>
				<a id="contact-button" data-umami-event="instagram-project" href="https://www.instagram.com/stbn__169/">Instagram</a><br/>
				<a id="contact-button" data-umami-event="threads-project" href="https://www.threads.net/@stbn__169">Threads</a><br/>
				<a id="contact-button" data-umami-event="letterboxd-project" href="https://letterboxd.com/stbn169/">Letterboxd</a><br/>
				<a id="contact-button" data-umami-event="youtube-project" href="https://www.youtube.com/channel/UCRy7b3lwxdaAHZL_Mbc2vQA">YouTube</a><br/>
			</div>
		</main>
	);
};

export default Contact;