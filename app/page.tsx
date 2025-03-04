import Contact from "./pages/contact";
import Header from "./pages/header";
import Main from "./pages/main";
import Projects from "./pages/project";

export default function Home () {
  return(
    <>
      <Header/>
      <Main/>
      <Projects/>
      <Contact/>
    </>
  )
}