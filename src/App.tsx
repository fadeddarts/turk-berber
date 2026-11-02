import { Barbers } from "./components/Barbers"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Inquire } from "./components/Inquire"
import { Nav } from "./components/Nav"
import { Reviews } from "./components/Reviews"
import { Services } from "./components/Services"
import { Story } from "./components/Story"
import { Visit } from "./components/Visit"
import { InquireProvider } from "./context/InquireContext"

export default function App() {
  return (
    <InquireProvider>
      <a href="#services" className="skip-link">
        Skip to content
      </a>
      <div className="app-layout">
        <Nav />
        <main>
          <Hero />
          <Services />
          <Story />
          <Barbers />
          <Reviews />
          <Visit />
          <Footer />
        </main>
      </div>
      <Inquire />
    </InquireProvider>
  )
}
