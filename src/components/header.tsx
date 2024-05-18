import HeaderAuth from "./header-auth";
import SearchBar from "./search-bar/search-bar";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full p-4 gap-8">
      <h3 className="font-bold text-4xl">Bytebard.</h3>
      <SearchBar/>
      <HeaderAuth/>
    </div>
  );
};

export default Header;
