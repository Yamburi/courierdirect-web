import { createSlice } from "@reduxjs/toolkit";
import {
  getChatDetail,
  getChatUnseenCount,
  insertChat,
  replyToChat,
} from "../thunks/chatThunk";
import { TChatDetail, TChatUnseenCount } from "@/schemas/chat.schema";

export type ChatState = {
  loading: boolean;
  error: string | null;
  unseenCount: TChatUnseenCount | null;
  insert: TChatDetail | null;
  data: TChatDetail[];
};

const initialState: ChatState = {
  error: null,
  loading: false,
  insert: null,
  data: [],
  unseenCount: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    resetChatInsertData: (state) => {
      state.insert = null;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(insertChat.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(insertChat.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.insert = action.payload;
      })
      .addCase(insertChat.rejected, (state) => {
        state.error = "Failed to chat user";
        state.loading = false;
        state.insert = null;
      })

      .addCase(getChatDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getChatDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(getChatDetail.rejected, (state) => {
        state.error = "Failed to chat user";
        state.loading = false;
        state.data = [];
      })
      .addCase(replyToChat.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(replyToChat.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [...state.data, action.payload];
        state.error = null;
      })
      .addCase(replyToChat.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to reply chat";
      })
      .addCase(getChatUnseenCount.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getChatUnseenCount.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.unseenCount = action.payload;
      })
      .addCase(getChatUnseenCount.rejected, (state) => {
        state.error = "Failed to chat user";
        state.loading = false;
        state.unseenCount = null;
      });
  },
});

export const { resetChatInsertData } = chatSlice.actions;
export default chatSlice.reducer;
