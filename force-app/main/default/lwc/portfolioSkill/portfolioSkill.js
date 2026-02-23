import { LightningElement, api } from "lwc";

export default class PortfolioSkill extends LightningElement {
	@api x;
    @api y;
    @api name;

    translateX = '0vw';
    translateY = '0vw';
    scale = 1;

    observer;

    get dynamicStyle() {
        return `transform: translate(${this.translateX}, ${this.translateY}) scale(${this.scale});`;
    }

    renderedCallback() {
        if (this.observer) return;

        const el = this.template.querySelector('div');

        this.observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                this.translateX = this.x;
                this.translateY = this.y;

                this.observer.disconnect();
            }
        }, { threshold: 0.3 });

        this.observer.observe(el);
    }

    handleMouseOver() {
        this.scale = 1.05;
    }

    handleMouseOut() {
        this.scale = 1;
    }
}
