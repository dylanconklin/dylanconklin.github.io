function reload(destination) {
    window.location.hash = destination
    window.location.reload()
}

function SocialMediaLink({ icon, link }) {
    return (
        <>
            <div className="col">
                <a className="m-4" aria-hidden="true" href={link} target="_blank" rel="noreferrer">
                    <i className={icon}></i>
                </a>
            </div>
        </>
    )
}

function Header() {
    return (
        <>
            <header className="navbar navbar-default navbar-expand-sm text-center navbar-static-top">
                <span className="navbar-brand mx-3" href="#">
                    <a className="nav-link" target="_self" onClick={() => reload('#about')}>
                        Dylan Conklin
                    </a>
                </span>
                <div className="navbar-collapse mx-3">
                    <ul className="navbar-nav me-auto"></ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" target="_self" onClick={() => reload('#about')}>
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" target="_self" onClick={() => reload('#experience')}>
                                Experience
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Contact Me
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                    <a className="dropdown-item" href="https://github.com/dylanconklin" target="_blank" rel="noreferrer">
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="www.linkedin.com/in/dylan-conklin" target="_blank" rel="noreferrer">
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="https://forms.gle/wAZ27RB7i295UK2K7" target="_blank" rel="noreferrer">
                                        Contact Form
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}

function Footer() {
    return (
        <>
            <footer className="navbar navbar-default navbar-expand-md text-center justify-content-center mt-0 p-0">
                <div className="row px-5 py-3">
                    <SocialMediaLink
                        icon="fa-brands fa-github fa-2x"
                        link="https://github.com/dylanconklin"
                    />
                    <SocialMediaLink
                        icon="fa-brands fa-linkedin-in fa-2x"
                        link="www.linkedin.com/in/dylan-conklin"
                    />
                    <SocialMediaLink
                        icon="fa-regular fa-envelope fa-2x"
                        link="https://forms.gle/wAZ27RB7i295UK2K7"
                    />
                </div>
            </footer>
        </>
    )
}

export { Footer };
export { Header };
export { SocialMediaLink };