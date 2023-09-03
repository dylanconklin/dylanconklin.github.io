export default function AppDetails({ app_name, app_logo, github }) {
    return (
        <>
        <row>
            <h1 className="m-3">{app_name}</h1>
            <img className="shadow-lg" id="app-logo" src={app_logo} />
        </row>
            <hr />
            <p className="m-3">
                This powerful tool generates an adjacency table based on your data, which includes the names of various points on a map and their respective distances. With GraphApp, you can easily visualize and analyze the connections between different locations. Try it today and see how it can streamline your workflow and improve your decision-making process.
            </p>
            <h2 className="m-3">Visualize Data</h2>
            <h2 className="m-3">Visualize Data</h2>
        </>
    )
}