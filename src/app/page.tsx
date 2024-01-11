import { auth } from "@/auth";
import { signin, signout } from "../actions";
import Profile from "@/components/profile";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const session = await auth();
  return (
    <div className="flex flex-col justify-start items-center py-16 w-full min-h-screen dark:bg-black">
      <div className="w-full flex justify-center items-center pt-40 mb-8">
        <svg className="w-full fill-black dark:fill-white animate-svg-text">
          <text
            // x="50%"
            textAnchor="middle"
            className="text-8xl stroke-black translate-x-1/2 dark:stroke-white font-bold"
            y="50%"
          >
            Bytebard.
          </text>
        </svg>
      </div>
      <div>{JSON.stringify(session?.user)}</div>
      <div className="flex justify-around items-center w-1/3">
        {session?.user ? (
          <form action={signout}>
            <Button type="submit">Sign Out</Button>
          </form>
        ) : (
          <form action={signin}>
            <Button type="submit">Sign In</Button>
          </form>
        )}
      </div>
      <Profile />
    </div>
  );
}
