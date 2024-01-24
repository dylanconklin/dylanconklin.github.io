function AppCard({ title, github, page, image, caption, description }) {
    var primary_button = !github ? null :
    <Button
        link={page}
        label={<>
            <i className="fa-brands fa-youtube p-1" />
            View on Github
        </>}
        primary={true}
    />
    var secondary_button = !page ? null :
        <Button
            link={page}
            label={<>
                <i className="fa-brands fa-github p-1" />
                Watch on YouTube
            </>}
            primary={false}
        />
    return (
        <>
            <div className="card mb-3 px-5">
                <div className="row g-0">
                    <div className="col-md-4 center">
                        <img className="shadow-lg" id="app-logo" src={image} alt="App Icon" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body box">
                            <h2 className="card-title">
                                {title}
                            </h2>
                            <div className="secondaryText">
                                {caption}
                            </div>
                            <br />
                            <p className="card-text">
                                {description}
                            </p>
                            {primary_button}
                            {secondary_button}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function BioCard({ title, github, page, image, caption, description }) {
    return (
        <>
            <div className="card mb-3 px-5">
                <div className="row g-0">
                    <div className="col-md-4 center">
                        <img className="shadow-lg" id="portrait" src={image} alt="Photo of Dylan Conklin" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">
                                {title}
                            </h2>
                            <div className="secondaryText">
                                {caption}
                            </div>
                            <br />
                            <p className="card-text">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function Button({ link, label, primary = false }) {
    var buttonClass = "btn btn-" + (primary ? "primary" : "secondary") + " m-1"
    return (
        <>
            <a href={link} target="_blank" rel="noreferrer">
                <button type="button" className={buttonClass}>
                    {label}
                </button>
            </a>
        </>
    )
}

function Certification({ cert, type, time, label }) {
    var label = label + " fa-5x icon"
    return (
        <>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4 p-3 center">
                        <i className={label} />
                    </div>
                    <div className="card-body col-md-8 box">
                        <h2 className="card-title">
                            {cert}
                        </h2>
                        <div className="secondaryText">
                            {type}
                        </div>
                        <p className="card-text">
                            {time}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

function Education({ school, degree, year }) {
    return (
        <>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4 p-3 center">
                        <i className="fa-solid fa-graduation-cap fa-5x icon center"></i>
                    </div>
                    <div className="card-body col-md-8 box">
                        <h2 className="card-title">
                            {school}
                        </h2>
                        <div className="secondaryText">
                            {degree}
                        </div>
                        <p className="card-text">
                            {year}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

function H1({ content }) {
    return (
        <>
            <h1 className="m-5 center">
                {content}
            </h1>
        </>
    )
}

function Job({ position, employer, time, responsibilities }) {
    return (
        <>
            <div className="card m-3">
                <div className="row g-0">
                    <div className="card-body col-md-4">
                        <h2 className="card-title">
                            {position}
                        </h2>
                        <div className="secondaryText">
                            {employer}
                        </div>
                        <p className="card-text">
                            {time}
                        </p>
                    </div>
                    <div className="card-body col-md-8 box">
                        <h2 className="card-title">
                            Responsibilities
                        </h2>
                        <p className="card-text">
                            {responsibilities}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

function TechSkill({ skill, label }) {
    var label = label + " fa-5x icon center"
    return (
        <>
            <div className="col m-3">
                <i className={label} />
                <br />
                {skill}
            </div>
        </>
    )
}

export { AppCard };
export { BioCard };
export { Button };
export { Certification };
export { Education };
export { H1 };
export { Job };
export { TechSkill };