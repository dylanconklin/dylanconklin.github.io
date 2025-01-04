import * as Component from './Components';

export default function About() {
    return (
        <>
            <div className="container">
                <Component.BioCard
                    title="About Me"
                    testflightLink={null}
                    github={null}
                    youtubeLink={null}
                    image="images/image.jpeg"
                    caption=""
                    description={<>
                        <p>
                            Hello, my name is Dylan Conklin.
                        </p>
                        <p>
                            I am a Research Assistant and Graduate Student at Portland State University. I have experience as a software developer, working on Portland State's SAFE team and the Data and Internet Privacy Lab.
                        </p>
                    </>}
                />
                <hr />
                <Component.AppCard
                    title="Lineosaur"
                    testflightLink="https://testflight.apple.com/join/3Tr65zWH"
                    github="https://github.com/dylanconklin/Lineosaur"
                    youtubeLink="https://www.youtube.com/watch?v=dJc68L8nda8"
                    image="images/lineosaur-logo.jpg"
                    caption="Swift, SwiftUI, SwiftData"
                    description="This powerful tool generates an adjacency table based on your data, which includes the names of various points on a map and their respective distances. With Lineosaur you can easily visualize and analyze the connections between different locations. Try it today and see how it can simplify your workflow."
                />
                <Component.AppCard
                    title="Bluetooth Detector"
                    testflightLink={null}
                    github={null}
                    youtubeLink={null}
                    image="images/bluetooth-detector-logo.jpg"
                    caption="Flutter"
                    description="Bluetooth Detector is an app for detecting unwanted Bluetooth trackers. It provide a non-binary approach to assesing risk by presenting a report, so users have greater control over evaluating the potential risk presented by Bluetooth trackers."
                />
                <Component.AppCard
                    title="The SAFE Project"
                    testflightLink={null}
                    github="https://github.com/PSU-MCECS-SAFE/SAFE"
                    youtubeLink="https://www.youtube.com/watch?v=jXNqKNVhqEY"
                    image="images/safe-logo.jpg"
                    caption="HTML, CSS, Javascript, Typescript, NodeJS, React, Jest, SQL"
                    description="SAFE is an anonymous feedback system with optional chat for ongoing communication. With SAFE, you can share your thoughts, ideas, and concerns without fear of judgment or retaliation. SAFE allows for honest and secure communication, helping to improve safety and productivity."
                />
            </div>
        </>
    )
}