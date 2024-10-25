import { z } from "zod";
import { emailField, positiveNumberField, stringField } from "./global.schema";

export const chatInsertSchema = z.object({
    user_id: stringField("User Id"),
    name: stringField("Name"),
    email: emailField("Email"),
    phone: stringField("Phone"),
    message: stringField("Question"),
})

export type TChatInsertSchema = z.infer<typeof chatInsertSchema>;


export const chatImageSchema = z.object({
    id: stringField("Id"),
    chat_id: stringField("Chat Id"),
    chat_message_id: stringField("Chat Message Id"),
    image: stringField("Image"),
    created_at: stringField("Created Date"),
    updated_at: stringField("Updated Date")

})


export const chatDetailSchema = z.object({
    id: stringField("Id"),
    user_id: stringField("User Id").optional().nullable(),
    admin_id: stringField("Admin Id").optional().nullable(),
    chat_id: stringField("Chat Id"),
    message: stringField("Message"),
    seen_by_user: positiveNumberField("Seen By User"),
    seen_by_admin: positiveNumberField("Seen By Admin"),
    images: z.array(chatImageSchema),
    created_at: stringField("Created Date"),
    updated_at: stringField("Updated Date")
})

export type TChatDetail = z.infer<typeof chatDetailSchema>;

export const chatReplySchema = z.object({
    message: stringField("Message"),
})

export type TChatReplySchema = z.infer<typeof chatReplySchema>;

export const chatUnseenCountSchema = z.object({
    count: positiveNumberField("Unseen Count"),

})

export type TChatUnseenCount = z.infer<typeof chatUnseenCountSchema>;