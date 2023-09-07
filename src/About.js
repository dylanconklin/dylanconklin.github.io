function AppCard({ title, page, github, image, caption, description }) {
    return (
        <>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4 center">
                        <a href={page} target="_blank" rel="noreferrer">
                            <img className="shadow-lg" id="app-logo" src={image} />
                        </a>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">
                                {title}
                            </h2>
                            <div className="caption">
                                {caption}
                            </div>
                            <br />
                            <p className="card-text">
                                {description}
                            </p>
                            {/* <a href={page} target="_blank" rel="noreferrer">
                                <button type="button" className="btn btn-primary m-1">
                                    Learn more
                                </button>
                            </a> */}
                            <a href={github} target="_blank" rel="noreferrer">
                                {/* <button type="button" className="btn btn-secondary m-1"> */}
                                <button type="button" className="btn btn-primary m-1">
                                    <i className="fa-brands fa-github" /> View on Github
                                </button>
                            </a>
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
            <AppCard
                title="Adjacency Table"
                page=""
                github="https://github.com/dylanconklin/Adjacency-Table"
                image="images/adjacency-table-builder-logo.jpg"
                caption="Swift, SwiftUI"
                description="This powerful tool generates an adjacency table based on your data, which includes the names of various points on a map and their respective distances. With GraphApp, you can easily visualize and analyze the connections between different locations. Try it today and see how it can simplify your workflow."
            />
            <AppCard
                title="GameRank"
                page=""
                github="https://github.com/dylanconklin/"
                image="images/gamerank-logo.jpg"
                caption="Swift, SwiftUI, SQL, PostgreSQL"
                description="Experience the thrill of the football season with our brand new pick 'em style game! Stay up-to-date with the latest league standings, scores, and schedules, and put your knowledge to the test by picking the winning teams and competing against your loved ones. This exciting game is the perfect way to get involved in the football season and showcase your skills. Don't let this chance slip away and get ready to win big!"
            />
            <AppCard
                title="Number Converter"
                page=""
                github="https://github.com/dylanconklin/Number-Converter"
                image="images/number-converter-logo.jpg"
                caption="Swift, SwiftUI"
                description="With Number Converter, you can easily convert any value to a new base of your choice. Simply input the value, select the base, and the app will do the rest. It's a quick, easy, and convenient way to convert numeric values of any type."
            />
            <AppCard
                title="Word Games"
                page=""
                github="https://github.com/dylanconklin/WordGames"
                image="images/wordgames-logo.jpg"
                caption="Swift, SwiftUI"
                description="WordGames is a must-have for word game enthusiasts. With a wide-ranging dictionary and adjustable word lengths from 1 to 22, this Wordle clone is designed to both entertain and educate. Be sure to add this app to your collection today and let the word games begin!"
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
                                SAFE is an anonymous feedback system with optional chat for ongoing communication. With SAFE, you can share your thoughts, ideas, and concerns without fear of judgment or retaliation. SAFE allows for honest and secure communication, helping to improve safety and productivity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}