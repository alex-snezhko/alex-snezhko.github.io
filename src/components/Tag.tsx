import React from "react";

import "../styles/Tag.scss";

interface Props {
  img: string;
  name: string;
  color: string;
}

const Tag = ({ img, name, color }: Props) => (
  <li className="tag" style={{ backgroundColor: color }}>
    <img src={img} alt={name} />
    <span>
      {name}
    </span>
  </li>
);

export default Tag;
