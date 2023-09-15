function Certification({ cert, type, label }) {
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

function Job({ position, employer, time, label, responsibilities }) {
    var label = label + " fa-5x icon center"
    return (
        <>
            <div className="card m-3">
                <div className="row g-0">
                    <div className="card-body col-md-4">
                        <i className={label} />
                        <br />
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

export {Certification};
export {Education};
export {H1};
export {Job};
export {TechSkill};