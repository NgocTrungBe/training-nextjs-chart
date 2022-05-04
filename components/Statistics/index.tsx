import { useAppSelector } from '@src/app/hooks';
import ReactLoading from 'react-loading';
import { StatisticItem, StatisticItemTitle, StatisticItemValue, StatisticList, StatisticTitle, StatisticWrapper } from '@src/assets/styled/Statistic';
import { selectStock } from '@src/redux/stockSlice';
import React from 'react'
import { Loading } from '@src/assets/styled/Home';

const Statistic = () => {
    const {companyStockData,apiFunction,pending,error} = useAppSelector(selectStock);
   const getCurrentStockData = () =>{
    if(Object.keys(companyStockData).length>1){
        let lastRefreshed:string =  companyStockData['Meta Data']['3. Last Refreshed']!;
        let currentStockData: {[key: string]:any} ={};
          if(apiFunction === 'TIME_SERIES_DAILY' && !pending){
            currentStockData =  companyStockData['Time Series (Daily)'][lastRefreshed];
          }
          if(apiFunction === 'TIME_SERIES_WEEKLY' && !pending){
            currentStockData =  companyStockData['Weekly Time Series'][lastRefreshed];
          }
          return [{
             display:'open',
             value: currentStockData['1. open']
          },{
            display:'close',
            value: currentStockData['4. close']
         },{
            display:'low',
            value: currentStockData['3. low']
         },{
            display:'high',
            value: currentStockData['2. high']
         },];
        
       }

   }  
  return (
    <StatisticWrapper>
        <StatisticTitle>Statistic(AAPL)</StatisticTitle>
        
        <StatisticList>
            {
              error ? <div style={{height:'30px',width:'100%',display:'flex',justifyContent:'center',alignItems: 'center',fontSize:'17px',color:'red'}}>Data error...!</div> :
              pending  ? <Loading>
                           <ReactLoading type='spin' color='#3CB371' width={30} height={30}></ReactLoading> 
                       </Loading>:
             getCurrentStockData() && getCurrentStockData()?.map((item,index)=>(
              <StatisticItem key={index}>
                      <StatisticItemTitle>{item.display}</StatisticItemTitle>
                      <StatisticItemValue>{`$${item.value}`}</StatisticItemValue>
              </StatisticItem>
             )) 
            }

        </StatisticList>
    </StatisticWrapper>
  )
}

export default Statistic;