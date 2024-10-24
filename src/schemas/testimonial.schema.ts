import { z } from "zod"
import { positiveNumberField, stringField } from "./global.schema"

export const testimonialSchema = z.object({
    id: stringField("Id"),
    name: stringField("Name"),
    image: stringField("image"),
    designation: stringField("designation"),
    message: stringField("Message"),
rating:positiveNumberField("Rating"),
    created_at: stringField("Created At"),
    updated_at: stringField("Updated at")
})
export type TTestimonial = z.infer<typeof testimonialSchema>