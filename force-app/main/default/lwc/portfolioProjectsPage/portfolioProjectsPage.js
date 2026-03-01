import { LightningElement } from "lwc";
import Portfolio from "@salesforce/resourceUrl/Portfolio";

export default class PortfolioProjectsPage extends LightningElement {
	projects = [];
	theme = localStorage.getItem('theme');

	connectedCallback() {
        this.loadProjects();
        window.addEventListener('themeChange', this.handleThemeChange.bind(this));
    }

	loadProjects() {
        this.projects = [
            {
				id: crypto.randomUUID(),
				name: "Air Liquide",
				time: "January 2025 - Current",
				isFeaturedProject: true,
				divClass: 'col-span-12',
				title: "Integration Developer",
				summary: "Air Liquide is a world leader in gases, technologies and services for industry and healthcare.",
				techStack: ["Salesforce", "Lightning Web Components", "Salesforce CLI"],
				img: Portfolio + "/projects/Air-Liquide-logo.png",
				link: "",
				responsibilities: `Integrated Salesforce with an external system to enable seamless data exchange.~
						Built FHIR-compliant JSON dynamically using custom metadata to 
						structure the data. Ensured efficient transmission and processing through a robust integration framework.`,
			},
			{
				id: crypto.randomUUID(),
				name: "Madi International",
				time: "September 2024 - January 2025",
				isFeaturedProject: false,
				divClass: 'col-span-6',
				title: "Front-End Developer",
				summary: "Madi International is a multi-brand, multi-trade channel distributor covering all beauty categories including hair, skin, and nail care.",
				techStack: ["Salesforce", "Lightning Web Components", "Salesforce CLI"],
				img: this.getMadiLogo(),
				link: "",
				responsibilities: `Crafted an intuitive and user-friendly UI that made navigation easier and optimized overall usability, enhancing client satisfaction.~
						Built a B2B experience site using Salesforce B2B Commerce Cloud, designed to meet various business needs effectively.`,
			},
			{
				id: crypto.randomUUID(),
				name: "Nakheel/DHRE",
				time: "June 2023 - September 2024",
				isFeaturedProject: false,
				divClass: 'col-span-6',
				title: "Full-Stack Developer",
				summary: "Nakheel Properties is a real estate development company based in Dubai, United Arab Emirates. Later in 2024, Nakheel was merged under Dubai Holdings.",
				techStack: ["Salesforce", "Lightning Web Components", "Salesforce CLI"],
				img: Portfolio + "/projects/Nakheel-logo.png",
				link: "",
				responsibilities: `Integrated Salesforce with Docusign for digital signing through the Apex toolkit and Docusign App, enhancing client satisfaction.~
						Implemented over six customized business templates using Nintex, streamlining workflows and enhancing business operations.`,
			},
			{
				id: crypto.randomUUID(),
				name: "DMCC",
				time: "October 2022 - June 2023",
				isFeaturedProject: false,
				divClass: 'col-span-6',
				title: "Full-Stack Developer",
				summary: "The Dubai Multi Commodities Centre (DMCC) is a commodities exchange and free-trade zone in the United Arab Emirates.",
				techStack: ["Salesforce", "Lightning Web Components", "Salesforce CLI"],
				img: Portfolio + "/projects/DMCC-logo.png",
				link: "",
				responsibilities: ` Transitioned from AURA and Visualforce pages to LWC, resulting in faster load times and improved user experiences, leading to an increase in user 
						engagement.~
						Delivered a responsive website that enhanced user experience, resulting in increased engagement and overall satisfaction.~
						Designed reusable Lightning Web Components (LWC) to simplify deployment and enhance the development workflow.`,
			},
        ];
    }

	getMadiLogo() {
        return this.theme === 'dark' 
            ? Portfolio + "/projects/Madi-international-logo-light.png" 
            : Portfolio + "/projects/Madi-international-logo.png";
    }

    handleThemeChange(event) {
        this.theme = event.detail.mode;

        this.projects = this.projects.map(p => {
            if (p.name === 'Madi International') {
                return { ...p, img: this.getMadiLogo() };
            }
			
            return p;
        });
    }
}
