import React from 'react'
import Card from '../Card'
import data from '../Card/data'

const Product = () => {
    return (
        <div>
            <div className="text-center mt-3"><h3>All Item</h3></div>
          <hr/>
          <section className="py4 container">
              <div className="row justify-content-center">
                 {data.productData.map((item, index)=> {

                     return(
                     <Card 
                     img={item.img}
                     title={item.title}
                     desc={item.desc}   
                     price={item.price} 
                     item={item}
                     key={index}
                     />
                     )
                 })}
              </div>
          </section> 
        </div>
    )
}

export default Product
