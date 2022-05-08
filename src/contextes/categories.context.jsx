import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../services/firebase/firebase.service";
// import { addCollectionAndDocuments } from "../services/firebase/firebase.service.js";
// import SHOP_DATA  from '../shop-data';

export const CategoriesContext = createContext({
  categoriesMap: [],
});
export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const value = { categoriesMap };
  useEffect(() => {
    const getCategories = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoriesMap);
    };
    getCategories();
  }, []);
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
