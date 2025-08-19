import React from 'react';

type AccountsIconProps = {
  fill: string;
};

const AccountsIcon = ({ fill }: AccountsIconProps) => {
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
        d="M3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3H5C3.89 3 3 3.89 3 5ZM12 7C13.66 7 15 8.34 15 10C15 11.66 13.66 13 12 13C10.34 13 9 11.66 9 10C9 8.34 10.34 7 12 7ZM6 17C6 15.34 9.33 14 12 14C14.67 14 18 15.34 18 17V18H6V17Z"
        fill={fill}
      ></path>
    </svg>
  );
};

export default AccountsIcon;
