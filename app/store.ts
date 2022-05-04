import {
  Action,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import stockReducer from '@src/redux/stockSlice';
import newsReducer from '@src/redux/newsSlice';





export const store = configureStore({
  reducer: {
    stock: stockReducer,
    news: newsReducer,
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck:false})
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;