import React from 'react'
import './MyCard.css'
const MyCard = (props) => {

    return (
        <>
            <div className='card'>
                <div className='card-body'>
                    <h3 className='heading'>
                        {/* used as parameter */}
                        {props.heading}  
                    </h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                </div>
            </div>
        </>
    )
}

export default MyCard
