import { doPost } from "@/lib/axios";
import { TContact, TContactResponse } from "@/schemas/contact.schema";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const contactUser = createAsyncThunk<
  TContactResponse,
  { data: TContact }
>("contactUser", async ({ data }) => {
  try {
    const response = await doPost(`/web/contact`, data);
    return response;
  } catch (error) {
    throw error;
  }
});
