import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import heroImage from '../images/hero.png';

const Home = () => {
  return (
    <section className='h-screen flex flex-col bg-cover bg-center bg-no-repeat'
    style={{ backgroundImage: `url(${heroImage})` }}>
        <Header/>
        <Hero/>
    </section>
  )
}

export default Home