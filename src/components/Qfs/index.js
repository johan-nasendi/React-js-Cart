import React from 'react'

const Qfs = (props) => {
    return (
    
    <div class="container px-4 py-5" id="icon-grid">
         <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
          <h4 class="fw-bold mb-0"> {props.title} </h4>
          <ul>
              <li><p> {props.desc}</p></li>
          </ul>
        </div>
      </div>
    )
}

export default Qfs;
