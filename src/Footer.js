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

export default function Footer() {
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
                        link="https://www.linkedin.com/in/dylan-conklin-152a07186/"
                    />
                </div>
            </footer>
        </>
    )
}