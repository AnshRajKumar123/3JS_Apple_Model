import React from 'react'
import Navbar from './componentsJsx/Navbar'
import Hero from './componentsJsx/Hero'
import ProductViwer from './componentsJsx/ProductViwer'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Showcase from './componentsJsx/Showcase'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <ProductViwer />
            <Showcase />
        </main>
    )
}

export default App