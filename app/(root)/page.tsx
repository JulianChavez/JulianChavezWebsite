import React from 'react';
import Intro from '@/app/components/intro';
import About from '@/app/components/about';
import Header from '@/app/components/header';

export default function Home() {
    return (
        <div>
            <div className='Header-comp'>
                <Header />
            </div>
            <div className='Intro-comp'>
                <Intro />
            </div>
            <div className='About-comp'>
                <About />
            </div>
        </div>

    )
}       
