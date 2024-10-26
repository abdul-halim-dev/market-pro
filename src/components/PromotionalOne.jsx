import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const PromotionalOne = () => {

    const [productCards, setproductCards] = useState([]);
    useEffect(() => {

        const allProducts = async () => {

            const fetchProduct = await axios.get("https://fakestoreapi.com/products?limit=4");

            const response = fetchProduct.data;
            setproductCards(response)
        }

        allProducts();

    }, [])

    return (
        <section className="promotional-banner pt-80">
            <div className="container container-lg">
                <div className="row gy-4">
                   
                {
                    productCards.map((item)=>(
                        <div key={item} className="col-xl-3 col-sm-6 col-xs-6">
                        <div className="promotional-banner-item position-relative rounded-24 overflow-hidden z-1">
                            <img
                                src={item.image}
                                alt=""
                                className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1"
                            />
                            <div className="promotional-banner-item__content">
                                <h6 className="promotional-banner-item__title text-32 text-light">
                                    {item.title.substring(0, 18)}
                                </h6>
                                <Link
                                    to="/shop"
                                    className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8 mt-24"
                                >
                                    Shop Now
                                    <span className="icon text-xl d-flex">
                                        <i className="ph ph-arrow-right" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    ))
                }


       


                </div>
            </div>
        </section>

    )
}

export default PromotionalOne