'use client';
import React, { use, useEffect } from 'react';
import useTypedMsg, { TYPE_EFFECT } from './typingEffect';

const hiMessage = ["Howdy", "Hello", "Howd", "Greetings", "Hi Engineer", "What's up"]

const Intro = () => {
    //TO-DO: Fix Line in type writing effect | Add pausing when everything is deleted
    //TO-DO: Fix tailwind class error(className -> class)
    //TO-DO: Try to remove use-client, CSR instead of SSR
    const [typedMsg, currentEffect] = useTypedMsg(hiMessage);
    return (
        <h2 className='Name' style={{ textAlign: 'center', fontSize: 'xx-large' }}>
            <span className={currentEffect == TYPE_EFFECT.DELETING || currentEffect == TYPE_EFFECT.WRITING ? 'cursor' : 'blinking-cursor'}>
                {typedMsg}
            </span>
            <span>, I'm Julian</span>
        </h2>
    )
}

export default Intro
