import './App.css';
import Header from './Header';
import Footer from './Footer';

import Content from './Content';

function App() {
  return (
    <>
      <div id="root"></div>
      <Header />
      <div className="container-fluid mx-2" id="content" />
      <Content page={window.location.hash} />
      <Footer />
    </>
  );
}

export default App;