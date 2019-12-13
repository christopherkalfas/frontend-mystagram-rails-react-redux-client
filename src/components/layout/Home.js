import React from 'react'

const Home = () => {
     return(
         <div>
        <div className='tag-line'>
        <br />
            <img src='https://fontmeme.com/permalink/191110/9aac8011251f2785efff235130ced994.png' alt='about-us-font' />
       </div>
       <div>
        <h2 className='home-page-container'>Mystagram is a web app built for humans who share a common love; a love of monsters and mystical creatures! Our web app creates a safe place to celebrate mystical creatures. Too often our magical creatures are imprisoned within our imaginations, but now you have the power to share them amongst like-minded-nerds. </h2>
        <br />

       <img src='https://fontmeme.com/permalink/191107/432ecbbdc99ac405597024152516beff.png' alt='instructions'/>
        </div>
        <div className='home-page-container'>
            <ol>
            <li>Dig Deep into your memories and select the perfect creature. Let's be real, they all are!</li>
            <br/>
            <li>Make sure your creature hasn't been added to Mystagram already</li>
            <br/>
            <li>Go to the Add New Creature button in the top-right of the navigation bar.</li>
            <br/>
            <li>Fill out the form, sharing the creatures.</li>
            <br/>
            <li>Sit back and watch other Mystagram users vote for the most popular creatures in the fantasy-multiverse!</li>
            <br/>
            
            </ol>
        </div>
        </div>
        
    )
}

export default Home 