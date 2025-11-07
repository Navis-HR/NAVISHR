import React from "react";
import NAVISHR_LOGO from "../../assets/img/navishr.png";

const Navbar: React.FC = () => {
  return (
    <div className="flex items-center justify-start p-4">
      <img src={NAVISHR_LOGO} alt="NAVIS HR" className="w-auto h-15" />
    </div>
  );
};

export default Navbar;
