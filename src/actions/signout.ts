"use server";
import * as auth from "@/auth";


export const signout = async () => {
  try{
    
  return auth.signOut();
  }catch(e){
    console.log(e)
  }
};
