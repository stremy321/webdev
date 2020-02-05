import React from 'react'

import Tweets from './tweets'

function index({ match: { params: { id, details, authorName, time } } }) {
    return (
        <div>
            <Tweets id={id} details={details} authorName={authorName} time={time}/>
        </div>
    )
}

export default index;