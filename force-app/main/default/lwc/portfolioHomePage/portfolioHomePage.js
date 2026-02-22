import { LightningElement } from "lwc";
import Portfolio from "@salesforce/resourceUrl/Portfolio";

export default class PortfolioHomePage extends LightningElement {
	bulbIcon = Portfolio + "/icons/bulb.svg";
	profilePic = Portfolio + "/profile/developer-pic-1.png";
	resumeLink = Portfolio + "/resume/alitermosSalesforceDeveloperCV.pdf";
}
