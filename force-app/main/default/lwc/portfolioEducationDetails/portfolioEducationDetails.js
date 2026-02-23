import { LightningElement, api } from "lwc";

export default class PortfolioEducationDetails extends LightningElement {
	@api type;
	@api time;
	@api info;
	@api place;
    observer;
	inView = false;

    renderedCallback() {
        if (this.observer) return;

        const container = this.template.querySelector('div');

        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    this.inView = entry.isIntersecting;
                });
            },
            { threshold: 0.2 }
        );

        this.observer.observe(container);
    }

    disconnectedCallback() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }

    get containerClasses() {
        const base = 'transform transition-all duration-1000 ease-out';
        const state = this.inView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0';

        return `${base} ${state}`;
    }
}
