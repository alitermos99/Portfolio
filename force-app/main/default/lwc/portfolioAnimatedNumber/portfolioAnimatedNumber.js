import { LightningElement, api } from "lwc";

export default class PortfolioAnimatedNumber extends LightningElement {
	@api value = 100;
    @api duration = 2000;
    observer;
    hasAnimated = false;

    renderedCallback() {
        if (this.observer || this.hasAnimated) return;

        const el = this.template.querySelector("span");

        this.observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];

                if (entry.isIntersecting && !this.hasAnimated) {
                    this.hasAnimated = true;   // ← once: true
                    this.animateValue(el);
                    this.observer.disconnect(); // stop observing
                }
            },
            {
                threshold: 0.3 // trigger when 30% visible (like Framer)
            }
        );

        this.observer.observe(el);
    }

    animateValue(el) {
        const target = Number(this.value);
        const startTime = performance.now();

        const easeOut = (t) => 1 - Math.pow(1 - t, 3);

        const update = (now) => {
            const progress = Math.min((now - startTime) / this.duration, 1);
            const eased = easeOut(progress);

            const latest = eased * target;
            const formatted = latest.toFixed(0);

            if (el && formatted <= target) {
                el.textContent = formatted;
            }

            if (progress < 1) {
                requestAnimationFrame(update); // eslint-disable-line
            } else {
                el.textContent = target;
            }
        };

        requestAnimationFrame(update); // eslint-disable-line
    }
}
