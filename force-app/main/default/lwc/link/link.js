import { LightningElement, api } from 'lwc';
import { NavigationMixin } from "lightning/navigation"

export default class Link extends NavigationMixin(LightningElement) {
    @api href;

    handleClick() {
        const href = this.href === '/' ? 'Home' : this.href;

        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: href
            }
        });
    }
}