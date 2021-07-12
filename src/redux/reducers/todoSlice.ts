import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
    id: number;
    name: string;
}
interface TodoSliceState {
    list: Todo[];
}

const initialState: TodoSliceState = {
    list: [],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        del: (state, action: PayloadAction<number>) => {
            state.list = state.list.filter((data) => data.id !== action.payload);
        },
        add: (state, action: PayloadAction<Todo>) => {
            state.list = [...state.list, action.payload];
        },
    },
});

export const { add, del } = todoSlice.actions;

export default todoSlice.reducer;
