import { useEffect, useState } from "react";

export const useGlobalVariables = () => {
  const [activeNavItem, setClassActive] = useState<string>("Home");
  return { 
    activeNavItem, setClassActive,
  };
};