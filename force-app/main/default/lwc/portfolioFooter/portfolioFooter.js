import { LightningElement } from "lwc";

export default class PortfolioFooter extends LightningElement {
	get currentYear() {
		return new Date().getFullYear();
	}
}
