"use client";
import { useSession } from "next-auth/react";
import React from "react";

const Profile = () => {
  const session = useSession();
  return <div>From Client: {session.data?.user? "Signed In":"Signed Out"}</div>
};

export default Profile;
