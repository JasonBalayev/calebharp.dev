import "./src/styles/global.css";
import React from "react"
import CustomCursor from "./src/components/CustomCursor"

export const wrapRootElement = ({ element }) => (
  <>
    <CustomCursor />
    {element}
  </>
)
