import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid Email address!!" }),
  password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/, {
    message:
      "Password must be at least 8 characters long and include a lowercase letter & uppercase letters, and a digit!!",
  }),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
