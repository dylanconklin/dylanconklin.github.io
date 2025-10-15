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
                            degree={[
                                [
                                    "M.S. Computer Science",
                                    "Expected in 2026"
                                ],
                                [
                                    "B.S. Computer Science",
                                    "2023"
                                ]
                            ]}
                        />
                        <Component.Education
                            school="Portland Community College"
                            degree={[
                                [
                                    "A.A. General Studies",
                                    "2021"
                                ]
                            ]}
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
                <Component.H1 content="Published Works" />
                <Component.PublishedWork
                    title="BL(u)E CRAB: A User-Centric Framework for Identifying Suspicious Bluetooth Trackers"
                    type="Demo Paper"
                    time="2025"
                    link="https://diprlab.github.io/post/18-03-25-percom/BLuE_CRAB_Demo_Paper.pdf"
                />
                <Component.H1 content="Tech Skills" />
                <div className="text-center">
                    <div className="row">
                        <Component.TechSkill
                            skill="Swift / Objective - C"
                            label="fa-brands fa-swift"
                        />
                        <Component.TechSkill
                            skill="Flutter"
                            label="fa-brands fa-flutter"
                        />
                        <Component.TechSkill
                            skill="Java"
                            label="fa-brands fa-java"
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
                <div className="px-3">
                    <Component.Job
                        position="Research Assistant"
                        employer={<>
                            Portland State University
                            <br />
                            <a href="https://diprlab.github.io" class="secondary">
                                Data and Internet Privacy Lab
                            </a>
                        </>}
                        time="November 2023 - Present"
                        responsibilities={<>
                            <ul>
                                <li>Lead research project</li>
                                <li>Design and implement front-end and back-end components in the codebase</li>
                                <li>Collaborate with sponsors and developers in weekly meetings</li>
                                <li>Document project progress, including writing meeting summaries and reports</li>
                                <li>Maintain the DIPr Lab website</li>
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
            </div>
        </>
    )
}