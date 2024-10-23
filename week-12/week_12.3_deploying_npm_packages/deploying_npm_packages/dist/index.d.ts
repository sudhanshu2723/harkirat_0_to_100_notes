import { z } from 'zod';
export declare const signUpSchema: z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    firstName: string;
    lastName: string;
    email: string;
}, {
    firstName: string;
    lastName: string;
    email: string;
}>;
export type signuType = z.infer<typeof signUpSchema>;
