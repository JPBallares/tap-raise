import {PayloadAction, Slice} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

export type ConfigState = {
  logoUrl: string;
  backgroundColor: string;
  foregroundColor: string;
  donationText: string;
  amounts: Array<number>;
  fundraiserId: string;
  stripeKey: string;
  stripeSecret: string;
};

const initialState: ConfigState = {
  logoUrl: '',
  backgroundColor: '',
  foregroundColor: '',
  donationText: '',
  amounts: [5],
  fundraiserId: '',
  stripeKey: '',
  stripeSecret: '',
};

export const configSlice: Slice<ConfigState> = createSlice({
  name: 'config',
  initialState,
  reducers: {
    clearConfig: () => initialState,
    setConfig: (state: ConfigState, {payload}: PayloadAction<ConfigState>) => ({
      ...state,
      ...payload,
    }),
  },
});

export const {clearConfig, setConfig} = configSlice.actions;

export default configSlice.reducer;
