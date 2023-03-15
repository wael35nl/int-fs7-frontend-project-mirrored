import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { RootState } from '../../app/store';
import { CountriesState, CountriesT } from '../../types/Countries';

const initialState: CountriesState = {
    countries: [],
}

export const getAllCountries = createAsyncThunk(
    'countries/getAllCountries',
    async () => {
            const response = await axios.get('https://restcountries.com/v3.1/all');
            const data: CountriesT[] = await response.data;
            return data;
});

export const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getAllCountries.fulfilled, (state, action) => {
            state.countries = action.payload;
        })
    }
});

export const selectCountries = (state: RootState) => state.countriesR;
export default countriesSlice.reducer;