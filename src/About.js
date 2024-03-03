import * as Component from './Components';

export default function About() {
    return (
        <>
            <Component.BioCard
                title="About Me"
                image="images/image.jpeg"
                caption=""
                description="Hello, my name is Dylan Conklin. I am a Research Assistant at Portland State University, with a Bachelor of Science in Computer Science. I have experience as a software developer, working on Portland State's SAFE team and the Data and Internet Privacy Lab."
            />
            <hr class="mx-5" />
            <Component.AppCard
                title="Lineosaur"
                testFlightLink={"https://testflight.apple.com/join/3Tr65zWH"}
                githubLink="https://github.com/dylanconklin/Lineosaur"
                youTubeLink="https://www.youtube.com/watch?v=dJc68L8nda8"
                image="images/lineosaur-logo.jpg"
                caption="Swift, SwiftUI, SwiftData"
                description="This powerful tool generates an adjacency table based on your data, which includes the names of various points on a map and their respective distances. With Lineosaur you can easily visualize and analyze the connections between different locations. Try it today and see how it can simplify your workflow."
            />
            <Component.AppCard
                title="The SAFE Project"
                githubLink="https://github.com/PSU-MCECS-SAFE/SAFE"
                youTubeLink="https://www.youtube.com/watch?v=jXNqKNVhqEY"
                image="images/safe-logo.jpg"
                caption="HTML, CSS, Javascript, Typescript, NodeJS, React, Jest, SQL"
                description="SAFE is an anonymous feedback system with optional chat for ongoing communication. With SAFE, you can share your thoughts, ideas, and concerns without fear of judgment or retaliation. SAFE allows for honest and secure communication, helping to improve safety and productivity."
            />
            <Component.AppCard
                title="GameRank"
                githubLink="https://github.com/dylanconklin/"
                image="images/gamerank-logo.jpg"
                caption="Swift, SwiftUI, SQL, PostgreSQL"
                description="Experience the thrill of the football season with our brand new pick 'em style game! Stay up-to-date with the latest league standings, scores, and schedules, and put your knowledge to the test by picking the winning teams and competing against your loved ones. This exciting game is the perfect way to get involved in the football season and showcase your skills. Don't let this chance slip away and get ready to win big!"
            />
            <Component.AppCard
                title="Number Converter"
                githubLink="https://github.com/dylanconklin/Number-Converter"
                image="images/number-converter-logo.jpg"
                caption="Swift, SwiftUI"
                description="With Number Converter, you can easily convert any value to a new base of your choice. Simply input the value, select the base, and the app will do the rest. It's a quick, easy, and convenient way to convert numeric values of any type."
            />
            <Component.AppCard
                title="Word Games"
                githubLink="https://github.com/dylanconklin/WordGames"
                image="images/wordgames-logo.jpg"
                caption="Swift, SwiftUI"
                description="WordGames is a must-have for word game enthusiasts. With a wide-ranging dictionary and adjustable word lengths from 1 to 22, this Wordle clone is designed to both entertain and educate. Be sure to add this app to your collection today and let the word games begin!"
            />
        </>
    )
}