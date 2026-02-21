import { LightningElement } from 'lwc';
import Portfolio from '@salesforce/resourceUrl/Portfolio';

export default class PortfolioAppContainer extends LightningElement {
	isHtmlLoaded = false
	profilePic = Portfolio + '/profile/developer-pic-1.png';

	renderedCallback(){
		const html = document.querySelector('html');

		if(html && !this.isHtmlLoaded){
			this.isHtmlLoaded = true;
			html.classList.add('bg-light');
		}
	}
}