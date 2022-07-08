import "../styles/globals.css";
import { Navbar } from "../components";
import { StateContext } from "../context/StateContext";

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Navbar />

      <Component {...pageProps} />
    </StateContext>
  );
}

export default MyApp;
