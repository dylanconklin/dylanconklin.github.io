function List({ items }) {
    var list = items.array.forEach(element => {

        console.log(element);
    });
    return (
        <>
            <ul>
                {list}
            </ul>
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
                        <div className="caption">
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
                        <div className="caption">
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
                        <div className="caption">
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

export default function Experience() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="m-5">Education</h1>
                        <Education
                            school="Portland State University"
                            degree="Bachelor of Science, Computer Science"
                            year="2023"
                        />
                        <Education
                            school="Portland Community College"
                            degree="Associate of Arts"
                            year="2021"
                        />
                    </div>
                    <div className="col">
                        <h1 className="m-5">Certifications</h1>
                        <div className="container">
                            <div className="row">
                                <Certification
                                    cert="Microsoft Office Specialist"
                                    type="PowerPoint"
                                    label="fa-brands fa-microsoft"
                                />
                            </div>
                            <div className="row">
                                <Certification
                                    cert="Microsoft Technology Associate"
                                    type="HTML5 Application Development Fundamentals"
                                    label="fa-solid fa-code"
                                />
                            </div>
                            <div className="row">
                                <Certification
                                    cert="CompTIA"
                                    type="IT Fundamentals"
                                    label="fa-solid fa-microchip"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="m-5">Tech Skills</h1>
            <div className="container text-center">
                <div className="row">
                    <TechSkill
                        skill="Swift"
                        label="fa-brands fa-swift"
                    />
                    <TechSkill
                        skill="C / C++ / Objective - C"
                        label="fa-solid fa-c"
                    />
                    <TechSkill
                        skill="SQL"
                        label="fa-solid fa-database"
                    />
                    <TechSkill
                        skill="Git"
                        label="fa-brands fa-git-alt"
                    />
                </div>
                <div className="row">
                    <TechSkill
                        skill="HTML"
                        label="fa-brands fa-html5"
                    />
                    <TechSkill
                        skill="CSS"
                        label="fa-brands fa-css3"
                    />
                    <TechSkill
                        skill="Javascript / Typescript"
                        label="fa-brands fa-square-js"
                    />
                    <TechSkill
                        skill="React"
                        label="fa-brands fa-react"
                    />
                </div>
            </div>
            <h1 className="m-5">Work Experience</h1>
            <div className="px-3">
                <Job
                    position="Student Software Developer"
                    employer="Portland State University"
                    time="January 2023 - June 2023"
                    label="fa-solid fa-hammer"
                    responsibilities={<>
                        <ul>
                            <li>Implemented backend code, including:</li>
                            <ul>
                                <li>Unique code generation class</li>
                                <li>Feedback filtering and sanitation</li>
                                <ul>
                                    <li>Filter out vulgar language</li>
                                    <li>Filter out invalid characters</li>
                                    <li>Prevent SQL injection</li>
                                </ul>
                                <li>Sentiment analysis</li>
                            </ul>
                            <li>Implemented and tested server endpoints</li>
                            <li>Wrote tests for code generating and input verification functions using the Jest testing suite for React</li>
                            <li>Worked with UI team to ensure backend compatibility with frontend web components and forms</li>
                            <li>Managed development branches using Git, including branching, merging, and pull requests</li>
                            <li>Participated in team code reviews via GitHub</li>
                            <li>Wrote documentation for technical documents including:</li>
                            <ul>
                                <li>Details of implementation</li>
                                <li>Logical reasoning behind implementation decisions</li>
                                <li>Theoretical limits of the software, and measures taken to prevent the theoretical limits from taking place</li>
                                <ul>
                                    <li>Limited number of unique codes; time limited codes</li>
                                </ul>
                            </ul>
                            <li>Presented the final product to the client</li>
                        </ul>
                    </>}
                />
                <Job
                    position="Academic Tutor"
                    employer="Tigard High School"
                    time="February 2017 - June 2017"
                    label="fa-solid fa-user-graduate"
                    responsibilities={<>
                        <ul>
                            <li>Assist students in:</li>
                            <ul>
                                <li>working through course material</li>
                                <li>project planning</li>
                                <li>writing and executing code</li>
                            </ul>
                            <li>Give constructive feedback to students</li>
                            <li>Keep students engaged with coursework</li>
                            <li>Assist with grading and evaluating projects</li>
                        </ul>
                    </>}
                />
                <Job
                    position="Sales Representative"
                    employer="The Wireless Stores / T - Mobile"
                    time="November 2016 - February 2017"
                    label="fa-solid fa-users"
                    responsibilities={<>
                        <ul>
                            <li>Assist customer with:</li>
                            <ul>
                                <li>managing their account</li>
                                <li>troubleshooting devices</li>
                                <li>setting up new devices and transferring user data</li>
                            </ul>
                            <li>Pitch plans and devices to customers</li>
                            <li>Resolve software issues</li>
                            <li>Answer questions about coverage, plans, devices, and accessories</li>
                            <li>Follow up with customers after their visit</li>
                            <li>Log sales and inventory</li>
                        </ul>
                    </>}
                />
            </div>
        </>
    )
}