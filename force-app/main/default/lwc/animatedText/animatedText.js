import { LightningElement, api } from "lwc";

export default class AnimatedText extends LightningElement {
	@api text;
	@api className = "";

	get h1ClassName() {
		return `inline-block w-full text-dark font-bold capitalize text-8xl opacity-0 animate-fade-in delay-500 ${this.className} dark:text-light`;
	}

	get splitText() {
		return this.text?.split(" ").map((word, index) => {
			return {
				key: index,
				label: word,
				style: `animation-delay: ${index * 80}ms;`
			};
		});
	}
}
