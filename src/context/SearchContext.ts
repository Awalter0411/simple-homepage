import { createContext } from "react";

const SearchContext = createContext<any>({
  currentEngine: 'Bing',
  setCurrentEngine: '',
})

export default SearchContext