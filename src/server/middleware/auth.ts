import { TRPCError } from "@trpc/server";
import { tokenGenerator } from "~/utils/tokenManager";

export const userTokenGenerator = async (opts: any) => {
    console.log("creating a jwt token");
    return opts.next()
}


export const validateUser = async (opts: any) => {
    console.log("checking if user exist in DB");
    return opts.next()
}

export const createUser = async (opts: any) => {
    console.log("Creating a New User in Db");
    return opts.next()
}