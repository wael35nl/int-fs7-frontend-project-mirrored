import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';
import { getAllCountries } from '../../services';
import { CountriesState } from '../../types/Countries';

const initialState: CountriesState = {
    countries: [],
    regionSearch: [],
    countrySearch: [],
    favoriteCountries: [],
    isFavorite: false,
    isLoading: false,
    isError: false,
    message: ''
}

export const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        region: (state, action) => {
            state.regionSearch = state.countries.filter(country => country.region === action.payload);
        },

        search: (state, action) => {
            if (state.regionSearch.length > 0) {
                state.countrySearch = state.regionSearch.filter(country => country.name.common.toLowerCase().includes(action.payload.toLowerCase()));
            } else {
                state.countrySearch = state.countries.filter(country => country.name.common.toLowerCase().includes(action.payload.toLowerCase()));
            }
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
    },

    extraReducers: builder => {
        builder.addCase(getAllCountries.pending, (state) => {
            state.isLoading = true;
            state.message = 'Loading...'
        });
        builder.addCase(getAllCountries.fulfilled, (state, action) => {
            state.isLoading = false;
            state.countries = action.payload;
        });
        builder.addCase(getAllCountries.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.error.message ? action.error.message = 'Something went wrong!!' : 'Error..';
            state.countries = [];
        });
    }
});

export const {region, search, favorite} = countriesSlice.actions;
export const selectCountries = (state: RootState) => state.countriesR;
export default countriesSlice.reducer;