import { z } from "zod"
import { stringField } from "./global.schema"

export const sliderSchema = z.object({
    id: stringField("Id"),
    link: stringField("Link"),
    image: stringField("Image"),
    created_at: stringField("Created At"),
    updated_at: stringField("Updated at")
})
export type TSlider = z.infer<typeof sliderSchema>