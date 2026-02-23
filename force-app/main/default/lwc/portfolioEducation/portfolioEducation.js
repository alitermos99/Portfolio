import { LightningElement } from "lwc";

export default class PortfolioEducation extends LightningElement {
	section;
	progress = 0;
	reference = this;
	education = [
		{
			id: crypto.randomUUID(),
			type: "Bachelor degree In Computer Science",
			time: "2018 - 2021",
			place: "Lebanese University",
			info: "Relevant courses included Data Structures and Algorithms, Computer Systems Engineering.",
		},
		{
			id: crypto.randomUUID(),
			type: "High School degree",
			time: "2017 - 2018",
			place: "Hussein Maktabe High School",
			info: "Relevant courses included Physics, Chemistry, Biology, and Mathematics."
		}
	];

    get lineStyle() {
        return `transform: scaleY(${this.progress});`;
    }

    renderedCallback() {
        if (this.initialized) return;
        this.initialized = true;

        this.section = this.refs.section;

        window.addEventListener("scroll", this.handleScroll, { passive: true });
        window.addEventListener("resize", this.handleScroll);

        this.handleScroll();
    }

    handleScroll = () => {
        const rect = this.section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const total = rect.height + 80;
        const current = viewportHeight - rect.top;

        let progress = current / total;
        progress = Math.max(0, Math.min(1, progress));

        this.progress = progress;
    };

    disconnectedCallback() {
        window.removeEventListener("scroll", this.handleScroll);
        window.removeEventListener("resize", this.handleScroll);
    }
}
