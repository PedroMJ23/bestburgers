import Footer from "./Pages/Footer/Footer";
import Navbar from "./Pages/Nav/Navbar";
import GlobalStylesCss from "./GlobalStyles/GLobalStyles";
import Layout from "./Components/Layout/Layout";
import GlobalRoutes from "./Routes/Routes";

function App() {
  return (
    <>
      <Layout>
        <Navbar />
        <GlobalRoutes />
        <Footer />
      </Layout>

      <GlobalStylesCss />
    </>
  );
}

export default App;
