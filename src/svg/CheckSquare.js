import * as React from "react"

function CheckSquare(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30px"
      height="30px"
      stroke="lightgreen" 
      fill="lightgreen"
      className="prefix__bi prefix__bi-check-square"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M14 1a1 1 0 011 1v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1h12zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z" />
      <path d="M10.97 4.97a.75.75 0 011.071 1.05l-3.992 4.99a.75.75 0 01-1.08.02L4.324 8.384a.75.75 0 111.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 01.02-.022z" />
    </svg>
  )
}

export default CheckSquare
