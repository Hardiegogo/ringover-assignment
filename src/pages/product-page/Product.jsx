import React, { useEffect, useState } from "react";
import Cart from "../../components/cart-component/Cart";
import Navbar from "../../components/navbar-component/Navbar";
import "./Product.css";
import { useParams, useNavigate } from "react-router-dom";
import { useProducts } from "../../context/useProducts";
import { AiOutlineArrowLeft } from "react-icons/ai";
import blackCheck from "../../assets/black-check.png";
import blueCheck from "../../assets/blue-check.jpg";
import { ClipLoader } from "react-spinners";
import { printRating } from "../../utils/printRating";
import { calculateIsInCart } from "../../utils/calculateIsInCart";

const DetailedProduct = () => {
  const { productId } = useParams();
  const { data, setData } = useProducts();
  const { products } = data;
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState();
  const starsToBeShown = printRating(selectedProduct?.rating);
  const emptyStars=printRating(0)
  useEffect(() => {
    const product = products.find((product) => product._id === productId);
    setSelectedProduct(product);
    if (product) {
      setIsLoading(false);
    }
  }, [productId]);
  const navigate = useNavigate();
  const isInCart = calculateIsInCart(data.cart, selectedProduct);
  const addclickHandler = () => {
    if (!isInCart) {
      setData((prevState) => ({
        ...prevState,
        cart: [...prevState.cart, selectedProduct],
      }));
    } else {
      const newCart = data.cart.filter(
        (item) => item._id !== selectedProduct._id
      );
      setData((prevState) => ({
        ...prevState,
        cart: newCart,
      }));
    }
  };
  return isLoading ? (
    <ClipLoader />
  ) : (
    <div className="detailed-product">
      <div className="navigate-back-heading" onClick={() => navigate("/")}>
        <AiOutlineArrowLeft size={25} /> your design space{" "}
      </div>

      <div className="container">
        <div className="detailed-product-left">
          <div className="container-internal">
            <div className="detailed-product-img">
              <div className="img-container">
                <img src={selectedProduct.imgLink} alt="" />
              </div>
            </div>
            <div className="detailed-product-img-sm">
              <div className="img-container">
                <img src={selectedProduct.imgLink} alt="" />
              </div>
              <div className="img-container">
                <img src={selectedProduct.imgLink} alt="" />
              </div>
              <div className="img-container">
                <img src={selectedProduct.imgLink} alt="" />
              </div>              
            </div>
          </div>
          <div className="rate">
            Rate product {emptyStars}
          </div>
        </div>
        <div className="detailed-product-right">
          <div>
            <h2 className="">{selectedProduct.name}</h2>
            <p>By Kicksup</p>
          </div>
          <div>
            {starsToBeShown}
            <p>80 reviews</p>
          </div>
          <div>
            <p>Rs. {selectedProduct.price}</p>
            <p className="grey-text">
              Get an exclusive 20% off using HDFC bank credit card
            </p>
          </div>

          <div>
            <div className="product-options">
              <h3>Front</h3>
              <div className="options">
                <div className="product-option">
                  <img src={blackCheck} alt="" />
                </div>
                <div className="product-option bluebox"></div>
                <div className="product-option">
                  <img src={blueCheck} alt="" />
                </div>
              </div>
            </div>
            <div className="product-options">
              <h3>Middle</h3>
              <div className="options">
                <div className="product-option">
                  <img src={blackCheck} alt="" />
                </div>
                <div className="product-option bluebox"></div>
                <div className="product-option">
                  <img src={blueCheck} alt="" />
                </div>
              </div>
            </div>
            <div className="product-options">
              <h3>Back</h3>
              <div className="options">
                <div className="product-option">
                  <img src={blackCheck} alt="" />
                </div>
                <div className="product-option bluebox"></div>
                <div className="product-option">
                  <img src={blueCheck} alt="" />
                </div>
              </div>
            </div>
            <div className="product-options">
              <h3>Sole</h3>
              <div className="options">
                <div className="product-option blackbox"></div>
                <div className="product-option bluebox"></div>
                <div className="product-option whitebox"></div>
              </div>
            </div>
            <div className="product-options">
              <h3>Size</h3>
              <div className="options">
                {[7, 8, 9, 10].map((number,index) => (
                  <div key={index} className="product-option whitebox">{number}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="product-buttons">
        <button className="btn-white">Share design</button>
        <button className="btn-primary" onClick={addclickHandler}>
          {isInCart ? "Remove from cart" : "Add to cart"}
        </button>
      </footer>
    </div>
  );
};
const Product = () => {
  return (
    <div className="product-page">
      <Navbar />
      <main className="product-page-content">
        <DetailedProduct />
        <Cart />
      </main>
    </div>
  );
};

export default Product;
