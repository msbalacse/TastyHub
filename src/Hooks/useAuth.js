import { useContext } from "react";
import { GoogleContext } from "../context/googleContext";

export const useAuth = () => {
  return useContext(GoogleContext);
};
