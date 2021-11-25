import React from "react";

const Navbar = ({ filter, nav }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {nav.map((currElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filter(currElem)}
              >
                {currElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
