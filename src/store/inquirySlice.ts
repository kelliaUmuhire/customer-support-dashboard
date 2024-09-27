import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Inquiry } from "../util/api";

interface InquiryState {
  inquiries: Inquiry[];
}

const initialState: InquiryState = {
  inquiries: [],
};

const inquirySlice = createSlice({
  name: "inquiry",
  initialState,
  reducers: {
    setInquiries: (state, action: PayloadAction<Inquiry[]>) => {
      state.inquiries = [...action.payload];
    },
    addResponse: (
      state,
      action: PayloadAction<{ inquiryId: string; message: string }>
    ) => {
      const { inquiryId, message } = action.payload;
      const inquiry = state.inquiries.find((inq) => inq.id === inquiryId);
      if (inquiry) {
        inquiry.details.responses.push({
          responseDate: new Date().toISOString(),
          message,
        });
      }
    },
  },
});

export const { setInquiries, addResponse } = inquirySlice.actions;
export default inquirySlice.reducer;
