import { z } from "zod"
import { stringField } from "./global.schema"

export const whychooseusSchema = z.object({
    id: stringField("Id"),
    name: stringField("Name"),
    image: stringField("image"),
    description: stringField("Description"),
    created_at: stringField("Created At"),
    updated_at: stringField("Updated at")
})
export type TWhyChooseUs = z.infer<typeof whychooseusSchema>

