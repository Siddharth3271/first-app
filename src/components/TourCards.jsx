import React, { useState } from 'react'
import bali from '../assert/img/download3.jpeg'
import bali2 from '../assert/img/download2.jpeg'
const TourCards = () => {
    // do in form of object, below is not recommended
    // const [tourName, setTourName] = useState('bali')
    // const [tourImg, setTourImg] = useState(bali)

    const[tours,setTours]=useState([
        {
            sno: "T001",
            name: "Bali",
            imageurl: bali
        },
        {
            sno: "T002",
            name: "Bali2",
            imageurl: bali2
        }
    ])
    return (
        <>
            <div className='container mt-3'>
                <div className='row'>
                    <div className="col-sm-3">
                        <div className='card shadow-lg'>
                            <img src={tours[0].imageurl} alt="" className='' height={200} />
                            <div className='card-body'>
                                <p className='h3'>{tours[0].name}</p>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat cum voluptas quo, non nisi voluptate?</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className='card shadow-lg'>
                            <img src={tours[1].imageurl} alt="" className='' height={200} />
                            <div className='card-body'>
                                <p className='h3'>{tours[1].name}</p>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat cum voluptas quo, non nisi voluptate?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TourCards
