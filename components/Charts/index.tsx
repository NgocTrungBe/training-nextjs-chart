import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { ChartInfo, ChartWrapper, CompanyName, ComparePrice, DownIcon, Filter, FilterItem, HighPrice, UpIcon } from '@src/assets/styled/Chart';
import {  LineChart } from './LineChart';

import { useAppDispatch, useAppSelector } from '@src/app/hooks';
import { getCompanyStockData, selectStock, setFunction } from '@src/redux/stockSlice';
import { lineChartOption,candleStickChartOption } from '../Common/ChartOptions';







export const Chart: React.FC = () => {
  const {companyData,companyStockData,apiFunction,pending,error} = useAppSelector(selectStock);
  const [isLineChartOption,setIsLineChartOption] = useState<boolean>(true);
  const [activeFilterItem, setActiveFilterItem] = useState<number>(0);
  //const chartOption
  
  const dispatch = useAppDispatch();
  useEffect(()=>{
      dispatch(getCompanyStockData({symbol:companyData.symbol,functionName: apiFunction}));
     
  },[])


  const getValueInDay = (object: {[key: string]: any}):Array<any> =>{
    const resultArr : Array<any> = [];
    for(const key in object) {
         resultArr.push(Number(object[key]));
    }
    return resultArr;
  }
  const formatStockPrice = (arr:any, fromIndex:number, toIndex:number) => {
      let itemRemoved = arr.splice(fromIndex, 1)
      arr.splice(toIndex, 0, itemRemoved[0])
      return arr;   
  }
  const splitStockData = (type: string): any => {
      let stockData:{[key: string]:any} ={};
      let stockArr: any[] = [];
      let dates: string[] = [];
      if(type === 'DAILY'){
        stockData = companyStockData['Time Series (Daily)'];
      }
      if(type === 'WEEKLY'){
        stockData =  companyStockData['Weekly Time Series'];
      }
      for(let key in stockData) {
          stockArr.push(formatStockPrice(getValueInDay(stockData[key]),3,1))
          dates.push(key);
      }
      dates.reverse();
      stockArr.reverse();
      return {
        stockArr,
        dates
      };
  }  
  const handleChartOption =(filterItemID:number,functionName:string): void=> {
       dispatch(setFunction(functionName));
       dispatch(getCompanyStockData({symbol:companyData.symbol,functionName:functionName}));
       setActiveFilterItem(filterItemID);
       if(pending=== false){
        if(functionName === 'TIME_SERIES_DAILY'){
          setIsLineChartOption(true);
        }
        if(functionName === 'TIME_SERIES_WEEKLY'){
          setIsLineChartOption(false);
        }
       }
  }
  const getHighPriceValues = (stockArr: any[]): Array<number> => {
    let highPrices: number[] = [];
    highPrices = stockArr.map(item => item[1]);
    return highPrices;
  }
  const newLineChartOption = useMemo(() =>{
    let option = {...lineChartOption,
      xAxis:{...lineChartOption.xAxis,data: splitStockData('DAILY').dates}
      ,series:{...lineChartOption.series
      ,data: getHighPriceValues(splitStockData('DAILY').stockArr)}
    }
    return option;
  },[companyStockData])
  const newCandleStickChartOption = useMemo(()=>{
      let option = {...candleStickChartOption
        ,xAxis:{...candleStickChartOption.xAxis,data: splitStockData('WEEKLY').dates}
        ,series:{...candleStickChartOption.series,data: splitStockData('WEEKLY').stockArr}
      };
      return option;
  },[companyStockData])

  const getClosePriceValue = useCallback((date: string): any => {
     if(Object.keys(companyStockData).length === 2 && date !== undefined){
          let closePrice: number = 0;
          if(apiFunction === 'TIME_SERIES_DAILY' && pending === false){
            closePrice =  companyStockData['Time Series (Daily)'][date]['4. close'];
          }
          if(apiFunction === 'TIME_SERIES_WEEKLY' && pending === false){
            closePrice =  companyStockData['Weekly Time Series'][date]['4. close'];
         }
        return closePrice;
     }
    
  },[apiFunction,companyStockData])

  const getPrevDate = (lastRefreshed:string): any=>{
     if(Object.keys(companyStockData).length === 2 && companyStockData != undefined && companyStockData != null){
      if(lastRefreshed != undefined && pending === false){
           // covert Stock Data Object to Array
          let stockArr: Array<any> = [];
          if(apiFunction === 'TIME_SERIES_DAILY'){
           stockArr = Object.entries(companyStockData['Time Series (Daily)'])
          }
          if(apiFunction === 'TIME_SERIES_WEEKLY'){
            stockArr = Object.entries(companyStockData['Weekly Time Series'])
          }
          if(stockArr.length >= 2 ){
             //get index of Last refreshed
             let indexOfPrevItem:number = stockArr.findIndex(item => item[0] === lastRefreshed) + 1;
             let prevDate:string = stockArr[indexOfPrevItem][0];
             return prevDate;
          }
         
      }
     }
       
   }
 
  const compareCloseData =  () => {
     if(Object.keys(companyStockData).length == 2){
      let type: boolean;
      let percent:number;
      let compareValue:number;
      let lastRefreshed:string = Object.keys(companyStockData).length === 2 && companyStockData['Meta Data']['3. Last Refreshed'];
      let prevDate:string = getPrevDate(lastRefreshed);
      let closeDataOfLastDate: number  = getClosePriceValue(lastRefreshed);
      let closeDataOfPrevDate:number = getClosePriceValue(prevDate);
      if(closeDataOfLastDate > closeDataOfPrevDate){
         type= true; // up price
         compareValue = Number((closeDataOfLastDate - closeDataOfPrevDate).toFixed(2));
         percent = Number(((compareValue / closeDataOfPrevDate )* 100).toFixed(2));
      }
      else{
        type= false; // down price
        compareValue = Number((closeDataOfPrevDate - closeDataOfLastDate).toFixed(2));
        percent = Number(((compareValue / closeDataOfLastDate )* 100).toFixed(2));
      }
      
      return {type:type,compareValue:compareValue,percent:percent}
     }
  }
  const compareData = useMemo(()=>compareCloseData(),[companyStockData]);
  const closePrice = getClosePriceValue(Object.keys(companyStockData).length >1&& companyStockData['Meta Data']['3. Last Refreshed']!);
  const filterList = [
    {
      id:0,
      display:'1D',
      function:'TIME_SERIES_DAILY'
    },
    {
      id:1,
      display:'1W',
      function:'TIME_SERIES_WEEKLY'
    },
  ]

  return (
    <ChartWrapper>
         
          <ChartInfo>
          <CompanyName>{companyData && companyData.name }</CompanyName>
          <HighPrice>${closePrice}</HighPrice>
          {
            compareData?.type ? 
            <ComparePrice up>
              <UpIcon></UpIcon>
              ${compareData?.compareValue }
              (&#43;${compareData?.percent}&#37;) 
              <span>Today</span>
             </ComparePrice>
            :
            <ComparePrice down>
            <DownIcon></DownIcon>
            ${compareData?.compareValue}
            (&#45;${compareData?.percent}&#37;)
            <span>Today</span>
           </ComparePrice>
          }
          
          <Filter>
            {
              filterList && filterList.map((item,index)=>(
                <FilterItem key={item.id} onClick={()=>handleChartOption(item.id,item.function)} className={`${activeFilterItem === index ? 'active' : ''}`}>{item.display}</FilterItem>
              ))
            }
          </Filter>
        </ChartInfo>
        
         {
           (Object.keys(companyStockData).length <2 || error)  ? <div style={{height:'300px',width:'100%',display:'flex',justifyContent:'center',alignItems: 'center',fontSize:'17px',color:'red'}}>Data error...!</div> :<LineChart option={isLineChartOption ? newLineChartOption : newCandleStickChartOption} loading={pending}></LineChart>
         }
    </ChartWrapper>
  )
}


