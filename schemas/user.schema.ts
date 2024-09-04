import { z } from "zod";

export const User = z.object({
    id: z.number({
        message: "id must be a number",
        required_error: "id is required"
    }),
    name: z.string({
        message: "name must be a string",
        required_error: "name is required"
    }),
    email: z.string({
        message: "email must be a string",
        required_error: "email is required"
    })
});