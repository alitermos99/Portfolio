import { LightningElement, api } from "lwc";

export default class PortfolioSkill extends LightningElement {
	@api x;
    @api y;
    @api name;
    scale = 1;
    translateX = '-10vw';
    translateY = '0vw';
    initialTransitionDone = false;

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

    handleTransitionEnd(event) {
        if (this.initialTransitionDone) return;
        if (!event.propertyName.includes('transform')) return;

        const el = this.template.querySelector('div');
        el.classList.remove('duration-[1000ms]');
        el.classList.add('duration-[300ms]');

        this.initialTransitionDone = true;
    }
}
