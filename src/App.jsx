import Navbar from './components/layout/Navbar'
import Greeting from './components/dashboard/Greeting'
import Credits from './components/dashboard/Credits'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 pb-1">
      <Navbar />
      <main className="max-w-[1440px] mx-auto pt-4">
        <Greeting />
        <Credits />
        <Footer />
      </main>
    </div>
  )
}

export default App 
