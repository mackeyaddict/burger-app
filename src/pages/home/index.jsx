import HomeBanner from "./home-banner"
import HomelistCTA from "./home-list-cta"
import Navbar from "../../Components/Navbar"

export default function Home() {
  return (
    <main>
      <Navbar/>
      <HomeBanner />
      <HomelistCTA />
    </main>
  )
}