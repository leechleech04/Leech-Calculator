import { configureStore, createSlice } from '@reduxjs/toolkit';

const formulaAndAnswer = createSlice({
  name: 'formulaAndAnswer',
  initialState: {
    formula: '',
    answer: 0,
  },
  reducers: {
    pressClear: (state) => {
      state.formula = '';
      state.answer = 0;
    },
    pressNumber: (state, action) => {
      if (state.answer === 0) {
        state.answer = Number(action.payload);
      } else {
        state.answer = Number(state.answer.toString() + action.payload);
      }
    },
    pressClearEntry: (state) => {
      if (state.formula.endsWith('=')) {
        state.formula = '';
        state.answer = 0;
      }
      state.formula = state.formula.replace(new RegExp(`${state.answer}$`), '');
      state.answer = 0;
    },
    pressBackSpace: (state) => {
      if (state.answer !== 0) {
        state.answer = Number(state.answer.toString().slice(0, -1));
      }
    },
    pressOperator: (state, action) => {
      if (state.answer.toString().endsWith('.')) {
        state.answer = Number(state.answer.toString().slice(0, -1));
        console.log(state.answer);
      }
      if (isNaN(Number(state.formula.slice(-1)))) {
        const match = state.formula.match(/^-?\d*\.?\d+/);
        if (match) {
          const firstNumber = match[0];
          switch (state.formula.slice(-1)) {
            case '%':
              state.formula =
                (Number(firstNumber) % state.answer).toString() +
                action.payload;
              state.answer = Number(state.formula);
              break;
            case '÷':
              state.formula =
                (Number(firstNumber) / state.answer).toString() +
                action.payload;
              state.answer = Number(state.formula);
              break;
            case '×':
              state.formula =
                (Number(firstNumber) * state.answer).toString() +
                action.payload;
              state.answer = Number(state.formula);
              break;
            case '-':
              state.formula =
                (Number(firstNumber) - state.answer).toString() +
                action.payload;
              state.answer = Number(state.formula);
              break;
            case '+':
              state.formula =
                (Number(firstNumber) + state.answer).toString() +
                action.payload;
              state.answer = Number(state.formula);
              break;
          }
        }
      } else {
        state.formula += state.answer + action.payload;
      }
      state.answer = 0;
    },
    pressSpecialOperator: (state, action) => {
      switch (action.payload) {
        case '1/':
          state.answer = 1 / state.answer;
          break;
        case '²':
          state.answer = Math.pow(state.answer, 2);
          break;
        case '²√':
          state.answer = Math.sqrt(state.answer);
          break;
        case '±':
          state.answer = state.answer * -1;
          break;
      }
    },
    pressDot: (state) => {
      if (!state.answer.toString().includes('.')) {
        state.answer = state.answer.toString() + '.';
      }
    },
    pressEqual: (state) => {
      const match = state.formula.match(/^-?\d*\.?\d+/);
      const lastNumber = state.answer;
      if (match) {
        const firstNumber = match[0];
        switch (state.formula.slice(-1)) {
          case '%':
            state.answer = Number(firstNumber) % state.answer;
            break;
          case '÷':
            state.answer = Number(firstNumber) / state.answer;
            break;
          case '×':
            state.answer = Number(firstNumber) * state.answer;
            break;
          case '-':
            state.answer = Number(firstNumber) - state.answer;
            break;
          case '+':
            state.answer = Number(firstNumber) + state.answer;
            break;
          default:
            state.answer = Number(firstNumber);
            break;
        }
      }
      state.formula += lastNumber.toString() + '=';
    },
  },
});

export const {
  pressNumber,
  pressClear,
  pressClearEntry,
  pressBackSpace,
  pressOperator,
  pressSpecialOperator,
  pressDot,
  pressEqual,
} = formulaAndAnswer.actions;

const store = configureStore({
  reducer: {
    formulaAndAnswer: formulaAndAnswer.reducer,
  },
});

export default store;
