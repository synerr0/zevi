import React from "react";
import '../../App.scss';
import logo from "../../assets/images/logo.png";
import ProductList from "../../components/ProductsList/ProductsList";
import SidebarFilter from "../../components/Sidebar/Sidebar";
import Search from "../../components/Search/Search";

const generateStars = (rating: number) => {
  const yellowStarIcon = (
    <img
      width="20"
      height="20"
      src="https://img.icons8.com/fluency/48/star--v1.png"
      alt="star--v1"
    />
  );

  const greyStarIcon = (
    <img
      width="20"
      height="20"
      src="https://img.icons8.com/deco/48/star.png"
      alt="star"
    />
  );

  const yellowStars = Array.from({ length: rating }, (_, index) => yellowStarIcon);
  const greyStars = Array.from({ length: 5 - rating }, (_, index) => greyStarIcon);

  return [...yellowStars, ...greyStars];
};

const filters = {
  brands: ["Mango", "H&M"],
  priceRanges: ["under 500", "1000 to 3000"],
  ratings: [5,4,3,2,1].map((rating) => generateStars(rating)),
};

const Products: React.FC = () => {
  return (
    <>
      <div className="home">
        <img className="logo" src={logo} alt="logo"/>
        <div className="searchDiv-product">
          <Search className="inp-product" type="search" placeholder="Search" />
        </div>{" "}
        <p className="searchHeading">Search Results</p>
        <div className="mainDiv">
          <SidebarFilter filters={filters} />
          <ProductList />
        </div>
      </div>
    </>
  );
};

export default Products;
