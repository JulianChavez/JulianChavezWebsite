'use client'

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import Loading from '../components/ThreeJs/loading';

const SolarSystem = dynamic(() => import('./solar/solarSystem'), {
    ssr: false,
    loading: () => <Loading />
});

export default function TestPageX() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000); // 3 seconds delay

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {isLoading ? <Loading /> : <Loading/>}
        </div>
    )
}
