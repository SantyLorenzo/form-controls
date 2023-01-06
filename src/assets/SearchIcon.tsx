import * as React from "react";
import { SVGProps } from "react";

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.65 14.3a6.65 6.65 0 1 0 0-13.3 6.65 6.65 0 0 0 0 13.3ZM15 15l-1.4-1.4"
      stroke="#8D9599"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SearchIcon;
