import React from 'react'

const DecreaseLikeButton = (props) => {
        return(
            <div>
                <button id='dislike-btn' className='btn btn-lg btn-block' onClick={props.handleDecrement}> Decrease Likes</button>
            </div>
        )
}
    
    
export default DecreaseLikeButton   