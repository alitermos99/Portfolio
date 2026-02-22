import { LightningElement, api } from "lwc";

export default class Image extends LightningElement {
	@api src;
	@api alt = "";
	@api className = "";
	@api wrapperHeight = "10rem";
	isLoaded = false;

	get imageClass() {
		return this.isLoaded ? `image loaded ${this.className}` : "image hidden";
	}

	get wrapperStyle() {
		return this.isLoaded ? '100%' : `height: ${this.wrapperHeight}`;
	}

	handleLoad() {
		this.isLoaded = true;
	}
}
