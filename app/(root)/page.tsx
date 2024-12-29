import React from 'react';
import Intro from '@/app/components/intro';
import About from '@/app/components/about';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer'

export default function Home() {
    return (
        <div className='h-full flex flex-col min-h-screen'>
            <div className='Header-comp'>
                <Header />
            </div>
            <div className='Intro-comp'>
                <Intro />
            </div>
            <div className='About-comp flex-grow'>
                <About />
            </div>
            <div className='Footer-comp'>
                <Footer />
            </div>
        </div>

    )
}       
