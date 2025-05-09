import "./src/styles/global.css";
import React from "react";
import CustomCursor from "./src/components/CustomCursor"
import { AnimatePresence } from "framer-motion";

export const wrapRootElement = ({ element }) => (
  <>
    <CustomCursor />
    {element}
  </>
)