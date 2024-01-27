"use client";
import Image from "next/image";
import { signin, signout } from "@/actions";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { useSession } from "next-auth/react";

const HeaderAuth = () => {
  const session = useSession();
  // console.log(session.data?.user);

  const user = session.data?.user;
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
  );
};

export default HeaderAuth;
