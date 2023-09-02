function Card({ title, link, image, caption, description }) {
    return (
        <>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4 center">
                        <a href={link} target="_blank" rel="noreferrer">
                            <img className="shadow-lg" id="app-logo" src={image} />
                        </a>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">
                                <a href={link} target="_blank" rel="noreferrer">
                                    {title}
                                </a>
                            </h2>
                            <div className="caption">
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

export default function About() {
    return (
        <>
            <div className="card m-3">
                <div className="row g-0">
                    <div className="col-md-4 center">
                        <img className="shadow-lg" id="portrait" alt="Portrait of Dylan Conklin" src="images/image.jpeg" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">
                                About Me
                            </h2>
                            <div className="caption">
                                Seeking iOS Developer position
                            </div>
                            <br />
                            <p className="card-text">
                                Hello, my name is Dylan Conklin. I am a recent graduate of Portland State University, with a Bachelor of Science in Computer Science.
                            </p>
                            <p className="card-text">
                                I have experience as a software developer, working on Portland State's SAFE team to develop an anonymous feedback system for Portland State's Computer Science Department.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <Card
                title="Adjacency Table"
                link="https://github.com/dylanconklin/Adjacency-Table"
                image="images/adjacency-table-builder-logo.jpg"
                caption="Swift, SwiftUI"
                description="Adjacency Table is a program that generates an adjacency table based on data. The data contains a name to indicate any given point on a map, another name to indicate another point on a map, and a distance between the two points."
            />
            <Card
                title="GameRank"
                link="https://github.com/dylanconklin/"
                image="images/gamerank-logo.jpg"
                caption="Swift, SwiftUI, SQL, PostgreSQL"
                description="Pick 'em style football game, with information about the league, including standings, scores, and schedules."
            />
            <Card
                title="Number Converter"
                link="https://github.com/dylanconklin/Number-Converter"
                image="images/number-converter-logo.jpg"
                caption="Swift, SwiftUI"
                description="Number Converter is an app that allows you to put in a value, select the base to use, and prints out the number in the new base."
            />
            <Card
                title="Word Games"
                link="https://github.com/dylanconklin/WordGames"
                image="images/wordgames-logo.jpg"
                caption="Swift, SwiftUI"
                description="Wordle clone for iOS, with large dictionary and custom word lengths, from 1 to 22."
            />
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4 center">
                        <a href="https://github.com/PSU-MCECS-SAFE/SAFE" target="_blank" rel="noreferrer">
                            <h2 className="card-title">
                                The SAFE Project
                            </h2>
                        </a>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">
                                <a href="https://github.com/dylanconklin/" target="_blank" rel="noreferrer">
                                    System for Anonymous Feedback
                                </a>
                            </h2>
                            <div className="caption">
                                HTML, CSS, Javascript, Typescript, NodeJS, React, Jest, SQL
                            </div>
                            <br />
                            <p className="card-text">
                                Anonymous feedback system with optional anonymous chat for ongoing communication.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}