import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { RootState } from '../../app/store';
import { CountriesState, CountriesT } from '../../types/Countries';

const initialState: CountriesState = {
    countries: [],
    favoriteCountries: [],
    favorites: [],
    isFavorite: false,
    isLoading: false,
    error: false,
    message: ''
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
    reducers: {
        region: (state, action) => {
            state.countries = state.countries.filter(country => country.region === action.payload);
        },
        search: (state, action) => {
            state.countries = state.countries.filter(country => country.name.common.toLowerCase().includes(action.payload.toLowerCase()));
        },
        favorite: (state, action) => {
            state.isFavorite = false;
            state.favoriteCountries.forEach(country => {
                if (country.name.common === action.payload) {
                    state.isFavorite = true;
                }
            });

            if (state.isFavorite) {
                state.favoriteCountries = state.favoriteCountries.filter(country => country.name.common !== action.payload);
                return;
            }

            state.countries.forEach(country => {
                if (country.name.common === action.payload) {
                    state.favoriteCountries.push(country);
                }
            });
        },
        setFavorites : (state, action) => {
            if (!state.favorites.includes(action.payload)) {
                state.favorites.push(action.payload);
              }
              else {
                state.favorites = state.favorites.filter(name => name !== action.payload);
              }
        }
    },
    extraReducers: builder => {
        // builder.addCase(getAllCountries.pending, (state, action) => {
        //     state.countries = action.payload;
        // });
        builder.addCase(getAllCountries.fulfilled, (state, action) => {
            state.countries = action.payload;
        });
        // builder.addCase(getAllCountries.rejected, (state, action) => {
        //     state.countries = action.payload;
        // });
    }
});

export const {region, search, favorite, setFavorites} = countriesSlice.actions;
export const selectCountries = (state: RootState) => state.countriesR;
export default countriesSlice.reducer;