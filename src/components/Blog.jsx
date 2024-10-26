import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {

  

    const [blogProductCards, setblogProductCards] = useState([]);

    useEffect(() => {
        const cardsFetch = async () => {
           try {
            const response = await axios.get("https://fakestoreapi.com/products?limit=4");
 
            setblogProductCards(response.data)
           } catch (error) {
            console.log(error.message)
           }
        }
        cardsFetch()

    }, [])

  




    return (
        <section className="blog py-80">
            <div className="container container-lg">
                <div className="row gy-5">
                    <div className="col-lg-8 pe-xl-4">
                        <div className="blog-item-wrapper">


                            {
                                blogProductCards.map((item)=>(
                                    <div key={item.id} className="blog-item">
                                    <Link
                                        to={`/blog-details/${item.id}`}
                                        className="w-100 h-100 rounded-16 overflow-hidden"
                                    >
                                        <img
                                            src={item.image}
                                            alt=""
                                            className="  w-100 h-[200px] object-fit-contain "
                                        />
                                    </Link>
                                    <div className="blog-item__content mt-24">
                                        <span className="bg-main-50 text-main-600 py-4 px-24 rounded-8 mb-16">
                                            Gadget
                                        </span>
                                        <h6 className="text-2xl mb-24">
                                            <Link    to={`/blog-details/${item.id}`} className="">
                                               {
                                                item.title
                                               }
                                            </Link>
                                        </h6>
                                        <p className="text-gray-700 text-line-2">
                                             {item.description}
                                        </p>
                                        <div className="flex-align flex-wrap gap-24 pt-24 mt-24 border-top border-gray-100">
                                            <div className="flex-align flex-wrap gap-8">
                                                <span className="text-lg text-main-600">
                                                    <i className="ph ph-calendar-dots" />
                                                </span>
                                                <span className="text-sm text-gray-500">
                                                    <Link
                                                         to={`/blog-details/${item.id}`}
                                                        className="text-gray-500 hover-text-main-600"
                                                    >
                                                        July 12, 2025
                                                    </Link>
                                                </span>
                                            </div>
                                            <div className="flex-align flex-wrap gap-8">
                                                <span className="text-lg text-main-600">
                                                    <i className="ph ph-chats-circle" />
                                                </span>
                                                <span className="text-sm text-gray-500">
                                                    <Link
                                                          to={`/blog-details/${item.id}`}
                                                        className="text-gray-500 hover-text-main-600"
                                                    >
                                                        0 Comments
                                                    </Link>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    

                                ))
                            }
                            

                        </div>
                        {/* Pagination Start */}
                        <ul className="pagination flex-align flex-wrap gap-16">
                            <li className="page-item">
                                <Link
                                    className="page-link h-64 w-64 flex-center text-xxl rounded-8 fw-medium text-neutral-600 border border-gray-100"
                                    to="#"
                                >
                                    <i className="ph-bold ph-arrow-left" />
                                </Link>
                            </li>
                            <li className="page-item active">
                                <Link
                                    className="page-link h-64 w-64 flex-center text-md rounded-8 fw-medium text-neutral-600 border border-gray-100"
                                    to="#"
                                >
                                    01
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link
                                    className="page-link h-64 w-64 flex-center text-md rounded-8 fw-medium text-neutral-600 border border-gray-100"
                                    to="#"
                                >
                                    02
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link
                                    className="page-link h-64 w-64 flex-center text-md rounded-8 fw-medium text-neutral-600 border border-gray-100"
                                    to="#"
                                >
                                    03
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link
                                    className="page-link h-64 w-64 flex-center text-md rounded-8 fw-medium text-neutral-600 border border-gray-100"
                                    to="#"
                                >
                                    04
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link
                                    className="page-link h-64 w-64 flex-center text-md rounded-8 fw-medium text-neutral-600 border border-gray-100"
                                    to="#"
                                >
                                    05
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link
                                    className="page-link h-64 w-64 flex-center text-md rounded-8 fw-medium text-neutral-600 border border-gray-100"
                                    to="#"
                                >
                                    06
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link
                                    className="page-link h-64 w-64 flex-center text-md rounded-8 fw-medium text-neutral-600 border border-gray-100"
                                    to="#"
                                >
                                    07
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link
                                    className="page-link h-64 w-64 flex-center text-xxl rounded-8 fw-medium text-neutral-600 border border-gray-100"
                                    to="#"
                                >
                                    <i className="ph-bold ph-arrow-right" />
                                </Link>
                            </li>
                        </ul>
                        {/* Pagination End */}
                    </div>
                    <div className="col-lg-4 ps-xl-4">
                        {/* Search Start */}
                        <div className="blog-sidebar border border-gray-100 rounded-8 p-32 mb-40">
                            <h6 className="text-xl mb-32 pb-32 border-bottom border-gray-100">
                                Search Here
                            </h6>
                            <form action="#">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control common-input bg-color-three"
                                        placeholder="Searching..."
                                    />
                                    <button
                                        type="submit"
                                        className="btn btn-main text-2xl h-56 w-56 flex-center text-2xl input-group-text"
                                    >
                                        <i className="ph ph-magnifying-glass" />
                                    </button>
                                </div>
                            </form>
                        </div>
                        {/* Search End */}


                        {/* Recent Post Start */}
                        <div className="blog-sidebar border border-gray-100 rounded-8 p-32 mb-40">
                            <h6 className="text-xl mb-32 pb-32 border-bottom border-gray-100">
                                Recent Posts
                            </h6>

                                {
                                    blogProductCards.map((item)=>(
                                        <div className="d-flex align-items-center flex-sm-nowrap flex-wrap gap-24 mb-16">
                                        <Link
                                             to={`/blog-details/${item.id}`}
                                            className="w-100 h-100 rounded-4 overflow-hidden w-120 h-120 flex-shrink-0"
                                        >
                                            <img
                                                src={item.image}
                                                alt=""
                                                className="cover-img"
                                            />
                                        </Link>
                                        <div className="flex-grow-1">
                                            <h6 className="text-lg">
                                                <Link    to={`/blog-details/${item.id}`} className="text-line-3">
                                                     {item.title}
                                                </Link>
                                            </h6>
                                            <div className="flex-align flex-wrap gap-8">
                                                <span className="text-lg text-main-600">
                                                    <i className="ph ph-calendar-dots" />
                                                </span>
                                                <span className="text-sm text-gray-500">
                                                    <Link
                                                          to={`/blog-details/${item.id}`}
                                                        className="text-gray-500 hover-text-main-600"
                                                    >
                                                        July 12, 2025
                                                    </Link>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    ))
                                }

                           


                        </div>
                        {/* Recent Post End */}
                        {/* Tags Start */}
                        <div className="blog-sidebar border border-gray-100 rounded-8 p-32 mb-40">
                            <h6 className="text-xl mb-32 pb-32 border-bottom border-gray-100">
                                Recent Posts
                            </h6>
                            <ul>
                                <li className="mb-16">
                                    <Link
                                        to="/blog-details"
                                        className="flex-between gap-8 text-gray-700 border border-gray-100 rounded-4 p-4 ps-16 hover-border-main-600 hover-text-main-600"
                                    >
                                        <span>Gaming (12)</span>
                                        <span className="w-40 h-40 flex-center rounded-4 bg-main-50 text-main-600">
                                            <i className="ph ph-arrow-right" />
                                        </span>
                                    </Link>
                                </li>
                                <li className="mb-16">
                                    <Link
                                        to="/blog-details"
                                        className="flex-between gap-8 text-gray-700 border border-gray-100 rounded-4 p-4 ps-16 hover-border-main-600 hover-text-main-600"
                                    >
                                        <span>Smart Gadget (05)</span>
                                        <span className="w-40 h-40 flex-center rounded-4 bg-main-50 text-main-600">
                                            <i className="ph ph-arrow-right" />
                                        </span>
                                    </Link>
                                </li>
                                <li className="mb-16">
                                    <Link
                                        to="/blog-details"
                                        className="flex-between gap-8 text-gray-700 border border-gray-100 rounded-4 p-4 ps-16 hover-border-main-600 hover-text-main-600"
                                    >
                                        <span>Software (29)</span>
                                        <span className="w-40 h-40 flex-center rounded-4 bg-main-50 text-main-600">
                                            <i className="ph ph-arrow-right" />
                                        </span>
                                    </Link>
                                </li>
                                <li className="mb-16">
                                    <Link
                                        to="/blog-details"
                                        className="flex-between gap-8 text-gray-700 border border-gray-100 rounded-4 p-4 ps-16 hover-border-main-600 hover-text-main-600"
                                    >
                                        <span>Electronics (24)</span>
                                        <span className="w-40 h-40 flex-center rounded-4 bg-main-50 text-main-600">
                                            <i className="ph ph-arrow-right" />
                                        </span>
                                    </Link>
                                </li>
                                <li className="mb-16">
                                    <Link
                                        to="/blog-details"
                                        className="flex-between gap-8 text-gray-700 border border-gray-100 rounded-4 p-4 ps-16 hover-border-main-600 hover-text-main-600"
                                    >
                                        <span>Laptop (08)</span>
                                        <span className="w-40 h-40 flex-center rounded-4 bg-main-50 text-main-600">
                                            <i className="ph ph-arrow-right" />
                                        </span>
                                    </Link>
                                </li>
                                <li className="mb-16">
                                    <Link
                                        to="/blog-details"
                                        className="flex-between gap-8 text-gray-700 border border-gray-100 rounded-4 p-4 ps-16 hover-border-main-600 hover-text-main-600"
                                    >
                                        <span>Mobile &amp; Accessories (16)</span>
                                        <span className="w-40 h-40 flex-center rounded-4 bg-main-50 text-main-600">
                                            <i className="ph ph-arrow-right" />
                                        </span>
                                    </Link>
                                </li>
                                <li className="mb-0">
                                    <Link
                                        to="/blog-details"
                                        className="flex-between gap-8 text-gray-700 border border-gray-100 rounded-4 p-4 ps-16 hover-border-main-600 hover-text-main-600"
                                    >
                                        <span>Apliance (24)</span>
                                        <span className="w-40 h-40 flex-center rounded-4 bg-main-50 text-main-600">
                                            <i className="ph ph-arrow-right" />
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* Tags End */}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Blog