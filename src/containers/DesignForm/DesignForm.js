import React, { useState } from 'react';
import './index.css'
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const productTypes = [
    {
        id: 0,
        product: "Select an option"
    },
    {
        id: 1,
        product: "Product 1"
    },
    {
        id: 2,
        product: "Product 2"
    },
    {
        id: 3,
        product: "Product 3"
    }
    ];

const radioInputs = [
    {
        id: 0,
        input: "Good"
    },
    {
        id: 1,
        input: "Bad"
    },
    {
        id: 2,
        input: "Best"
    }];


const DesignForm=()=> {
toast.configure();
const [form, setForm] = useState({
    name: "",
    email: "",
    selectItem: "",
    radioInput: "",
    checkbox: false,
    });

  const [validateForm, setValidateForm] = useState({
    nameError: "",
    emailError: "",
    selectItemError: "",
    radioInputError: "",
    checkboxError: "",
  });


const onChangeInput = (event) => {
 
    if (event.target.type === 'checkbox' && !event.target.checked) {
        setForm({...form, [event.target.name]: ''});
    } else {
        setForm({ ...form, [event.target.name]: event.target.value, });
    }
    
  };

const validateFormDetails = () => {
    const errorObject = validateForm

    if (form.name !== "" ) {
      errorObject.nameError = "";
    } else {
      errorObject.nameError = "Please fill the Name";
    }

    if (form.radioInput !== "") {
      errorObject.radioInputError = "";
    } else {
      errorObject.radioInputError = "Please select an option";
    }

    if (form.checkbox === "on") {
      errorObject.checkboxError = "";
    } else {
      errorObject.checkboxError = "Please select checkbox";
    }

    if (form.email !== "") {
      errorObject.emailError = "";
    } else {
      errorObject.emailError = "Please fill the Email";
    }

    if (form.selectItem !== "") {
        errorObject.selectItemError = "";
      } else {
        errorObject.selectItemError = "Please select an option";
      }
    setValidateForm({ ...validateForm, ...errorObject });
  };

  const notify = () => {
    const {checkbox,email,name,radioInput,selectItem} = form
    if(checkbox !== false && email!== "" && name !== "" && radioInput !== "" && selectItem !== ""){
            toast("Form submitted");
        };
  }


const options = {
    method:"POST",
    headers: { "Content-Type": "application/json" },
    body:JSON.stringify(form)
}

   const postData = async ()=> {   
    const response = await axios.post('https://fakestoreapi.com', options)
    const data = await response.json()
  }

    const renderOption = () => {
        return productTypes.map((product) => {
          return (
            <option key={product.id} value={product.product}>
              {product.product}
            </option>
          );
        });
      };

    const renderRadioInputs = ()=>{
        return radioInputs.map((input) => {
            return (<div key={input.id} >
              <input type="radio" name="radioInput" value={input.input} onChange={onChangeInput}/>
              <label> {input.input}  </label>
              </div>
            );
          });
    }

    const onSubmitForm = (e)=>{
        e.preventDefault()
        validateFormDetails();
        postData()
    }

	return (
    <form className="form-controls" onSubmit={onSubmitForm}>
            <div className="input-field">
                <label>Name </label>
                <input type="text" name="name" onChange={onChangeInput} />
                {validateForm.nameError === "" ? null : (
                    <span className="error-message"> {validateForm.nameError} </span>
                )}
            </div>

            <div className="input-field">
                <label>Email </label>
                <input type="text" name="email" onChange={onChangeInput} />
                {validateForm.emailError === "" ? null : (
                    <span className="error-message"> {validateForm.emailError} </span>
                )}
            </div>

            <div className="input-field">
                <label> Select product type </label>
                <select type="text" name="selectItem" onChange={onChangeInput}>
                    {renderOption()}
                </select>
                {validateForm.selectItemError === "" ? null : (
                    <span className="error-message"> {validateForm.selectItemError} </span>
                )}
            </div>

            <div className="input-field">
            <label>Radio Input </label>
             {renderRadioInputs()}
            {validateForm.radioInputError === "" ? null : (
                <span className="error-message"> {validateForm.radioInputError} </span>
            )}
            </div>

            <div className="input-field">
            <div>
                <input type="checkbox" id="terms" name="checkbox" onChange={onChangeInput}  />
                <label htmlFor="terms"> Terms and conditions </label>
            </div>
            {validateForm.checkboxError === "" ? null : (
                <span className="error-message"> {validateForm.checkboxError} </span>
            )}
            </div>
            <button className="btn btn-primary" onClick={notify}> Submit Form </button>
      </form>
	)
}

export default DesignForm
