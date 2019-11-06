import React from 'react'

const DecreaseLikeButton = (props) => {
        return(
            <div>
                <button className='decrease-like-btn' onClick={props.handleDecrement}> Decrease Likes</button>
            </div>
        )
}
    
    
export default DecreaseLikeButton   