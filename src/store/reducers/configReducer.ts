import {PayloadAction, Slice} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

type AmountsType = [number, number, number, number]

export type ConfigState = {
  logoUrl: string;
  backgroundColor: string;
  foregroundColor: string;
  donationText: string;
  amounts: AmountsType;
  fundraiserId: string;
  stripeKey: string;
  stripeSecret: string;
};

const initialState: ConfigState = {
  logoUrl: '',
  backgroundColor: '',
  foregroundColor: '',
  donationText: '',
  amounts: [5, 0, 0, 0],
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
    setAmount: (
      state: ConfigState,
      {payload}: PayloadAction<{amount: number; index: number}>,
    ) => {
      const amounts: AmountsType = [...state.amounts];
      amounts[payload.index] = payload.amount;
      return {
        ...state,
        amounts,
      };
    },
  },
});

export const {clearConfig, setConfig, setAmount} = configSlice.actions;

export default configSlice.reducer;
