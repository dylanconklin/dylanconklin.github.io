import About from './About';
import Experience from './Experience';
import BTDetectorPrivacy from './BTDetectorPrivacy';
import POLAR from './Polar';

export default function Content(page) {
    let content = <About />;
    if (page.page === "") {
        content = <About />
    } else if (page.page === "#about") {
        content = <About />
    } else if (page.page === "#experience") {
        content = <Experience />
    } else if (page.page === "#btdetectorprivacy") {
        content = <BTDetectorPrivacy />
    } else if (page.page === "#polar") {
        content = <POLAR />
    }
    return content
}