import React from 'react'
import img from '../../assets/images/hero.png'
import {
    Link
} from "react-router-dom";


const Home = () => {
    return (
        <>
          <div class="container col-xxl-8 px-4 py-5 shadow">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
                <img src={img} class="d-block mx-lg-auto img-fluid" 
                alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
            </div>
            <div class="col-lg-6">
                <h1 className="display-5 fw-bold lh-1 mb-3">Welcome, Simple Googs Buy</h1>
                <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, 
                featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <Link to="/product" className="btn btn-outline-secondary btn-lg px-4">Let's Go</Link>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Home
