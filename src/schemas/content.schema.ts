import { z } from "zod"
import { stringField } from "./global.schema"

export const contentSchema = z.object({
    id: stringField("Id"),
    aim: stringField("Aim"),
    about: stringField("About"),
    created_at: stringField("Created At"),
    updated_at: stringField("Updated at")
})
export type TContent = z.infer<typeof contentSchema>

