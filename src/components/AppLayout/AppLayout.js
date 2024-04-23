import React from 'react'
// import Header from '../GenericComponents/Header'
import Footer from '../GenericComponents/Footer'
import HeaderTailwind from '../GenericComponents/HeaderTailwind'

const AppLayout = ({children}) => {
    return (
        <div>
            {/* <Header /> */}
            <HeaderTailwind />
            <div className=''>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default AppLayout