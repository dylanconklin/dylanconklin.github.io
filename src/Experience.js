import * as Component from './Components';

export default function Experience() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Component.H1 content="Education" />
                        <Component.Education
                            school="Portland State University"
                            degree="Bachelor of Science, Computer Science"
                            year="2023"
                        />
                        <Component.Education
                            school="Portland Community College"
                            degree="Associate of Arts"
                            year="2021"
                        />
                    </div>
                    <div className="col">
                        <Component.H1 content="Certifications" />
                        <div className="container">
                            <div className="row">
                                <Component.Certification
                                    cert="Microsoft Office Specialist"
                                    type="PowerPoint"
                                    time="2016"
                                    label="fa-brands fa-microsoft"
                                />
                            </div>
                            <div className="row">
                                <Component.Certification
                                    cert="Microsoft Technology Associate"
                                    type="HTML5 Application Development Fundamentals"
                                    time="2017"
                                    label="fa-solid fa-code"
                                />
                            </div>
                            <div className="row">
                                <Component.Certification
                                    cert="CompTIA"
                                    type="IT Fundamentals"
                                    time="2017"
                                    label="fa-solid fa-microchip"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Component.H1 content="Tech Skills" />
            <div className="container text-center">
                <div className="row">
                    <Component.TechSkill
                        skill="Swift / Objective - C"
                        label="fa-brands fa-swift"
                    />
                    <Component.TechSkill
                        skill="Flutter"
                        label="fa-solid fa-feather-pointed"
                    />
                    <Component.TechSkill
                        skill="React (HTML, CSS, JS)"
                        label="fa-brands fa-react"
                    />
                    <Component.TechSkill
                        skill="SQL"
                        label="fa-solid fa-database"
                    />
                    <Component.TechSkill
                        skill="Git"
                        label="fa-brands fa-git-alt"
                    />
                </div>
            </div>
            <Component.H1 content="Work Experience" />
            {/* label="fa-solid fa-user-graduate" */}
            {/* label="fa-solid fa-users" */}
            <div className="px-3">
                <Component.Job
                    position="Research Assistant"
                    employer="Portland State University"
                    time="November 2023 - present"
                    responsibilities={<>
                        <ul>
                            <li>Lead research project</li>
                            <li>Implement front-end and back-end code for research software</li>
                            <li>Implement unit testing for software</li>
                            <li>Participate in meetings with project sponsor</li>
                            <li>Write weekly meeting summaries and reports</li>
                        </ul>
                    </>}
                />
                <Component.Job
                    position="Student Software Developer"
                    employer="Portland State University"
                    time="January 2023 - June 2023"
                    responsibilities={<>
                        <ul>
                            <li>Sentiment analysis and unique code generation class</li>
                            <li>Filtering and sanitizing feedback for vulgar language and SQL injection</li>
                            <li>Implement and test server endpoints</li>
                            <li>Wrote tests for code generation and input verification functions using Jest</li>
                            <li>Work with the UI team to ensure backend compatibility with frontend web components and forms</li>
                            <li>Manage development branches using Git, including branching, merging, and pull requests</li>
                            <li>Participate in team code reviews via GitHub</li>
                            <li>Write documentation and supporting technical documents, including:</li>
                            <ul>
                                <li>Details of implementation</li>
                                <li>Logical reasoning behind implementation decisions</li>
                                <li>Theoretical limits and preventative measures (limited number of unique codes; time-limited codes)</li>
                            </ul>
                            <li>Present final product to the client</li>
                        </ul>
                    </>}
                />
            </div>
        </>
    )
}