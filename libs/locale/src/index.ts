
import en from './en.json';

let Language = en;
if (typeof window !== "undefined") {
    const lang = window.localStorage.getItem('lang');
    switch (lang) {
        case 'en': Language = en;
            break;
    }
}

export default Language;
