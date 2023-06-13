import Footer from "../components/Footer";
import Header from "../components/Header";

// eslint-disable-next-line react/prop-types
export default function Layout ({ children }) {
  return (
    <div className="wrapper">
      <Header />
        {children}
      <Footer />
    </div>
  )
}