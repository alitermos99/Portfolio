import { LightningElement, api } from "lwc";

export default class PortfolioIcons extends LightningElement {
	@api iconName;
	@api className;
	@api restProps;
	@api isDark = false;

	get github() {
		return this.iconName === "github";
	}

	get linkedIn() {
		return this.iconName === "linkedIn";
	}

	get themeIcons() {
		return this.iconName === "sun" || this.iconName === "moon";
	}

	get circularText() {
		return this.iconName === "circularText";
	}

	get linkArrowIcon() {
		return this.iconName === "linkArrow";
	}

	get sunClass() {
        return `sun svg w-4 h-4 ${this.isDark ? 'sun-hide' : 'sun-show'}`;
    }

    get moonClass() {
        return `moon svg w-4 h-4 ${this.isDark ? 'moon-show' : 'moon-hide'}`;
    }

	get themeIconsWrapperClass() {
		return `icon-wrapper ${this.className}`;
	}
}
