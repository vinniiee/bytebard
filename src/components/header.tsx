import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { auth } from "@/auth";
import Image from "next/image";
import { signin, signout } from "@/actions";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Header = async () => {
  const session = await auth();
  console.log(session?.user);

  const user = session?.user;
  const userDispaly = (
    <>
      <Image
        className="rounded-full"
        src={user?.image!}
        height={40}
        width={40}
        alt="user-image"
      />
      <p className="capitalize">{user?.name}</p>
    </>
  );
  return (
    <div className="flex justify-between items-center w-full p-4 gap-8">
      <h3 className="font-bold text-4xl">Bytebard.</h3>
      <Input placeholder="Search " className="max-w-md" />
      <div className="flex justify-between gap-2 items-center">
        {user ? (
          <Popover>
            <PopoverTrigger className="flex items-center gap-2 hover:bg-black/20 rounded-full pr-4 p-2">
              {userDispaly}
            </PopoverTrigger>
            <PopoverContent className="flex justify-center">
              <form className="w-full" action={signout}>
                <Button className="w-full" type="submit" variant={"ghost"}>
                  Sign Out
                </Button>
              </form>
            </PopoverContent>
          </Popover>
        ) : (
          <form action={signin} className="flex gap-4">
            <Button type="submit">Sign In</Button>
            <Button type="submit">Sign Up</Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Header;
