import FooterMedias from "./Pages/Footer/FooterMedias";
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
        <FooterMedias />
      </Layout>

      <GlobalStylesCss />
    </>
  );
}

export default App;
