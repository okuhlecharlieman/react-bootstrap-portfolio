import React from 'react'


function icons() {
  return (
    <div>
         <img                   class="rounded-circle img-fluid m-3" width="30" height="48" src={process.env.PUBLIC_URL + '/icons8-linkedin.gif'}  alt="github--v1"/>
      <img                   class="rounded-circle img-fluid " width="30" height="48" src={process.env.PUBLIC_URL + '/icons8-github.gif'}  alt="github--v1"/>
        </div>
  )
}

export default icons