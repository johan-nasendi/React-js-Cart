import React from 'react'
import {useCart} from 'react-use-cart'

const Card = (props) => {
    const {addItem} = useCart();

    return (
        <div className="col-11 col-md-6 col-lg-2 mx-0 mb-4" >
           <div className="card p-0 overflow-hidden h-100 shadow" >
            <img src={props.img} className="card-img-top img-fluid" alt={props.title} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <h5 classname="card-text">$ {props.price}</h5>
                <p className="card-text">{props.desc}</p>
                <button className="btn btn-success" 
                  onClick={() => addItem(props.item)}>
                    Add to Cart
                </button>
            </div>
            </div> 
        </div>
    )
}

export default Card
