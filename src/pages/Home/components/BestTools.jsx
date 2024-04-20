import React from 'react'
import IMAGES from "../../../assets/index"

const BestTools = () => {
    return (
        <div className='my-sm-5 my-4 py-sm-5 py-4'>
            <div class="heading-container mb-5">
                <h2 class="fw-bolder fs-1 text-center best-heading">The best tool for</h2>
            </div>

            <div className='d-flex justify-content-sm-between flex-sm-row flex-column align-items-center flex-wrap bestImg_wrapper'>
                <img src={IMAGES.BEST_IMG_1} alt="" />
                <img src={IMAGES.BEST_IMG_2} alt="" />
                <img src={IMAGES.BEST_IMG_3} alt="" />
                <img src={IMAGES.BEST_IMG_4} alt="" />
                <img src={IMAGES.BEST_IMG_5} alt="" />
                <img src={IMAGES.BEST_IMG_6} alt="" />
                <img src={IMAGES.BEST_IMG_7} alt="" />
                <img src={IMAGES.BEST_IMG_8} alt="" />
                <img src={IMAGES.BEST_IMG_9} alt="" />
                <img src={IMAGES.BEST_IMG_10} alt="" />
                <img src={IMAGES.BEST_IMG_11} alt="" />
                <img src={IMAGES.BEST_IMG_12} alt="" />
                <img src={IMAGES.BEST_IMG_13} alt="" />
            </div>

            <div className='text-center'>
                <a className='text-black fw-semibold' href="">And many more</a>
            </div>

        </div>
    )
}

export default BestTools
