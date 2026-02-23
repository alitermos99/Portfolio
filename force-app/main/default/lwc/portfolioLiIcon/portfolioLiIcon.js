import { LightningElement, api } from "lwc";

export default class PortfolioLiIcon extends LightningElement {
	@api reference;
	@api parentId;
	progress = 0;
	scrollHandler;

    get pathStyle() {
        // stroke-dasharray for r=20 → 2πr ≈ 125.6
        return `stroke-dasharray:125.6; stroke-dashoffset:${125.6 * (1 - this.progress)}; transition:stroke-dashoffset 50ms linear;`;
    }

    renderedCallback() {
        if (this.initialized) return;
        this.initialized = true;

        this.scrollHandler = (event) => this.handleScroll(event, this.parentId, this.reference);

        window.addEventListener("scroll", this.scrollHandler, { passive: true });
        window.addEventListener("resize", this.scrollHandler);

        this.handleScroll();
    }

    handleScroll(event, parentId, reference) {
		const parentIdRef = parentId || this.parentId;
		const referenceEl = reference || this.reference;

        const parentEl = referenceEl?.template?.querySelector(`li[data-id="${parentIdRef}"]`);
        if (!parentEl) return;

        const rect = parentEl.getBoundingClientRect();
        const vh = window.innerHeight;
        const elementCenter = rect.top + rect.height / 2;
        const start = vh;
        const end = vh / 2;
        let progress = (start - elementCenter) / (start - end);

        this.progress = Math.max(0, Math.min(1, progress));
    }

    disconnectedCallback() {
        // remove listeners safely
        if (this.scrollHandler) {
            window.removeEventListener("scroll", this.scrollHandler);
            window.removeEventListener("resize", this.scrollHandler);
        }
    }
}
