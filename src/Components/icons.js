import React from 'react'


function icons() {
  return (
    <div>
        <a href='https://www.linkedin.com/in/okuhle-charlieman-2a1068245/'> <img  
         class="rounded-circle img-fluid m-3" width="30"
          height="48" src={process.env.PUBLIC_URL + '/icons8-linkedin.gif'}  
          alt="github--v1"/>
          </a>
          <a href='https://github.com/okuhlecharlieman'>  
      <img         class="rounded-circle img-fluid "
      width="30"
       height="48" 
       src={process.env.PUBLIC_URL + '/icons8-github.gif'} 
        alt="github--v1"/>
        </a>
        </div>
  )
}

export default icons