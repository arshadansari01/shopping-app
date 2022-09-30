
import React, { useState, useEffect } from 'react';
import ProductView from '../ProductView';
import './Home.css';
import UpsertDialogBox from './UpsertDialogBox';
import '../ProductView.css';


function Home(props) {

    const [showAddPopUp, setShowAddPopUp] = useState("hidden-popup");


    useEffect(function () {
        const cookieValue = document.cookie;
        if (cookieValue.includes("userId")) {
            let id = [];
            // if("userId=29".includes ("userId")){
            for (let i = 7; i < cookieValue.length; i++) {
                id.push(cookieValue[i]);
            }
            let userId = parseInt((id.join("")));

            findUserByUserId(userId);
            fetchProductByUserInput();

        }
    }, []);

    function findUserByUserId(userId) {
        fetch("http://localhost:9000/user/getUserDetail?userId=" + userId)
            .then(function (response) { return response.json() })
            .then(function (jsonResponse) {
                setCurrentUser(jsonResponse);
            })
    }



    //const [ var name, fucntion name]= usestate(default value)
    const [searchtext, setSearchText] = useState('');
    const [products, setProducts] = useState([]);
    const [currentUser, setCurrentUser] = useState({});

    function handleSearchInput(event) {
        const keypressedvalue = event.target.value;
        setSearchText(keypressedvalue);
        // alert(event.target.value  )
    }

    function fetchProduct(event) {
        if (event.key == 'Enter') {
            fetchProductByUserInput();
        }
    }

    function fetchProductByUserInput() {
        fetch("http://localhost:9000/product?name=" + searchtext)
            .then(function (response) { return response.json() })
            .then(function (jsonResponse) {
                setProducts(jsonResponse);

            })
    }

    function fetchProductByCateogry(categoryName) {
        fetch("http://localhost:9000/product/category?name=" + categoryName)
            .then(function (response) { return response.json() })
            .then(function (jsonResponse) {
                setProducts(jsonResponse);

            })
    }


    function openLoginForm() {
        window.location.href = "/login"
    }

    function handleSignUpActivity() {
        window.location.href = "/signup";
    }

    function openDashBoard() {
        window.location.href = "/dashboard"

    }
    function homePage() {
        window.location.href = '/';
    }

    function openAddProductDialog() {
        setShowAddPopUp("showPopUp");


    }

    function closePopup() {
        setShowAddPopUp("hidden-popup");
    }

    return (
        <React.Fragment>
            <div className='header'>

                <div className='searchbox'>

                    <input className="input-box" value={searchtext} onKeyDown={fetchProduct} type="text" onChange={handleSearchInput} placeholder="Enter item to search" />
                    <input className="button" type="button" value="Search" onClick={fetchProductByUserInput} />


                </div>


                <div className='loginSignUpButton'>

                    <input className='button' type='button' value="Add Products" onClick={openAddProductDialog} />


                    <input className="button" type="button" value="Sign Up" onClick={handleSignUpActivity} />

                    {
                        currentUser.firstName != undefined ? <div className="username" onClick={openDashBoard}> Hi {currentUser.firstName}</div> :
                            <input className="button" type="button" value="Login" onClick={openLoginForm} />

                    }
                </div>

            </div>

            <div className='categories'>
                <div className='categoryName' onClick={() => fetchProductByCateogry('clothing')}>Clothing</div>
                <div className='categoryName' onClick={() => fetchProductByCateogry('shoe')}>Shoe</div>
                <div className='categoryName' onClick={() => fetchProductByCateogry('grocery')} >Grocery</div>
                <div className='categoryName' onClick={() => fetchProductByCateogry('stationary')} >Stationary</div>
                <div className='categoryName' onClick={() => fetchProductByCateogry('electronics')} >Electronics</div>
                <div className='categoryName' onClick={() => fetchProductByCateogry('furniture')} >Furniture</div>
            </div>

            {products.length > 0 &&

                <div className='productListContainer'>
                    {
                        (
                            products.sort((a,b)=>b.productId - a.productId).map(function (product) {
                                return <ProductView key={product.productId} url={product.imageUrl} name={product.name} productId={product.productId} categoryName={product.categoryName} price={product.price} ratings={product.productRating}> </ProductView>
                            }))
                    }
                </div>
            }


            <div className={showAddPopUp} >

                <UpsertDialogBox buttonName="Insert" closePopup={closePopup} />

            </div>

        </React.Fragment>
    )

}

export default Home;