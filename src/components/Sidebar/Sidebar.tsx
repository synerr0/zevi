import React, { useState } from "react";
import AccordionItem from "../Accodian/Accordian.tsx";
import "../styles.scss";

interface SidebarFilterProps {
  filters: {
    brands: string[];
    priceRanges: string[];
    ratings: React.ReactElement[][];
  };
  onFilterChange?: (filterType: string, value: string) => void;
}

const SidebarFilter: React.FC<SidebarFilterProps> = ({
  filters,
  onFilterChange,
}) => {
  const [selectedFilters, setSelectedFilters] = useState({
    brand: "",
    priceRange: "",
    ratings: [] as string[],
  });

  const handleFilterChange = (filterType: string, value: string) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
    onFilterChange?.(filterType, value);
  };

  return (
    <div className="sidebarFilter">
      <AccordionItem title="BRAND">
        {filters.brands.map((brand) => (
          <div className="sidebar-item" key={brand}>
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

      <hr className="hr"></hr>

      <AccordionItem title="PRICE RANGE">
        {filters.priceRanges.map((priceRange) => (
          <div className="sidebar-item" key={priceRange}>
            <label>
              <input
                type="checkbox"
                value={priceRange}
                checked={selectedFilters.priceRange === priceRange}
                onChange={() => handleFilterChange("priceRange", priceRange)}
              />
              {priceRange}
            </label>
          </div>
        ))}
      </AccordionItem>

      <hr className="hr"></hr>

      <AccordionItem title="RATINGS">
        {filters.ratings.map((rating, index) => (
          <div className="sidebar-item" key={index}>
            <label>
              <input
                type="checkbox"
                value={index.toString()}
                checked={selectedFilters.ratings.includes(index.toString())}
                onChange={() => handleFilterChange("ratings", index.toString())}
              />
              {rating}
            </label>
          </div>
        ))}
      </AccordionItem>
    </div>
  );
};

export default SidebarFilter;
