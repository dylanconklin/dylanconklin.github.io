import About from './About';
import Experience from './Experience';
import Missing from './Missing';

export default function Content(page) {
    let content = <Missing />;
    if (page.page == "") {
        content = <About />
    } else if (page.page == "#about") {
        content = <About />
    } else if (page.page == "#experience") {
        content = <Experience />
    }
    return content
}