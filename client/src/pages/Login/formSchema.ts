import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1, "Too short name"),
  email: z.string().email("Invalid email"),
  password: z.string().min(4, "Too short password"),
});

export type FormValues = z.infer<typeof formSchema>;
