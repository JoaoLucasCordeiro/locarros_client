import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import heroImage from '../images/hero.png';
import MostWanted from '../components/MostWanted';

const Home = () => {
  return (
    <main
      className='flex flex-col'
    >
      <section className='h-screen flex flex-col bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${heroImage})` }}>
        <Header background="bg-transparent" color="text-white"/>
        <Hero />
      </section>

      <section className='h-screen'>
        <MostWanted />
      </section>

    </main>
  )
}

export default Home