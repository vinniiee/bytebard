"use server";
import * as auth from "@/auth";

export const signin = async () => {
  try{
    
  return auth.signIn('github');
  }catch(e){
    console.log(e)
  }
};
