import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import appAPI from "@src/api/appAxios";
import { RootState } from "@src/app/store";


export interface  NewsState{
    newsData: Array<NewsItem>;
    pending:boolean,
    error: boolean
}

export interface  NewsItem{
    title:string,
    author: string,
    urlToImage: string,
}


const initialState: NewsState = {
    newsData:[],
    pending:false,
    error:false,
}

export const getNews =  createAsyncThunk('news/newsData', async () =>{ 
    const url = `${process.env.NEWS_API_CONFIGURATION}${process.env.NEWS_API_KEY}`;
    try{
        const response = await appAPI.get(url);
        return response;
    }
    catch(error){
        throw error;
    }
})

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers:{
      
    },
    extraReducers: builder => {
        builder.addCase(getNews.pending,(state) => {
             state.pending = true;
        }).addCase(getNews.fulfilled,(state,{payload}) => {
            state.newsData = payload.data.articles;
            state.pending = false;

        }).addCase(getNews.rejected,(state) => {
            state.error = true;
            state.pending = false;
        });
      
       
    }
});

export const selectNews = (state: RootState) => state.news;
export default newsSlice.reducer;