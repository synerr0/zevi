import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import "../styles.scss";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  const data = new Array(8).fill().map((value, index) => ({
    id: index,
    title: faker.commerce.product(),
    image: faker.image.image(),
    rating: faker.number.int({ min: 1, max: 5 }),
    isLiked: false,
  }));

  useEffect(() => {
    setProducts(data);
  }, []);

  const handleLike = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, isLiked: !product.isLiked }
          : product
      )
    );
  };

  const renderStarRating = (rating) => {
    const totalStars = 5;
    const roundedRating = Math.round(rating * 2) / 2;

    return (
      <div className="star-rating">
        {[...Array(Math.floor(roundedRating))].map((_, index) => (
          <i key={index} className="fa-solid fa-star"></i>
        ))}
        {roundedRating % 1 !== 0 && (
          <div className="half-star">
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </div>
        )}
        {[...Array(totalStars - Math.ceil(roundedRating))].map((_, index) => (
          <i key={index} className="fa-regular fa-star"></i>
        ))}
        <span>(210)</span>
      </div>
    );
  };

  return (
    <div className="grid-container">
      {products?.map((item) => (
        <div key={item.id} className="grid-item">
          <button className="likeBtn" onClick={() => handleLike(item.id)}>
            {item.isLiked ? (
              <i
                class="fa-solid fa-heart fa-lg"
                style={{ color: "#db0a0a" }}
              ></i>
            ) : (
              <i
                class="fa-regular fa-heart fa-lg"
                style={{ color: "#fff" }}
              ></i>
            )}
          </button>
          <img className="grid-image" src={item.image} alt={item.title} />
          <p className="product-title">{item.title}</p>
          {renderStarRating(item.rating)}
        </div>
      ))}
    </div>
  );
}
