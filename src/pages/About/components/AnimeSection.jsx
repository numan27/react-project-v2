
import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
// import { Row, Col } from "react-bootstrap"
import IMAGES from '../../../assets'
import { Link } from 'react-router-dom'

function AnimeSection() {
    return (
        <div className='container'>
            <div className='flex md:flex-row flex-col justify-center gap-10 md:w-4/6 w-full mx-auto md:px-0 px-10'>
                <div className='md:w-1/2 w-full'>
                    <img className='w-fit' src={IMAGES.ANIME} alt="" />
                </div>

                <div  className='md:w-1/2 w-full flex'>
                    <div className=''>
                        <h2 className='text-5xl font-bold mb-4'>Animation Section of About Page</h2>
                        <p className='text-gray-600 text-lg mb-4 font-medium'>The technology our AI assure a great writing, without waiting, without creative block, instant content only</p>

                        <div className='mb-4'>
                            <h5 className='flex my-2 gap-3'>
                                <img className='' src={IMAGES.CHECK_ICON_2} alt="" />
                                Powered by GPT-3 from OpenAI
                            </h5>
                            <h5 className='flex my-2 gap-3'><img className='' src={IMAGES.CHECK_ICON_2} alt="" />Different genres and tones</h5>
                            <h5 className='flex my-2 gap-3'><img className='' src={IMAGES.CHECK_ICON_2} alt="" />
                                To publsih on networks or use them in your campaigns</h5>
                        </div>

                        <Link className='flex gap-2 text-purple-700 font-semibold' href="">Read More <FaLongArrowAltRight /> </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnimeSection

