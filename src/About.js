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

function AppCard({ title, github, page, image, caption, description }) {
    var secondary_button = !page ? null :
        <Button
            link={page}
            label={<>
                <i className="fa-brands fa-youtube p-1" />
                Watch promo on YouTube
            </>}
            primary={false}
        />
    return (
        <>
            <div className="card mb-3 px-5">
                <div className="row g-0">
                    <div className="col-md-4 center">
                        <img className="shadow-lg" id="app-logo" src={image} alt="App Icon" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body box">
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
                            <Button
                                link={github}
                                label={<>
                                    <i className="fa-brands fa-github p-1" />
                                    View on Github
                                </>}
                                primary={true}
                            />
                            {secondary_button}
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
                github="https://github.com/dylanconklin/Adjacency-Table"
                page="https://www.youtube.com/watch?v=dJc68L8nda8"
                image="images/adjacency-table-builder-logo.jpg"
                caption="Swift, SwiftUI"
                description="This powerful tool generates an adjacency table based on your data, which includes the names of various points on a map and their respective distances. With GraphApp, you can easily visualize and analyze the connections between different locations. Try it today and see how it can simplify your workflow."
            />
            <AppCard
                title="The SAFE Project"
                github="https://github.com/PSU-MCECS-SAFE/SAFE"
                page={null}
                image="images/safe-logo.jpg"
                caption="HTML, CSS, Javascript, Typescript, NodeJS, React, Jest, SQL"
                description="SAFE is an anonymous feedback system with optional chat for ongoing communication. With SAFE, you can share your thoughts, ideas, and concerns without fear of judgment or retaliation. SAFE allows for honest and secure communication, helping to improve safety and productivity."
            />
            <AppCard
                title="GameRank"
                github="https://github.com/dylanconklin/"
                page={null}
                image="images/gamerank-logo.jpg"
                caption="Swift, SwiftUI, SQL, PostgreSQL"
                description="Experience the thrill of the football season with our brand new pick 'em style game! Stay up-to-date with the latest league standings, scores, and schedules, and put your knowledge to the test by picking the winning teams and competing against your loved ones. This exciting game is the perfect way to get involved in the football season and showcase your skills. Don't let this chance slip away and get ready to win big!"
            />
            <AppCard
                title="Number Converter"
                github="https://github.com/dylanconklin/Number-Converter"
                page={null}
                image="images/number-converter-logo.jpg"
                caption="Swift, SwiftUI"
                description="With Number Converter, you can easily convert any value to a new base of your choice. Simply input the value, select the base, and the app will do the rest. It's a quick, easy, and convenient way to convert numeric values of any type."
            />
            <AppCard
                title="Word Games"
                github="https://github.com/dylanconklin/WordGames"
                page={null}
                image="images/wordgames-logo.jpg"
                caption="Swift, SwiftUI"
                description="WordGames is a must-have for word game enthusiasts. With a wide-ranging dictionary and adjustable word lengths from 1 to 22, this Wordle clone is designed to both entertain and educate. Be sure to add this app to your collection today and let the word games begin!"
            />
        </>
    )
}