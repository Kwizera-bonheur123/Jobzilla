import { z } from "zod";

export const RegisterSchema = z.object({
  firstName: z.string().min(3, { message: "First name required!!" }),
  lastName: z.string().min(3, { message: "Last name is required!!" }),
  email: z.string().email({ message: "Invalid Email addres" }),
  password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/, {
    message:
      "Password must be at least 8 characters long and include a lowercase letter & uppercase letters, and a digit!!",
  }),
});

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
