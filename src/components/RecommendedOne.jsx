
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import FruitsProductCard from './FruitsProductCard';
import Juiceproduct from './Juiceproduct';
import VegetableCard from './VegetableCard';
import SnackCard from './SnackCard';
import OrganicCard from './OrganicCard';

const RecommendedOne = () => {


    const [productCards, setproductCards] = useState([]);

  

    useEffect(() => {

        const allProducts = async () => {

            const fetchProduct = await axios.get("https://fakestoreapi.com/products?limit=12");

            const response = fetchProduct.data;
            setproductCards(response)
        }

        allProducts();

    }, [])

 

    return (
        <section className="recommended">
            <div className="container container-lg">
                <div className="section-heading flex-between flex-wrap gap-16">
                    <h5 className="mb-0">Recommended for you</h5>
                    
                    <ul className="nav common-tab nav-pills" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link active"
                                id="pills-all-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-all"
                                type="button"
                                role="tab"
                                aria-controls="pills-all"
                                aria-selected="true"
                            >
                                All
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="pills-grocery-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-grocery"
                                type="button"
                                role="tab"
                                aria-controls="pills-grocery"
                                aria-selected="false"
                            >
                                Grocery
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="pills-fruits-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-fruits"
                                type="button"
                                role="tab"
                                aria-controls="pills-fruits"
                                aria-selected="false"
                            >
                                Fruits
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="pills-juices-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-juices"
                                type="button"
                                role="tab"
                                aria-controls="pills-juices"
                                aria-selected="false"
                            >
                                Juices
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="pills-vegetables-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-vegetables"
                                type="button"
                                role="tab"
                                aria-controls="pills-vegetables"
                                aria-selected="false"
                            >
                                Vegetables
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="pills-snacks-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-snacks"
                                type="button"
                                role="tab"
                                aria-controls="pills-snacks"
                                aria-selected="false"
                            >
                                Snacks
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="pills-organic-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-organic"
                                type="button"
                                role="tab"
                                aria-controls="pills-organic"
                                aria-selected="false"
                            >
                                Organic Foods
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="tab-content" id="pills-tabContent">
                    <div
                        className="tab-pane fade show active"
                        id="pills-all"
                        role="tabpanel"
                        aria-labelledby="pills-all-tab"
                        tabIndex={0}
                    >
                        <div className="row g-12">

            {
                 productCards.map((item)=>(
                    <div key={item.id} className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                    <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                        <Link
                            to={`/product-details/${item.id}`}
                            className="product-card__thumb flex-center"
                        >
                            <img src={item.image}  alt="" />
                        </Link>
                        <div className="product-card__content p-sm-2">
                            <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                <Link to={`/product-details/${item.id}`} className="link text-line-2">
                                    {item.title}
                                </Link>
                            </h6>
                            <div className="flex-align gap-4">
                                <span className="text-main-600 text-md d-flex">
                                    <i className="ph-fill ph-storefront" />
                                </span>
                                <span className="text-gray-500 text-xs">
                                    By Lucky Supermarket
                                </span>
                            </div>
                            <div className="product-card__content mt-12">
                                <div className="product-card__price mb-8">
                                    <span className="text-heading text-md fw-semibold ">
                                       {item.price}
                                        <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                    </span>
                                    <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                        $28.99
                                    </span>
                                </div>
                                <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-600"> {item.rating.rate} </span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                        <i className="ph-fill ph-star" />
                                    </span>
                                    <span className="text-xs fw-bold text-gray-600"> {`( ${item.rating.count}) `} </span>
                                </div>
                                <Link
                                    to="/cart"
                                    className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                >
                                    Add To Cart <i className="ph ph-shopping-cart" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                 ))
            }
 
                           
                        </div>




                    </div>
                    <div
                        className="tab-pane fade"
                        id="pills-grocery"
                        role="tabpanel"
                        aria-labelledby="pills-grocery-tab"
                        tabIndex={0}
                    >

                        

                           
                                {/* <div className="row g-12">

                    {
                        productCards.map((item)=>(
                            <div  key={item.id} className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                            <div  className="    product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                            
                            <Link 
                                to={`/product-details/${item.id}`}
                                className="product-card__thumb flex-center"
                            >
                                <img src={item.image} alt="" /> 
                                
                            </Link>
                            <div className="product-card__content p-sm-2">
                                <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                    <Link   to={`/product-details/${item.id}`} className="link text-line-2">
                                   {item.title}
                                    </Link>
                                </h6>
                                <div className="flex-align gap-4">
                                    <span className="text-main-600 text-md d-flex">
                                        <i className="ph-fill ph-storefront" />
                                    </span>
                                    <span className="text-gray-500 text-xs">
                                        By Lucky Supermarket
                                    </span>
                                </div>
                                <div className="product-card__content mt-12">
                                    <div className="product-card__price mb-8">
                                        <span className="text-heading text-md fw-semibold ">
                                            {item.price}
                                            <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                        </span>
                                        <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                            $28.99
                                        </span>
                                    </div>
                                    <div className="flex-align gap-6">
                                        <span className="text-xs fw-bold text-gray-600">{item.rating.rate} </span>
                                        <span className="text-15 fw-bold text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-bold text-gray-600">{`(${item.rating.count}) k`}</span>
                                    </div>
                                    <Link
                                        to="/cart"
                                        className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                                    >
                                        Add To Cart <i className="ph ph-shopping-cart" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                         </div>
                        ))


                    }
                              
                </div>  */}

                       
                        




                    </div>
                    <div
                        className="tab-pane fade"
                        id="pills-fruits"
                        role="tabpanel"
                        aria-labelledby="pills-fruits-tab"
                        tabIndex={0}
                    >
                        <div className="row g-12">
                            <FruitsProductCard/>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="pills-juices"
                        role="tabpanel"
                        aria-labelledby="pills-juices-tab"
                        tabIndex={0}
                    >
                        <div className="row g-12">
                            <Juiceproduct/>

                        </div>
                    </div>

                    <div
                        className="tab-pane fade"
                        id="pills-vegetables"
                        role="tabpanel"
                        aria-labelledby="pills-vegetables-tab"
                        tabIndex={0}
                    >
                        <div className="row g-12">

                             <VegetableCard/>

                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="pills-snacks"
                        role="tabpanel"
                        aria-labelledby="pills-snacks-tab"
                        tabIndex={0}
                    >
                        <div className="row g-12">
                    <SnackCard/>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="pills-organic"
                        role="tabpanel"
                        aria-labelledby="pills-organic-tab"
                        tabIndex={0}
                    >
                        <div className="row g-12">
                    <OrganicCard/>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default RecommendedOne