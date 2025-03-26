import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  objects: [], // Исправлено на objects
};

const objectSlice = createSlice({
  name: 'object',
  initialState,
  reducers: {
    addObject: (state, action) => {
      state.objects.push({ // Теперь state.objects, а не state.object
        title: '',
        description: '',
        source: '',
        selectedCategory: 'Planet',
        imageUri: null,
        ...action.payload,
      });
    },
    updateObject: (state, action) => {
      const { index, updates } = action.payload;
      if (state.objects[index]) {
        state.objects[index] = { ...state.objects[index], ...updates };
      }
    },
    removeObject: (state, action) => {
      state.objects.splice(action.payload, 1);
    },
    resetObjects: () => initialState,
  },
});

export const { addObject, updateObject, removeObject, resetObjects } = objectSlice.actions;
export default objectSlice.reducer;
