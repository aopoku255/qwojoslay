import { useState } from "react";
import Search from "./../../assets/icons/search.svg";
import ChevronDown from "./../../assets/icons/chevron-down.svg";
import { Menu, MenuItem } from "@mui/material";

const categories = [
  "All Categories",
  "Electronics",
  "Fashion",
  "Groceries",
  "Books",
];

const HeaderSearch = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (category) => {
    if (category) setSelectedCategory(category);
    setAnchorEl(null);
  };

  return (
    <div className="w-160 h-10 rounded-full flex items-center pl-4 ring-1 ring-gray-300 hover:ring-rose-900">
      {/* Search icon */}
      <img src={Search} alt="search" className="block mr-2" />

      {/* Input */}
      <input
        type="search"
        placeholder="Searching for..."
        className="w-full focus:outline-none"
      />

      {/* Category Button */}
      <button
        onClick={handleClick}
        className="w-50 bg-gray-200 h-full rounded-r-full px-3 border-l border-l-gray-300 text-sm flex items-center justify-center text-gray-600"
      >
        {selectedCategory}
        <img src={ChevronDown} alt="" className="ml-1 h-4" />
      </button>

      {/* MUI Menu */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose()}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {categories.map((category) => (
          <MenuItem key={category} onClick={() => handleClose(category)}>
            {category}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default HeaderSearch;
