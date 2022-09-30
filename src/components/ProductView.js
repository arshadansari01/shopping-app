import React, { isValidElement } from 'react';
import './ProductView.css'
import UpsertDialogBox from './ui/UpsertDialogBox';
import { useState } from 'react';

function ProductView(props) {

    const [showPopUp, setShowPopUp] = useState("hidden-popup");
    function redirectUpdatePage() {
        setShowPopUp("showPopUp");
    }


    function closePopup() {
        setShowPopUp("hidden-popup");
    }

    function redirectDeletePage() {
        fetch("http://localhost:9000/product?id=" + productId, {
            "method": "DELETE",
        })
        alert("Product Deleted Successfully");

    }



    const { url, name, price, ratings, productId, categoryName } = props;



    return (
        <React.Fragment>
            <div className={showPopUp} >

                <UpsertDialogBox productId={productId} name={name} url={url} price={price} ratings={ratings} buttonName="Update" categoryName={categoryName} closePopup={closePopup} />

            </div>
            <div className='productContainer'>
                <img className='productImage' src={url} />
                <div className='productDescription' >
                    <label>{name}</label>
                    <label>Price : {price}</label>
                    <label>Ratings {ratings}</label>
                </div>

                <div className='updateDeletePageSection'>

                    <div className='updateDeleteContainer'>
                        <input className='updateDeleteButton' type="button" onClick={redirectUpdatePage} value="Update" />
                        <input className='updateDeleteButton' type="button" onClick={redirectDeletePage} value="Delete" />


                    </div>
                </div>

            </div>



        </React.Fragment>
    )
}

export default ProductView;