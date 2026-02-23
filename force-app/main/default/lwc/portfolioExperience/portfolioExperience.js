import { LightningElement } from "lwc";

export default class PortfolioExperience extends LightningElement {
    section;
	progress = 0;
	reference = this;
	experience = [
		{
			id: crypto.randomUUID(),
			position: "Multi-Functional Developer",
			company: "EI Technologies",
			comapnyLink: "",
			time: "October 2022 - Present",
			address: "Aoukar, LB",
			work: `Integrated Salesforce with other systems using Apex (web services) and developed effective Apex triggers, classes, and flows, streamlining data
					processes and increasing data quality.~
					Utilized reusable Lightning Web Components (LWC), significantly reducing development time and enhancing efficiency.~
					Strengthened system integrity and functionality by assisting in application testing.~
					Refactored existing code to improve readability and maintainability.`
		},
		{
			id: crypto.randomUUID(),
			position: "Intern Backend Developer",
			company: "Reconguide",
			comapnyLink: "",
			time: "December 2021 - September 2022",
			address: "Remote, LB",
			work: `Created REST APIs to efficiently retrieve and manage data.~
					Demonstrated proficiency in writing optimized, low-complexity code that enhances performance.~
					Conducted thorough testing to identify and resolve application bugs.`
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
