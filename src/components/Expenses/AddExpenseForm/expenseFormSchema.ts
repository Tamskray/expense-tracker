import { z } from "zod";

export const expenseFormSchema = z.object({
  description: z.string().min(1, "Required"),
  amount: z.number().positive("Number must be positive"),
  category: z.string().min(1, "Required category"),
  transaction_type: z.enum(["income", "expense"]),
});

export type ExpenseFormValues = z.infer<typeof expenseFormSchema>;
