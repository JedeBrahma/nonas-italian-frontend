import MenuItem from "../MenuItem/MenuItem";

import "./MenuList.css";

const MenuList = ({ menuData }) => {
  return (
    <div className="MenuList">
      {menuData.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MenuList;
