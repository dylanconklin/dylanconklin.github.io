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
                        skill="C / C++ / Objective - C"
                        label="fa-solid fa-c"
                    />
                    <Component.TechSkill
                        skill="XCTest"
                        label="fa-solid fa-check"
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
                    <Component.TechSkill
                        skill="Jest"
                        label="fa-solid fa-flask"
                    />
                </div>
            </div>
            <Component.H1 content="Work Experience" />
            <div className="px-3">
                <Component.Job
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
                <Component.Job
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
                <Component.Job
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