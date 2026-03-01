import { LightningElement, api, wire } from "lwc";
import { CurrentPageReference } from "lightning/navigation";

export default class PortfolioLink extends LightningElement {
	@api href;
	@api title;
	@api className;
	_currentPageName;

	get linkClassName() {
		return `${this.className} relative group`;
	}

	get spanClassName() {
		const href = this.href === "/" ? "Home" : this.href;
		return `${this._currentPageName === href ? "w-full" : "w-0"} h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-light`;
	}

	@wire(CurrentPageReference)
	getStateParameters(currentPageReference) {
		if (currentPageReference) {
			this._currentPageName = currentPageReference.attributes?.name || null;
		}
	}
}
