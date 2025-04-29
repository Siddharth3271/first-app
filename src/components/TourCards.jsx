import React, { useState } from 'react'
import bali from '../assert/img/download3.jpeg'
const TourCards = () => {
    const[tourName,setTourName]=useState('bali')
    const[tourImg,setTourImg]=useState(bali)
  return (
    <>
    <div className="col-sm-3">
        <div className='card shadow-lg'>
            <img src={tourImg} alt="" className='' height={200} />
            <div className='card-body'>
                <p className='h3'>{tourName}</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat cum voluptas quo, non nisi voluptate?</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default TourCards
