import { doGet } from "@/lib/axios";
import { TTrack } from "@/schemas/trackSchema";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const trackQuote = createAsyncThunk<TTrack, { id: string }>(
  "trackQuote",
  async ({ id }) => {
    try {
      const response = await doGet(`/web/track/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  }
);
