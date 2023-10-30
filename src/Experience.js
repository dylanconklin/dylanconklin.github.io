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
                                    label="fa-brands fa-microsoft"
                                />
                            </div>
                            <div className="row">
                                <Component.Certification
                                    cert="Microsoft Technology Associate"
                                    type="HTML5 Application Development Fundamentals"
                                    label="fa-solid fa-code"
                                />
                            </div>
                            <div className="row">
                                <Component.Certification
                                    cert="CompTIA"
                                    type="IT Fundamentals"
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
                        skill="Swift"
                        label="fa-brands fa-swift"
                    />
                    <Component.TechSkill
                        skill="C / C++"
                        label="fa-solid fa-c"
                    />
                    <Component.TechSkill
                        skill="Objective - C"
                        label="fa-brands fa-apple"
                    />
                    </div>
                    <div className="row">
                    <Component.TechSkill
                        skill="HTML"
                        label="fa-brands fa-html5"
                    />
                    <Component.TechSkill
                        skill="CSS"
                        label="fa-brands fa-css3"
                    />
                    <Component.TechSkill
                        skill="Javascript / Typescript"
                        label="fa-brands fa-square-js"
                    />
                    <Component.TechSkill
                        skill="React"
                        label="fa-brands fa-react"
                    />
                    </div>
                    <div className="row">
                    <Component.TechSkill
                        skill="SQL"
                        label="fa-solid fa-database"
                    />
                    <Component.TechSkill
                        skill="Git"
                        label="fa-brands fa-git-alt"
                    />
                    <Component.TechSkill
                        skill="XCTest"
                        label="fa-solid fa-check"
                    />
                    <Component.TechSkill
                        skill="Jest"
                        label="fa-solid fa-flask"
                    />
                </div>
            </div>
            <Component.H1 content="Work Experience" />
            {/* label="fa-solid fa-user-graduate" */}
            {/* label="fa-solid fa-users" */}
            <div className="px-3">
                <Component.Job
                    position="iOS Developer"
                    employer="Personal Projects"
                    time="June 2023 - present"
                    label="fa-solid fa-hammer"
                    responsibilities={<>
                        <ul>
                            <li>Graph data methods, including get, insert, modify, and delete</li>
                            <li>Graph property checkers (cyclic, tree, connected, etc.)</li>
                            <li>Table building interface and adjacency table generation using SwiftUI</li>
                            <li>GraphViz code generation</li>
                            <li>Test suites using XCTest</li>
                            <li>App icon and promotional material</li>
                        </ul>
                    </>}
                />
                <Component.Job
                    position="Student Software Developer"
                    employer="Portland State University"
                    time="January 2023 - June 2023"
                    label="fa-solid fa-terminal"
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