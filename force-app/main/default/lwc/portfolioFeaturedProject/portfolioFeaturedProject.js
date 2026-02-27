import { LightningElement, api } from "lwc";

export default class PortfolioFeaturedProject extends LightningElement {
	@api name;
	@api time;
	@api title;
	@api summary;
	@api img;
	@api link;
	@api github;
	@api responsibilities;

	get showProjectLink() {
		return this.link || this.github;
	}

	get responsibilitiesArray() {
		return this.responsibilities?.split('~').map((resp, index) => ({
			key: index,
			value: resp
		})) || [];
	}
}
