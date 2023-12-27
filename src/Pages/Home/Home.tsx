import React, { useEffect, useRef, useState } from "react";
import '../../App.scss';
import home1 from "../../assets/images/Home1.jpg";
import logo from "../../assets/images/logo.png";
import { faker } from "@faker-js/faker";
import { Link } from "react-router-dom";
import Search from "../../components/Search/Search";

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const data = new Array(5).fill(null).map((_, index) => ({
    id: index,
    title: faker.commerce.product(),
    image: faker.image.url(),
  }));

  const inputRef = useRef<HTMLInputElement>(null);

  const handleTrend = () => {
    setIsVisible(true);
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(e.target as Node) &&
        !(e.target as HTMLElement).classList.contains("post")
      ) {
        setIsVisible(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div className="home">
        <img className="homeImg" src={home1} alt="background"/>
        <img className="logo" src={logo} alt="logo"/>
        <div className="searchDiv-home" ref={inputRef}>
          <Search
            className="inp-home"
            type="search"
            placeholder="Search"
            onClick={handleTrend}
          />
          {isVisible && (
            <div className="visibleContainer">
              <p className="visText">Latest Trends</p>
              <div className="gridContainer">
                {data.map((item) => (
                  <Link to="/products" key={item.id} className="gridItem">
                    <img src={item.image} className="searchImg" alt="product"/>
                    <p className="visTitle">{item.title}</p>
                  </Link>
                ))}
              </div>
              <div>
                <p className="visText">Popular suggestions</p>
                {data.map((item) => (
                  <Link to="/products" className="visTitle" key={item.id}>
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
