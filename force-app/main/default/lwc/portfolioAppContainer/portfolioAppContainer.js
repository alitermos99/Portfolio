import { LightningElement } from "lwc";

export default class PortfolioAppContainer extends LightningElement {
	isHtmlLoaded = false;

	renderedCallback() {
		const html = document.querySelector("html"); // eslint-disable-line

		if (html && !this.isHtmlLoaded) {
			this.isHtmlLoaded = true;
			html.classList.add("bg-light");
		}
	}
}
