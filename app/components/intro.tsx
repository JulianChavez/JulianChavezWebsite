'use client';
import React, { use, useEffect } from 'react';
import useTypedMsg from './typingEffect';

const hiMessage = ["Hi There", "Hello There", "Howdy There", "Speaky Hello", "Hi Engineer"]

const Intro = () => {
    //TO-DO: Fix Line in type writing effect
    //TO-DO: Fix tailwind class error(className -> class)
    //TO-DO: Try to remove use-client, CSR instead of SSR
    const typedMsg = useTypedMsg(hiMessage)

    return (
        <h2 className='Name' style={{ textAlign: 'center', fontSize: 'xx-large' }}>
            <span className='blinking-cursor'> {typedMsg}</span>
            <span>, I'm Julian</span>
        </h2>
    )
}

export default Intro
