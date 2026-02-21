import { LightningElement, api } from "lwc";

export default class PortfolioLayout extends LightningElement {
	@api className;

	get divClassName() {
		return `w-full h-full inline-block z-0 bg-light p-32 ${this.className}`;
	}
}
