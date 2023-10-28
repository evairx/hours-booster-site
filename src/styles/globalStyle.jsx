import { Global, css } from '@emotion/react'

export default function GlobalStyles({theme}) {

  const global = css`
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

    :root {
      font-family: 'Lato', sans-serif;
      --dark:#212529;
      --light:#eee;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background-color: var(${theme});
      color:${theme === "--dark" ? "#eee": "#000"};
      
    }

    a {
      color:${theme === "--dark" ? "#eee": "#000"};
      text-decoration: none;
    }

    ::-webkit-scrollbar {
      width: 6px;
      height: 8px;
      border-radius: 4px !important;
    }
    ::-webkit-scrollbar-button {
      width: 0px;
      height: 0px;
    }
    ::-webkit-scrollbar-thumb {
      background: #afafaf;
      border: 0px none #ffffff;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #ffffff;
    }
    ::-webkit-scrollbar-thumb:active {
      background: #ffffff;
    }
    ::-webkit-scrollbar-track {
      background: none;
      border: 0px none #ffffff;
    }
    ::-webkit-scrollbar-track:hover {
        background: none;
    }
    ::-webkit-scrollbar-track:active {
      background: none;
    }
    ::-webkit-scrollbar-corner {
      background: transparent;
    }
  `;

  return (
    <Global styles={global} />
  )
}