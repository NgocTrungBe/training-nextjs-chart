import appAPI from '@src/api/appAxios';
import { AxiosResponse } from 'axios';

export const stockAPI = {
    // login: async (email: string, password: string)=> {
    //   try {
    //     const response: AxiosResponse = await appAPI.post('/login', {
    //       user: {
    //         email,
    //         password
    //       }
    //     });
    //     return response;
    //   }
    //   catch (error: any) {
    //     return error.response;
    //   }
    // },
    search: async (keywords: string) => {
        try{
            const response: AxiosResponse = await appAPI.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keywords}&apikey=ZRM1LRJP7SURBM3Z`);
            return response;
        }
        catch(error){
            throw error;
        }
    }
}