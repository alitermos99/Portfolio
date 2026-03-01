import { LightningElement, api } from "lwc";

const STORAGE_KEY = 'theme';
const MEDIA_QUERY = '(prefers-color-scheme: dark)';

export default class PortfolioThemeSwitcher extends LightningElement {
	@api className;
	mode = '';
    mediaQuery;
    handleChange;

    get isDark() {
        return this.mode === 'dark';
    }

	get iconName() {
		return this.mode === 'dark' ? 'sun' : 'moon';
	}

    get buttonClass() {
        const baseClass = 'w-6 h-6 transition-transform duration-200 ease-out hover:-translate-y-0.5 active:scale-90 ml-3 flex items-center justify-center rounded-full p-1';
        return this.mode === 'light' ? `${baseClass} bg-dark text-light` : `${baseClass} bg-light text-dark`;
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
