import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='Root' style={{ height: '100%' }}>
            {children}
        </div>
    )
}

export default Layout