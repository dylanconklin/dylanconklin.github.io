export default function Header() {
    return (
        <>
            <header className="navbar navbar-default navbar-expand-md text-center navbar-static-top">
                <span className="navbar-brand" href="#">
                    <img id="logo" alt="logo with the text 'Dylan Conklin'" src="./images/name.svg" />
                </span>
                <div className="navbar-collapse">
                    <ul className="navbar-nav me-auto"></ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" target="_self" onClick={() => reload('#about')}>
                                About
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Social Media
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" href="https://github.com/dylanconklin">
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="https://www.linkedin.com/in/dylan-conklin-152a07186/">
                                        LinkedIn
                                    </a>
                                </li>
                            </ul>
                        </li>
                        {/* <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Projects
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <a class="dropdown-item" href="#">
                                SAFE
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">
                                GameRank
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">
                                Adjacency Table
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">
                                Number Converter
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">
                                Word Games
                            </a>
                        </li>
                    </ul>
                </li> */}
                        <li className="nav-item">
                            <a className="nav-link" target="_self" onClick={() => reload('#experience')}>
                                Experience
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}

function reload(destination) {
    window.location.hash = destination
    window.location.reload()
}