function Education({ school, degree, year }) {
    return (
        <>
            <div className="card mb-3 center">
                <div className="row g-0">
                    <div className="col">
                        <i className="fa-solid fa-graduation-cap fa-5x icon center"></i>
                        <div className="card-body">
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
            <h1 className="m-5">Education</h1>
            <Education
                school="Portland State University"
                degree="Bachelor of Science, Computer Science"
                year="2023"
            />
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
                </div>
            </div>
            <h1 className="m-5">Certifications</h1>
            <div className="container text-center">
                <div className="row">
                    <TechSkill
                        skill="Microsoft Office Specialist - PowerPoint"
                        label="fa-brands fa-microsoft"
                    />
                    <TechSkill
                        skill="Microsoft Technology Associate - HTML5 Application Development Fundamentals"
                        label="fa-solid fa-code"
                    />
                    <TechSkill
                        skill="CompTIA IT Fundamentals"
                        label="fa-solid fa-microchip"
                    />
                </div>
            </div>
            <h1 className="m-5">Work Experience</h1>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <div className="card-body">
                            <h2 className="card-title">
                                Student Software Developer
                            </h2>
                            <div className="caption">
                                Portland State University
                            </div>
                            <p className="card-text">
                                January 2023 - June 2023
                            </p>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">
                                Responsibilites
                            </h2>
                            <div className="caption">
                            </div>
                            <div className="card-text">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <div className="card-body">
                            <h2 className="card-title">
                                Academic Tutor
                            </h2>
                            <div className="caption">
                                Tigard High School
                            </div>
                            <p className="card-text">
                                February 2017 - June 2017
                            </p>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">
                                Responsibilites
                            </h2>
                            <div className="caption">
                            </div>
                            <div className="card-text">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <div className="card-body">
                            <h2 className="card-title">
                                Sales Representative
                            </h2>
                            <div className="caption">
                                The Wireless Stores / T-Mobile
                            </div>
                            <p className="card-text">
                                November 2016 - February 2017
                            </p>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">
                                Responsibilites
                            </h2>
                            <div className="caption">
                            </div>
                            <div className="card-text">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}