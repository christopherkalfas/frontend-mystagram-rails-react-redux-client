import React from 'react'


const IncreaseLikeButton = (props) => {
    return(
        <div>
            <button className='increase-like-btn' onClick={props.handleIncrement}> Increase Likes</button>
        </div>
    )

}
    
    
export default IncreaseLikeButton   