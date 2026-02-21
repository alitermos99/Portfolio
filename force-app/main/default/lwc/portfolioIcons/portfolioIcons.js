import { LightningElement, api } from "lwc";

export default class PortfolioIcons extends LightningElement {
	@api iconName;
	@api className;
	@api restProps;

	get github() {
		return this.iconName === "github";
	}

	get linkedIn() {
		return this.iconName === "linkedIn";
	}

	get sunIcon() {
		return this.iconName === "sun";
	}

	get moonIcon() {
		return this.iconName === "moon";
	}

	get circularText() {
		return this.iconName === "circularText";
	}

	get linkArrowIcon() {
		return this.iconName === "linkArrow";
	}
}
