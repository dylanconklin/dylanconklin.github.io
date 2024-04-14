function AppCard({ title, testflightLink, github, youtubeLink, image, caption, description }) {
    var testflight_button = !testflightLink ? null :
        <Button
            link={testflightLink}
            label={<>
                <i className="fa-solid fa-download p-1" />
                Download on TestFlight
            </>}
            primary={true}
        />
    var github_button = !github ? null :
        <Button
            link={github}
            label={<>
                <i className="fa-brands fa-github p-1" />
                View on Github
            </>}
            primary={false}
        />
    var youtube_button = !youtubeLink ? null :
        <Button
            link={youtubeLink}
            label={<>
                <i className="fa-brands fa-youtube p-1" />
                Watch on YouTube
            </>}
            primary={false}
        />
    return (
        <>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4 center">
                        <img className="shadow-lg" id="app-logo" src={image} alt="App Icon" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body box">
                            <h2 className="card-title">
                                {title}
                            </h2>
                            <div className="secondary">
                                {caption}
                            </div>
                            <br />
                            <p className="card-text">
                                {description}
                            </p>
                            {testflight_button}
                            {github_button}
                            {youtube_button}
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
                            <div className="secondary">
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
                    <div className="col-md-4 center">
                        <i className={label} />
                    </div>
                    <div className="card-body col-md-8 box">
                        <h2 className="card-title">
                            {cert}
                        </h2>
                        <div className="secondary">
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

function Education({ school, degree }) {
    let degrees = degree.map(function (degree) {
        return <>
            <div className="secondary">
                {degree[0]}
            </div>
            <p className="card-text">
                {degree[1]}
            </p>
        </>
    })
    return (
        <>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4 center">
                        <i className="fa-solid fa-graduation-cap fa-5x icon center" />
                    </div>
                    <div className="card-body col-md-8 box">
                        <h2 className="card-title">
                            {school}
                        </h2>
                        {degrees}
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
                        <div className="secondary">
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