import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDesign } from '../../redux/actions/productActions';
import './index.css'

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function ProductDesign() {

    let history = useHistory();
    const dispatch = useDispatch()
    const loading = useSelector(state => state.allProducts.loading)

    const onGoToProductServices = ()=>{
        history.push('/productservices')
    }

    useEffect(() => {
        dispatch(fetchProductDesign())
    }, [])

    return (
        <React.Fragment>
         {loading ? <div className="fetch-data"><h1> Fetching the data </h1>
                 <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} /> </div>: 
            <>
        <div className="button-container">
          <button className="goback-button" onClick={onGoToProductServices}> Click here for product services</button>
         </div>
        <div className="main-container">
            <div className="product-container">
                <div className="heading-text">
                    <h1 className="heading">Product Design</h1>
                    <p className="description">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <img className="product-image" src="./images/ProductDesign.png" alt="product" />
            </div>
            <div className="product-container-design">
                <div className="heading-text">
                    <h1 className="heading">Product Design</h1>
                    <p className="description">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <img className="visual-design-image" src="./images/morethanvisualdesign.png" alt="product" />
            </div>
        </div>
        </>}
        </React.Fragment>
    )
}

export default ProductDesign
