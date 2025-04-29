import React from 'react'

const TourCard = (props) => {
  return (
    <>
    <div className="col-sm-3">
        <div className='card shadow-lg'>
            <img src={props.imageurl} alt="" className='' height={200} />
            <div className='card-body'>
                <p className='h3'>{props.name}</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat cum voluptas quo, non nisi voluptate?</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default TourCard
