import { LightningElement, api } from "lwc";

const STORAGE_KEY = 'theme';
const MEDIA_QUERY = '(prefers-color-scheme: dark)';

export default class PortfolioThemeSwitcher extends LightningElement {
	@api className;
	mode = '';
    mediaQuery;
    handleChange;

	get iconName() {
		return this.mode === 'dark' ? 'moon' : 'sun';
	}

    connectedCallback() {
        this.mediaQuery = window.matchMedia(MEDIA_QUERY);
        const userPref = window.localStorage.getItem(STORAGE_KEY);

        // Equivalent to first useEffect
        this.handleChange = () => {
            let check;

            if (userPref) {
                check = userPref === 'dark' ? 'dark' : 'light';
            } 
			else {
                check = this.mediaQuery.matches ? 'dark' : 'light';
            }

            this.setMode(check);
        };

        this.handleChange();
        this.mediaQuery.addEventListener('change', this.handleChange);
    }

    disconnectedCallback() {
        if (this.mediaQuery && this.handleChange) {
            this.mediaQuery.removeEventListener('change', this.handleChange);
        }
    }

    setMode(mode) {
        this.mode = mode;

        const html = document.documentElement;

        if (mode === 'dark') {
            window.localStorage.setItem(STORAGE_KEY, 'dark');
            html.classList.add('dark');
        } 
		else {
            window.localStorage.setItem(STORAGE_KEY, 'light');
            html.classList.remove('dark');
        }
    }

    toggleTheme() {
        this.setMode(this.mode === 'dark' ? 'light' : 'dark');
    }
}
