import React from "react";

function Button({ name, styles, href }) {
  return (
    <a style={styles} href={href}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {name}
    </a>
  );
}

export default Button;
