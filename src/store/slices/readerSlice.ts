import {PayloadAction, Slice} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

interface AuhtorizedLocation {
  [key: string]: any;
}

export type ReaderState = {
  authorizedLocation: AuhtorizedLocation | null;
};

const initialState: ReaderState = {
  authorizedLocation: null,
};

export const readerSlice: Slice<ReaderState> = createSlice({
  name: 'reader',
  initialState,
  reducers: {
    clearConfig: () => initialState,
    setAuthorizedLocation: (
      state: ReaderState,
      {payload}: PayloadAction<ReaderState>,
    ) => ({
      ...state,
      ...payload,
    }),
  },
});

export const {clearConfig, setAuthorizedLocation} = readerSlice.actions;

export default readerSlice.reducer;
