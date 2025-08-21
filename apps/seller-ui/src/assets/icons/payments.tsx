import React from 'react';

type PaymentProps = {
  fill: string;
};

const Payments = ({ fill }: PaymentProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="nextui-c-PJLV nextui-c-PJLV-ibxboXQ-css"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 16V8C10 6.9 10.89 6 12 6H21V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V18H12C10.89 18 10 17.1 10 16Z"
        fill={fill}
      ></path>
    </svg>
  );
};

export default Payments;
