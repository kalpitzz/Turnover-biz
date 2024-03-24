import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { createUser, userTokenGenerator, validateUser } from "~/server/middleware/auth";

export const usersRouter = createTRPCRouter({
    signupUser: publicProcedure
        .input(z.object({ name: z.string(), email: z.string(), password: z.string() }))
        .use(createUser)
        .use(userTokenGenerator)
        .query(({ input }) => {
            return {
                status: `will create user `,
            };
        }),

    loginUser: publicProcedure
        .input(z.object({ email: z.string(), password: z.string() }))
        // .use(validateUser)
        .use(userTokenGenerator)
        .query(({ input }) => {
            return {
                status: `will create user `,
            };
        }),
    getUser: publicProcedure
        .input(z.object({ name: z.string() }))
        .query(({ input }) => {
            return {
                greeting: `Hello ${input} user`,
            };
        }),

});
