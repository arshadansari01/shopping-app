import React from 'react'
import '../ProductView.css'
import { useState } from 'react';

export default function UpsertDialogBox(props) {
    const { closePopup, buttonName } = props;
    const [name, setName] = useState(props.name);
    const [url, setUrl] = useState(props.url);
    const [price, setPrice] = useState(props.price);
    const [ratings, setRatings] = useState(props.ratings);
    const [category, setCategory] = useState(props.categoryName);

    function handleName(event) {
        setName(event.target.value);
    }
    function handlePrice(event) {
        setPrice(event.target.value);

    }

    function handleImage(event) {
        setUrl(event.target.value);

    }
    function handleCategoryName(event) {
        setCategory(event.target.value);

    }
    function handleProductRatings(event) {
        setRatings(event.target.value);
    }

    function submitButtonHandler() {
        console.log(body);
        fetch("http://localhost:9000/product/createProduct", {
            "method": "POST",
            "body": JSON.stringify(body),
            "headers": {
                'Content-Type': 'application/json'
            }

        })
        alert("Product "+ buttonName + " Successfully");
        closePopup();
    }
    
    const body = {
        name: name,
        price: price,
        imageUrl: url,
        categoryName: category,
        productRating: ratings,
        productId: props.productId
    }


    return (


        < div className='UpsertFormAlignment' >

            <label >Name</label>
            <input className="input-box" type="text" value={name} onChange={handleName} />
            <br />
            <label  >Product Image Url</label>
            <input className="input-box" type="text" value={url} onChange={handleImage} />
            <br />
            <label > Category Name</label>
            <input className="input-box" type="text" value={category} onChange={handleCategoryName} />
            <br />
            <label> Product Price</label>
            <input className="input-box" type="text" value={price} onChange={handlePrice} />
            <br />
            <label > Product Ratings</label>
            <input className="input-box" type="text" value={ratings} onChange={handleProductRatings} />
            <br />

            <input className="input-button" type="submit" value={buttonName} onClick={submitButtonHandler}  />
            <br />
            <input className="input-button" type="button" value="Cancel" onClick={closePopup} />

        </div>

    )
}
