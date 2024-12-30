import React from 'react';
import Link from 'next/link';

export default function Header() {
    //TO-DO: Header component save for later when needed to add navi
    return (
        <div className='flex w-full justify-between'>
            <div>
            </div>
            <div className='flex'>
                <Link href='/test_page_x'>test_project_x</Link>
            </div>

        </div>
    )
}