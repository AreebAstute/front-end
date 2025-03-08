import React from "react";
import ListItem from "./ListItem";

const CustomList = ({ list }) => {
  return (
    <>
      <ul className="space-y-1 md:space-y-3">
        {list.map((i, index) => {
          return <ListItem key={index} content={i} />;
        })}
      </ul>
    </>
  );
};

export default CustomList;
