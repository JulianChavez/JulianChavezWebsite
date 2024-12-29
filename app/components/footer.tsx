import React from 'react';

export default function Footer() {
    //Left side, pic of chachi
    //right side links to(email, linkedin)
    return (
        <div className='flex w-full justify-between'>
            <div>
            </div>
            <div className='flex gap-4'>
                <span><a href='mailto:jchavez3@umbc.edu'>Email</a></span>
                <span><a href='https://www.linkedin.com/in/julian-chavez-b82a13254/'>LinkedIn</a></span>
            </div>
        </div>
    )
}