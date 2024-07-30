import {useEffect} from "react";

const Formulario = ({title, message}) => {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "//js.hsforms.net/forms/embed/v2.js";
		script.charset = "utf-8";
		script.type = "text/javascript";
		script.onload = () => {
			window.hbspt.forms.create({
				region: "na1",
				portalId: "46506146",
				formId: "e0004575-c7ef-4823-ac63-9b25a299f6e4",
				target: "#formulario",
				onFormReady: (form) => {
					// Use a setTimeout to ensure the form is fully rendered
					setTimeout(() => {
						const messageField = form.querySelector('textarea[name="message"]');
						if (messageField) {
							messageField.value = message;
							messageField.dispatchEvent(new Event("input", {bubbles: true}));
						}
					}, 0);
				},
			});
		};
		document.body.appendChild(script);

		return () => {
			if (script.parentNode) {
				script.parentNode.removeChild(script);
			}
		};
	}, []);

	return (
		<div>
			<h1>{title}</h1>
			<div id="formulario"></div>
		</div>
	);
};

export default Formulario;
