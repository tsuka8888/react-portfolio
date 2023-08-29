import "modern-css-reset/dist/reset.min.css";
import "./stylesheets/styles.scss";
import Top from "./Top/Top";
import Header from "./Header/Header";

export default function App() {
  return (
    <>
      <Header />
      <Top />
    </>
  );
}
