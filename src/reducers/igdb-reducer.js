import {createSlice} from "@reduxjs/toolkit";
import {findGameBySearchTerm} from "../services/igdb-service";
import {findGameByImdbIdThunk, findGameBySearchTermThunk, findGameRandomThunk} from "../services/igdb-thunks";

const initialState = {
    games: [],
    random: [],
    loading: false,
    details: {}
}

const igdbReducer = createSlice({
    name: 'igdb',
    initialState,
    extraReducers: {
        [findGameBySearchTermThunk.pending]: (state) => {
            state.games = []
            state.loading = false
        },
        [findGameBySearchTermThunk.fulfilled]: (state, action) => {
            state.games = action.payload
            state.loading = true
        },
        [findGameBySearchTermThunk.rejected]: (state) => {
            state.loading = false
        },
        [findGameByImdbIdThunk.fulfilled]: (state, action) => {
            state.details = action.payload
        },
        [findGameRandomThunk.fulfilled]: (state, action) => {
            state.random = action.payload
        },
    }
})

export default igdbReducer.reducer