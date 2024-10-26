import { createSlice } from "@reduxjs/toolkit";
import { trackQuote } from "../thunks/trackThunk";

export type TrackState = {
  loading: boolean;
  error: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any | null;
};

const initialState: TrackState = {
  error: null,
  loading: false,
  data: null,
};

const trackSlice = createSlice({
  name: "track",
  initialState,
  reducers: {
    resetTrackData: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(trackQuote.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(trackQuote.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(trackQuote.rejected, (state) => {
        state.error = "Failed to track user";
        state.loading = false;
        state.data = null;
      });
  },
});

export const { resetTrackData } = trackSlice.actions;
export default trackSlice.reducer;
