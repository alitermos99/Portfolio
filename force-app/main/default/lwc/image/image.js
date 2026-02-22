import { LightningElement, api } from "lwc";

export default class Image extends LightningElement {
	@api src;
	@api alt = "";
	@api className = "";

	isLoaded = false;

	handleLoad() {
		this.isLoaded = true;
	}

	get imageClass() {
		return this.isLoaded ? `image loaded ${this.className}` : "image hidden";
	}
}
