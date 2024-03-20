import About from './About';
import Experience from './Experience';
import BTDetectorPrivacy from './BTDetectorPrivacy';

export default function Content(page) {
    let content = <About />;
    if (page.page == "") {
        content = <About />
    } else if (page.page == "#about") {
        content = <About />
    } else if (page.page == "#experience") {
        content = <Experience />
    } else if (page.page == "#btdetectorprivacy") {
        content = <BTDetectorPrivacy />
    }
    return content
}