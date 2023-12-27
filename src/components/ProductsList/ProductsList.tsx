import React from "react";
import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import "../styles.scss";

const generateStars = (rating) => {
  const starIcon = (
    <img
      width="20"
      height="20"
      src="https://img.icons8.com/fluency/48/star--v1.png"
      alt="star--v1"
    />
  );

  return Array.from({ length: rating }, (_, index) => starIcon);
};


interface Product {
  id: number;
  title: string;
  price: number;
  salePrice: number;
  image: string;
  rating: React.ReactElement[][];
  isLiked: boolean;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const data: Product[] = new Array(8).fill(0).map((_, index) => ({
    id: index,
    title: faker.commerce.product(),
    price: faker.number.int({ min: 100, max: 999 }),
    salePrice: faker.number.int({ min: 100, max: 999 }),
    image: faker.image.url(),
    rating: [5].map((rating) => generateStars(rating)),
    isLiked: false,
  }));

  useEffect(() => {
    setProducts(data);
  }, []);

  const handleLike = (productId: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, isLiked: !product.isLiked }
          : product
      )
    );
  };
  
  return (
    <div className="grid-container">
      {products?.map((item) => (
        <div key={item.id} className="grid-item">
          <button className="likeBtn" onClick={() => handleLike(item.id)}>
            {item.isLiked ? (
              <i
                className="fa-solid fa-heart fa-lg"
                style={{ color: "#db0a0a" }}
              ></i>
            ) : (
              <i
                className="fa-regular fa-heart fa-lg"
                style={{ color: "#fff" }}
              ></i>
            )}
          </button>
          <div className="product-img-container">
            <img className="grid-image" src={item.image} alt={item.title} />
            <p className="view-product-text">View Product</p>
          </div>
          <p className="product-title">{item.title}</p>
          <p className="product-price"><span className="product-price1">RS. {item.price}</span> 
          <span className="product-saleprice">RS. {item.salePrice}</span>
          </p>
          <p className="product-rating">{item.rating}<span className="item-rating-num">(210)</span></p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
