import React, { useState } from "react";
import AccordionItem from "../Accodian/Accordian";
import "../styles.scss";

export default function SidebarFilter({ filters, onFilterChange }) {
  const [selectedFilters, setSelectedFilters] = useState({
    brand: "",
    priceRange: "",
    ratings: "",
  });

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };


  return (
    <div className="sidebarFilter">
      <AccordionItem title="Search Results">
        {filters.brands.map((brand) => (
          <div key={brand}>
            <label>
              <input
                type="checkbox"
                value={brand}
                checked={selectedFilters.brand === brand}
                onChange={() => handleFilterChange("brand", brand)}
              />
              {brand}
            </label>
          </div>
        ))}
      </AccordionItem>

      <AccordionItem title="PRICE RANGE">
        {filters.priceRanges.map((priceRange) => (
          <div key={priceRange}>
            <label>
              <input
                type="radio"
                value={priceRange}
                checked={selectedFilters.priceRange === priceRange}
                onChange={() => handleFilterChange("priceRange", priceRange)}
              />
              {priceRange}
            </label>
          </div>
        ))}
      </AccordionItem>

      <AccordionItem title="RATINGS">
        {filters.ratings.map((rating) => (
          <div key={rating}>
            <label>
              <input
                type="checkbox"
                value={rating}
                checked={selectedFilters.ratings === rating}
                onChange={() => handleFilterChange("ratings", rating)}
              />
              {rating}
            </label>
          </div>
        ))}
      </AccordionItem>
    </div>
  );
}
