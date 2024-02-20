import Navbar from "../../components/Navbar"
import Footer from "./Footer"

// Home() is a React functional component that returns the homepage of the app.
const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="">
        <div className="h-screen bg-gradient-to-b from-bgPrimary to-bgSecondary px-5 py-24
                    md:px-24">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent text-4xl font-bold text-center
                        lg:text-5xl xl:text-6xl">Hack the North 2024</h1>
          <h3 className="text-text text-lg font-bold text-center py-8
                        lg:text-xl xl:text-2xl">September 15-17, 2024 at E7, University of Waterloo</h3>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home