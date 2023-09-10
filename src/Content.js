import About from './About';
import Experience from './Experience';

export default function Content(page) {
    let content = <About />;
    if (page.page == "") {
        content = <About />
    } else if (page.page == "#about") {
        content = <About />
    } else if (page.page == "#experience") {
        content = <Experience />
    }
    return content
}