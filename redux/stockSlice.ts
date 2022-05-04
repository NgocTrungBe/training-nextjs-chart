import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import appAPI from "@src/api/appAxios";
import { RootState } from "@src/app/store";


export interface  StockState{
    companyStockData:{[key: string]:any},
    companyData:CompanyState,
    searchData:[],
    apiFunction:string,
    pending:boolean,
    error: boolean
}

export interface  CompanyState{
    symbol:string,
    name: string,
    type:string,
    region: string,
    marketOpen: string,
    marketClose: string
    timezone: string,
    currency: string,
    matchScore: string

}


const initialState: StockState = {
    companyStockData: {
       
    },
    companyData:{
        symbol: "IBM",
		name: "International Business Machines Corporation",               
		type: "Equity",
		region: "United States",
		marketOpen: "09:30",
		marketClose: "16:00",
		timezone: "UTC-04",
		currency: "USD",
		matchScore: "0.5185"
    },
    apiFunction:'TIME_SERIES_DAILY',
    searchData:[],
    pending:false,
    error:false,
}
export const searchCompany = createAsyncThunk('stock/company', async (keywords:any) => {
    
    const url = `${process.env.STOCK_API_CONFIGURATION}function=SYMBOL_SEARCH&keywords=${keywords}&apikey=${process.env.API_KEY}`;
    try{
        const response = await appAPI.get(url);
        return response;
    }
    catch(error){
        throw error;
    }
});
export const getCompanyStockData =  createAsyncThunk('stock/companyStockData', async (option: any) =>{ 
    const url = `${process.env.STOCK_API_CONFIGURATION}function=${option.functionName}&symbol=${option.symbol}&apikey=${process.env.API_KEY}`;
    try{
        const response = await appAPI.get(url);
        return response;
    }
    catch(error){
        throw error;
    }
})

export const stockSlice = createSlice({
    name: 'stock',
    initialState,
    reducers:{
        clearSearchData: state =>{
            state.searchData = [];
        },
        setCompanyData: (state,action) => {
            state.companyData = action.payload;
        },
        setFunction:(state,action) => {
            state.apiFunction = action.payload;
        },
        setCompanyStockData:(state,action) => {
            state.companyStockData = action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(searchCompany.pending,(state) => {
             state.pending = true;
        }).addCase(searchCompany.fulfilled,(state,{payload}) => {
            state.searchData = payload.data.bestMatches;
            state.pending = false;

        }).addCase(searchCompany.rejected,(state) => {
            state.error = true;
            state.pending = false;
        });
        builder.addCase(getCompanyStockData.pending,(state) => {
            state.pending = true;
       }).addCase(getCompanyStockData.fulfilled,(state,{payload}) => {
          state.companyStockData=  payload.data;
          state.pending = false;
       }).addCase(getCompanyStockData.rejected,(state) => {
           state.error = true;
           state.pending = false;
       });
       
    }
});

export const {
    clearSearchData,
    setCompanyData,
    setFunction,
    setCompanyStockData
} = stockSlice.actions;

export const selectStock = (state: RootState) => state.stock;
export default stockSlice.reducer;