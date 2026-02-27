import { LightningElement } from "lwc";
import Portfolio from "@salesforce/resourceUrl/Portfolio";

export default class PortfolioProjectsPage extends LightningElement {

	projects = [
		{
			id: crypto.randomUUID(),
			name: "Air Liquide",
			time: "2025 - Current",
			isFeaturedProject: true,
			title: "Integration Developer",
			summary: "Air Liquide is a world leader in gases, technologies and services for industry and healthcare.",
			techStack: ["Salesforce", "Lightning Web Components", "Salesforce CLI"],
			img: Portfolio + "/projects/Air-Liquide-Logo.png",
			link: "",
			responsibilities: `Integrated Salesforce with an external system to enable seamless data exchange.~
					Built FHIR-compliant JSON dynamically using custom metadata to 
					structure the data. Ensured efficient transmission and processing through a robust integration framework.`,
		},

	]
}
