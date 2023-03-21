import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1/all';

export const getAllCountries = createAsyncThunk(
    'countries/getAllCountries',
    async () => {
        const response = await axios.get(BASE_URL);
        return response.data;
    }
);