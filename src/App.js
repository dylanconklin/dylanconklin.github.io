import './App.css';
import * as Navbar from './Navbar';
import Content from './Content';

function App() {
  return (
    <>
      <div id="root"></div>
      <Navbar.Header />
      <div className="container-fluid mx-2" id="content" />
      <Content page={window.location.hash} />
      <Navbar.Footer />
    </>
  );
}

export default App;