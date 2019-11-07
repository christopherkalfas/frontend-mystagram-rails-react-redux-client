import React from 'react'

const DecreaseLikeButton = (props) => {
        return(
            <div>
                <button className='btn btn-danger btn-lg' onClick={props.handleDecrement}> Decrease Likes</button>
            </div>
        )
}
    
    
export default DecreaseLikeButton   