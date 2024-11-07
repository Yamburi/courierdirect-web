import { doPost } from "@/lib/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const trackQuote = createAsyncThunk<any, { data: { trackNo: string } }>(
  "trackQuote",
  async ({ data }) => {
    try {
      const response = await doPost(`/web/track`, data);
      return response;
    } catch (error) {
      throw error;
    }
  }
);
