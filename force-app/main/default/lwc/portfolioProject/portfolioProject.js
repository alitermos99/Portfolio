import { LightningElement, api } from "lwc";

export default class PortfolioProject extends LightningElement {
	@api name;
	@api time;
	@api title;
	@api summary;
	@api img;
	@api link;
	@api github;
	@api responsibilities;
	@api isFeaturedProject = false;

	get showProjectLink() {
		return this.link || this.github;
	}

	get responsibilitiesArray() {
		return this.responsibilities?.split('~').map((resp, index) => ({
			key: index,
			value: resp
		})) || [];
	}

	get articleClass() {
		const baseClass = 'w-full flex items-center border border-solid border-dark bg-light';

		return this.isFeaturedProject ?
			`${baseClass} justify-between rounded-3xl shadow-2xl p-12` : `${baseClass} flex-col justify-center rounded-2xl p-6 relative`;
	}

	get imageWrapperClass() {
		const baseClass = 'overflow-hidden rounded-lg cursor-pointer';
		return this.isFeaturedProject ? `${baseClass} w-1/2` : `${baseClass} w-full`;
	}

	get infoDivClass() {
		const baseClass = 'flex flex-col items-start justify-between';
		return this.isFeaturedProject ? `${baseClass} w-1/2 pl-6` : `${baseClass} w-full mt-4`;
	}

	get h2Class() {
		const baseClass = 'my-2 w-full text-left font-bold';
		return this.isFeaturedProject ? `${baseClass} text-4xl` : `${baseClass} text-3xl`;
	}

	get linkDivClass() {
		const baseClass = 'mt-2 flex items-center';
		return this.isFeaturedProject ? `${baseClass} text-4xl` : `${baseClass} w-full justify-between flex-row-reverse`;
	}

	get linkClass() {
		const baseClass = 'block px-6 text-lg font-semibold';
		return this.isFeaturedProject ? `${baseClass} ml-4 rounded-lg bg-dark p-2 text-light` : `${baseClass} underline`;
	}

	get githubLinkClass() {
		return this.isFeaturedProject ? 'w-10' : 'w-8';
	}

	get linkSpanText() {
		return this.isFeaturedProject ? 'Visit Project' : 'Visit';
	}
}
