import { doGet, doPost } from "@/lib/axios";
import {
  TChatDetail,
  TChatInsertSchema,
  TChatUnseenCount,
} from "@/schemas/chat.schema";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const insertChat = createAsyncThunk<
  TChatDetail,
  { data: TChatInsertSchema; callback?: () => void }
>("insertChat", async ({ data, callback }) => {
  try {
    const response = await doPost(`/web/chat`, data);
    callback?.();
    return response;
  } catch (error) {
    throw error;
  }
});

export const getChatDetail = createAsyncThunk<TChatDetail[], { id: string }>(
  "getChatDetail",
  async ({ id }) => {
    try {
      const response = await doGet(`/web/chat/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  }
);
export const getChatNewMessage = createAsyncThunk<
  TChatDetail[],
  { id: string }
>("getChatMessage", async ({ id }) => {
  try {
    const response = await doGet(
      `/web/chat/new-message/${id}`
      //    {
      //   timeout: 15 * 60 * 1000,
      // }
    );
    return response;
  } catch (error) {
    throw error;
  }
});

export const getChatUnseenCount = createAsyncThunk<
  TChatUnseenCount,
  { id: string }
>("getChatUnseenCount", async ({ id }) => {
  try {
    const response = await doGet(`/web/chat/unseen/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
});

export const getChatNewUnseenCount = createAsyncThunk<
  TChatUnseenCount,
  { id: string; signal?: AbortSignal }
>("getChatNewUnseenCount", async ({ id, signal }) => {
  try {
    const response = await doGet(`/web/chat/new-unseen/${id}`, { signal });
    return response;
  } catch (error) {
    throw error;
  }
});

export const replyToChat = createAsyncThunk<
  TChatDetail,
  {
    userId: string;
    chatId: string;
    data: FormData;
    callback?: () => void;
  }
>("replyToChat", async ({ userId, chatId, data, callback }) => {
  try {
    const response = await doPost(`/web/chat-reply/${userId}/${chatId}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    callback?.();
    return response;
  } catch (error) {
    throw error;
  }
});
