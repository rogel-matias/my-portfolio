
import Footer from "../components/Footer";
import Header from "../components/Header";
import AnimateBackground from "../components/AnimateBackground";

// eslint-disable-next-line react/prop-types
export default function Layout ({ children }) {

  return (
    <div className="wrapper">
      <AnimateBackground />
      <Header />
        {children}
      <Footer />
    </div>
  )
}