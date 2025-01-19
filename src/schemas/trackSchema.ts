import { z } from "zod"
import { stringField } from "./global.schema"

export const deliverySchema = z.object({
    id: stringField("Id"),
    quote_id: stringField("Quote Id"),
    status: stringField("Status"),
    created_at: stringField("Created Date"),
    updated_at: stringField("Updated Date")
})

export const historySchema = z.object({
    id: stringField("Id"),
    delivery_id: stringField("Delivery Id"),
    admin_id: stringField("Admin Id"),
    status: stringField("Status"),
    created_at: stringField("Created Date"),
    updated_at: stringField("Updated Date"),
})
export const trackSchema = z.object({
    delivery: deliverySchema,
    history: z.array(historySchema)

})
export type TTrack = z.infer<typeof trackSchema>
export type TTrackHistory = z.infer<typeof historySchema>

