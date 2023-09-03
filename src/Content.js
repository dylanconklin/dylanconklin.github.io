import About from './About';
import Experience from './Experience';
import AppDetails from './AppDetails';
import Missing from './Missing';

export default function Content(page) {
    let content = <Missing />;
    if (page.page == "") {
        content = <About />
    } else if (page.page == "#about") {
        content = <About />
    } else if (page.page == "#appdetails") {
        content = <AppDetails
            app_name="GraphApp"
            app_logo="images/adjacency-table-builder-logo.jpg"
            github="https://github.com/dylanconklin/Adjacency-Table"
        />
    } else if (page.page == "#experience") {
        content = <Experience />
    }
    return content
}