import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  if (width < 650) {
    return "sm";
  }
  return "laptop";
}

export default function useWindowDimensions() {
  const [windowType, setWindowType] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowType(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowType;
}
