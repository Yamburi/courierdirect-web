import { z } from "zod"
import { stringField } from "./global.schema"

export const faqSchema = z.object({
    id: stringField("Id"),
    question: stringField("Question"),
    answer: stringField("Answer"),
    created_at: stringField("Created At"),
    updated_at: stringField("Updated at")
})
export type TFaq = z.infer<typeof faqSchema>

