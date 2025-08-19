import React from 'react';

type HomeProps = {
  fill: string;
};

const Home = ({ fill }: HomeProps) => {
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
        d="M4 13H10C10.55 13 11 12.55 11
        12V4C11 3.45 10.55 3 10 3H4C3.45 3 3 3.45 3 4V12C3 12.55 3.45 13 4
        13ZM20 13H14C13.45 13 13 12.55 13 12V4C13 3.45 13.45 3 14 3H20C20.55 3
        21 3.45 21 4V12C21 12.55 20.55 13 20 13ZM10 21H4C3.45 21 3 20.55 3
        20V14C3 13.45 3.45 13 4 13H10C10.55 13 11 13.45 11 14V20C11 20.55 10.55
        21 10 21ZM20 21H14C13.45 21 13 20.55 13 20V14C13 13.45 13.45 13 14
        13H20C20.55 13 21 13.45 21 14V20C21 20.55 20.55 21 20 21Z"
        fill={fill}
        className="nextui-c-PJLV"
      ></path>
    </svg>
  );
};

export default Home;
