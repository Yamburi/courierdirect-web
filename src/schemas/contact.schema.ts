import { z } from "zod"
import { emailField, positiveNumberField, stringField } from "./global.schema"

export const contactResponseSchema = z.object({
    id: stringField("Id"),
    name: stringField("Name"),
    email: emailField("Email"),
    phone: positiveNumberField("Phone"),
    message: stringField("Message"),
    subject: stringField("Subject"),

    seen: stringField("Seen"),
    created_at: stringField("Created At"),
    updated_at: stringField("Updated at")
})
export type TContactResponse = z.infer<typeof contactResponseSchema>


export const contactSchema = z.object({
    name: stringField("Name"),
    email: emailField("Email"),
    phone: stringField("Phone No."),
    subject: stringField("Subject"),
    message: stringField("Message"),

})
export type TContact = z.infer<typeof contactSchema>