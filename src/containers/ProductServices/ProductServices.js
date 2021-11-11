import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import './index.css'

const buttonData = ["User experience design","Visual design", "Prototyping","Content design","Design Systems","Voice, Chatbots & Multimodal UI"]

function ProductServices() {
    const [buttonTab, setButtonTab] = useState("Visual design")
    let history = useHistory();

   const onChangeButton = (e)=>{
       setButtonTab(e.target.value)
    }

    const renderButtons = ()=>{
        return buttonData.map((button,index) => {
            return <button key={index} className="button-services" onClick={onChangeButton} value={button}>{button}</button>
          }) 
    }

    const onProductDesign = ()=>{
        history.push('/')
    }

    const onShowFormControls = ()=>{
        history.push('/productdesign-form')
    }

    function renderVisualDesign() {
        return(
            <div className="product-container">
            <div className="heading-text">
                <h1 className="heading">{buttonTab}</h1>
                <p className="description">Today’s designers is no longer a specialist inserted at the end of the product development cycle. Every business needs to value design, emphasize and recognize its importance to succeed, It’s a culmination of everything.</p>
            </div>
            <img className="product-image" src="./images/user_experience_design.svg" alt="product" />
        </div>
        )
    }
    return (
        <React.Fragment>
            <button className="goback-button" onClick={onProductDesign}>Go Back</button>
            <button className="goback-button" onClick={onShowFormControls}>Click here to post the data</button>
        <div className="product-services-container">
            <h1 className="button-heading">Product Design Services</h1>
            {renderButtons()}
        </div>
        <div>
            {renderVisualDesign()}
        </div>
        </React.Fragment>
    )
}

export default ProductServices
