import { createSlice } from "@reduxjs/toolkit";
import {
  getChatDetail,
  getChatNewMessage,
  getChatNewUnseenCount,
  getChatUnseenCount,
  insertChat,
  replyToChat,
} from "../thunks/chatThunk";
import { TChatDetail, TChatUnseenCount } from "@/schemas/chat.schema";

export type ChatState = {
  loading: boolean;
  error: string | null;
  unseenCount: TChatUnseenCount;
  insert: TChatDetail | null;
  data: TChatDetail[];
};

const initialState: ChatState = {
  error: null,
  loading: false,
  insert: null,
  data: [],
  unseenCount: { count: 0 },
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    resetChatInsertData: (state) => {
      state.insert = null;
    },
    updateChatMessage: (state, action) => {
      state.data = [...action.payload, ...state.data];
    },
    updateChatUnseenCount: (state, action) => {
      state.unseenCount = state?.unseenCount?.count || 0 + action.payload.count;
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
        // state.loading = true;
        state.error = null;
      })
      .addCase(getChatDetail.fulfilled, (state, action) => {
        // state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(getChatDetail.rejected, (state) => {
        state.error = "Failed to chat user";
        // state.loading = false;
        state.data = [];
      })
      .addCase(replyToChat.pending, (state) => {
        // state.loading = true;
        state.error = null;
      })
      .addCase(replyToChat.fulfilled, (state, action) => {
        // state.loading = false;
        state.data = [action.payload, ...state.data];
        state.error = null;
      })
      .addCase(replyToChat.rejected, (state) => {
        // state.loading = false;
        state.error = "Failed to reply chat";
      })
      .addCase(getChatUnseenCount.pending, (state) => {
        // state.loading = true;
        state.error = null;
      })
      .addCase(getChatUnseenCount.fulfilled, (state, action) => {
        // state.loading = false;
        state.error = null;
        state.unseenCount = action.payload;
      })
      .addCase(getChatUnseenCount.rejected, (state) => {
        state.error = "Failed to chat user";
        // state.loading = false;
        state.unseenCount = { count: 0 };
      })
      .addCase(getChatNewUnseenCount.pending, (state) => {
        // state.loading = true;
        state.error = null;
      })
      .addCase(getChatNewUnseenCount.fulfilled, (state) => {
        // state.loading = false;
        state.error = null;
        // state.unseenCount = action.payload;
      })
      .addCase(getChatNewUnseenCount.rejected, (state) => {
        state.error = "Failed to chat user";
        // state.loading = false;
        // state.unseenCount = { count: 0 };
      })
      .addCase(getChatNewMessage.pending, (state) => {
        // state.loading = true;
        state.error = null;
      })
      .addCase(getChatNewMessage.fulfilled, (state) => {
        // state.loading = false;
        state.error = null;
        // state.detail = [...action.payload, ...state.detail];
      })
      .addCase(getChatNewMessage.rejected, (state) => {
        state.error = "Failed to chat user";
        // state.loading = false;
      });
  },
});

export const { resetChatInsertData, updateChatMessage, updateChatUnseenCount } =
  chatSlice.actions;
export default chatSlice.reducer;
