import { LightningElement, wire } from "lwc";
import { CurrentPageReference } from "lightning/navigation";

export default class PortfolioAppContainer extends LightningElement {
	currentPageName;
	isHtmlLoaded = false;

	get isHomePage() {
		return this.currentPageName === "Home";
	}

	get isAboutPage() {
		return this.currentPageName === "About__c";
	}

	get isProjectsPage() {
		return this.currentPageName === "Projects__c";
	}

	@wire(CurrentPageReference)
	getStateParameters(currentPageReference) {
		if (currentPageReference) {
			this.currentPageName = currentPageReference.attributes?.name;
		}
	}

	renderedCallback() {
		const html = document.querySelector("html"); // eslint-disable-line

		if (html && !this.isHtmlLoaded) {
			this.isHtmlLoaded = true;
			html.classList.add("bg-light");
		}
	}
}
