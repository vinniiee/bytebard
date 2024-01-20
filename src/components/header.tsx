import { Input } from "@/components/ui/input";
import HeaderAuth from "./header-auth";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full p-4 gap-8">
      <h3 className="font-bold text-4xl">Bytebard.</h3>
      <Input placeholder="Search " className="max-w-md" />
      <HeaderAuth/>
    </div>
  );
};

export default Header;
