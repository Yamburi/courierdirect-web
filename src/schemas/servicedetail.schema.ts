import { z } from "zod"
import { stringField } from "./global.schema"

export const serviceDetailSchema = z.object({
    id: stringField("Id"),
    name: stringField("Name"),
    icon: stringField("Icon"),
    description: stringField("Description"),
    created_at: stringField("Created At"),
    updated_at: stringField("Updated at")
})
export type TServiceDetail = z.infer<typeof serviceDetailSchema>

