import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
      <h1 className="text-6xl font-bold">Hello World</h1>
    </main>
  )
}

export default App