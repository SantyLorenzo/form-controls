import * as React from "react";
import { SVGProps } from "react";

const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 1a1 1 0 0 0-2 0v5H1a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0V8h5a1 1 0 1 0 0-2H8V1Z"
      fill="#0C0C0C"
    />
  </svg>
);

export default PlusIcon;
