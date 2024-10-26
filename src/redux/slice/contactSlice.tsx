import { createSlice } from "@reduxjs/toolkit";
import { TContactResponse } from "@/schemas/contact.schema";
import { contactUser } from "../thunks/contactThunk";

export type ContactState = {
  loading: boolean;
  error: string | null;
  data: TContactResponse | null;
};

const initialState: ContactState = {
  error: null,
  loading: false,
  data: null,
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    resetContactData: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(contactUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(contactUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(contactUser.rejected, (state) => {
        state.error = "Failed to contact user";
        state.loading = false;
        state.data = null;
      });
  },
});

export const { resetContactData } = contactSlice.actions;
export default contactSlice.reducer;
