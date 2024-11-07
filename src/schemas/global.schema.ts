import { z, ZodType } from "zod"

export const positiveNumberField = (val: string, min: number = 0) =>
    z
        .number({
            required_error: `${val} is required`,
            invalid_type_error: `Provide valid type`,
        })
        .min(min, { message: "Must be a positive number" });

export const percentageField = (val: string) => {
    z.number({
        required_error: `${val} is required`,
        invalid_type_error: `Provide valid type`
    }).min(0, { message: "Must be a greater than or equals to 0" })
        .max(100, { message: "Must be a less than or equals to 100" });
}

export const emailField = (val: string) =>
    z
        .string({
            required_error: `${val} is required`,
            invalid_type_error: "Provide valid type",
        })
        .min(1, { message: `${val} is required` })
        .email("Invalid email address");

export const stringField = (val: string, min: number = 1) =>
    z
        .string({
            required_error: `${val} is required`,
            invalid_type_error: "Provide valid type",
        })
        .min(min, { message: `${val} is required` });

export const booleanField = (val: string) =>
    z.boolean({
        required_error: `${val} is required`,
        invalid_type_error: "Provide valid type",
    });

export const enumField = (val: any, name: string) =>
    z.enum(val, {
        required_error: `${name} is required`,
        invalid_type_error: "Provide valid type",
    });

export const optionalStringField = z
    .string({ invalid_type_error: "Provide valid type" })
    .optional()
    .nullable();
export const optionalNumberField = z
    .number({ invalid_type_error: "Provide valid type" })
    .optional()
    .nullable();
export const optionalBooleanField = z
    .boolean({ invalid_type_error: "Provide valid type" })
    .optional()
    .nullable();

export type GetInferedType<T extends ZodType> = z.infer<T>;