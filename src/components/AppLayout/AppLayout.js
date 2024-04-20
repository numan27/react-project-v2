import React from 'react'
import Header from '../GenericComponents/Header'
import Footer from '../GenericComponents/Footer'

const AppLayout = ({children}) => {
    return (
        <div>
            <Header />
            <div className=''>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default AppLayout