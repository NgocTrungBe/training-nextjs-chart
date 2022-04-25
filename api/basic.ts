import appAPI from '@src/api/appAxios';
import { AxiosResponse } from 'axios';

export const basicAPI = {
  login: async (email: string, password: string)=> {
    try {
      const response: AxiosResponse = await appAPI.post('/login', {
        user: {
          email,
          password
        }
      });
      return response;
    }
    catch (error: any) {
      return error.response;
    }
  }
}


