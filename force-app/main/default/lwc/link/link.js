import { LightningElement, api } from "lwc";
import { NavigationMixin } from "lightning/navigation";

export default class Link extends NavigationMixin(LightningElement) {
	@api href;
	@api target;
	@api className = "";
	@api download = false;
	@api navigationType = "comm__namedPage";

	get slotClassName() {
		return `cursor-pointer ${this.className}`;
	}

	handleClick() {
		const href =
			this.href === "/" && this.navigationType === "comm__namedPage"
				? "Home"
				: this.href;
		const attributes =
			this.navigationType === "comm__namedPage"
				? { name: href }
				: { url: href };

		if (this.download && this.navigationType === "standard__webPage") {
			const link = document.createElement("a");
			link.href = href;
			link.download = "";
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
			return;
		}

		if (this.target === "_blank") {
			this[NavigationMixin.GenerateUrl]({
				type: this.navigationType,
				attributes
			}).then((url) => {
				window.open(url, "_blank");
			});
		} else {
			this[NavigationMixin.Navigate]({
				type: this.navigationType,
				attributes
			});
		}
	}
}
