import React from 'react'
import Qfs from '../../components/Qfs/'
import data from '../../components/Qfs/data'

const Faqs = () => {
    return (
      <div>
      <div className="text-center mt-3"><h3>Frequently asked questions</h3></div>
    <hr/>
           {data.FaqsData.map((item, index)=> {
               return(
               <Qfs 
              //  Qu-1
               title={item.title}
               desc={item.desc}   
               key={index}
               />
               )
           })}
  </div>

    )
}

export default Faqs;
