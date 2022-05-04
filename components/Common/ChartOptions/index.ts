import { ChartsProps } from "@src/components/Charts/LineChart";
import { graphic } from "echarts";


const upColor = '#ec0000';
const upBorderColor = '#8A0000';
const downColor = '#00da3c';
const downBorderColor = '#008F28';


const candleChartTooltip = (param: any) =>{
  return  `Date: <strong> ${param[0].name}</strong> </br>
           Open: <strong> ${param[0].data[1]}</strong> </br>
           Close: <strong> ${param[0].data[2]}</strong> </br>
           Low:  <strong> ${param[0].data[3]}</strong> </br>
           High: <strong>${param[0].data[4]}</strong> </br>
  `
}
const lineChartTooltip = (param: any) =>{
  return  `Date: <strong>${param[0].name}</strong></br>
           High: <strong>${param[0].data}</strong></br>
  `
}

export const lineChartOption: ChartsProps['option'] = {
    visualMap: [
      {
        show: false,
        type: 'continuous',
        seriesIndex: 5,
        min: 0,
        max: 1000,
        
      }
    ],
   
    tooltip: {
      trigger: 'axis',
      axisPointer:{
        axis:'y',
        label:{
          show:true,
          backgroundColor:'#3CB371',
          color:'#fff'
        }
      },
      formatter:(params) => lineChartTooltip(params)
    },
    xAxis:{
    
        
        axisLine:{
          show:false,
        
        },
        
        axisLabel:{
            align:'left',
            padding:10,
            color:'#333',
            fontWeight:600   
        },
        axisTick:{
          show:false
        },
    
    },
    yAxis:
      {
       
        position:'right',
        splitLine: {
        show: false
        },
        splitArea:{
          show:false
        },
        axisLabel:{
            padding:10,
            color:'#333',
            fontWeight:600   
        },
        axisTick:{
            show:true
        },
        axisLine:{
            show:true
        }
      },
    dataZoom: [
        {
          
            id: 'dataZoomX',
            type: 'slider',
            brushSelect:false,
            xAxisIndex: [0],
            filterMode: 'filter',
            start: 0,
            end: 5,
            
        }
    ],
    grid:
      {
         left:'0',
         right:'15%',
         top:'10%',
         bottom:'30%',
         
      },  
    series:
     {
        type: 'line',
        showSymbol: false,
        lineStyle: {
        width: 1.5,
        color: '#3CB371'
        }, 
        areaStyle:{
          color: new graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0.5, 
          color: '#3CB360',
          // color at 0% position
        }, {
        offset: 1, color: '#ececec' // color at 100% position
        }], false)
        }
        
     }
     
    
 };

 

export const candleStickChartOption: ChartsProps['option'] = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label:{
        show:true,
        backgroundColor:'#3CB371',
        color:'#fff'
      }
    },
    show: true,
    formatter:(params)=> candleChartTooltip(params)
  },
    // legend: {
    //   data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30']
    // },
    grid: {
      left: '15%',
       top:'15%',
       right:'20%',
      bottom: '20%'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisLine: { onZero: false },
      splitLine: { show: false },
      min: 'dataMin',
      max: 'dataMax',
      axisLabel:{
        align:'center',
        padding:10,
        color:'#333',
        fontWeight:600   
    },
    },
    yAxis: {
      position:'left',
      scale: true,
      splitArea: {
        show: false,
      
      },
      splitLine:{
        show: false,
      },
      axisLabel:{
        padding:10,
        color:'#333',
        fontWeight:600   
     },
    },
    dataZoom: [
      {
        
        height:10,
        show: true,
        type: 'slider',
        brushSelect: false,
        top: '95%',
        start: 0,
        end: 5,
       
      }
    ],
    
    series: 
      {
     
        type: 'candlestick',
        itemStyle: {
          color: upColor,
          color0: downColor,
          borderColor: upBorderColor,
          borderColor0: downBorderColor
        },
        markPoint: {
          label: {
            formatter: function (param) {
              return param != null ? Math.round(Number(param.value)) + '' : '';
            }
          },
          data: [
            {
              name: 'Mark',
              coord: ['2013/5/31', 2300],
              value: 2300,
              itemStyle: {
                color: 'rgb(41,60,85)'
              }
            },
            {
              name: 'highest value',
              type: 'max',
              valueDim: 'highest'
            },
            {
              name: 'lowest value',
              type: 'min',
              valueDim: 'lowest'
            },
            {
              name: 'average value on close',
              type: 'average',
              valueDim: 'close'
            }
          ],
         
        },
        markLine: {
          symbol: ['none', 'none'],
          data: [
            [
              {
                name: 'from lowest to highest',
                type: 'min',
                valueDim: 'lowest',
                symbol: 'circle',
                symbolSize: 10,
                label: {
                  show: false
                },
                emphasis: {
                  label: {
                    show: false
                  }
                }
              },
              {
                type: 'max',
                valueDim: 'highest',
                symbol: 'circle',
                symbolSize: 10,
                label: {
                  show: false
                },
                emphasis: {
                  label: {
                    show: false
                  }
                }
              }
            ],
            {
              name: 'min line on close',
              type: 'min',
              valueDim: 'close'
            },
            {
              name: 'max line on close',
              type: 'max',
              valueDim: 'close'
            }
          ]
        }
      },
    //   {
    //     name: 'MA5',
    //     type: 'line',
    //     data: calculateMA(5),
    //     smooth: true,
    //     lineStyle: {
    //       opacity: 0.5
    //     }
    //   },
    //   {
    //     name: 'MA10',
    //     type: 'line',
    //     data: calculateMA(10),
    //     smooth: true,
    //     lineStyle: {
    //       opacity: 0.5
    //     }
    //   },
    //   {
    //     name: 'MA20',
    //     type: 'line',
    //     data: calculateMA(20),
    //     smooth: true,
    //     lineStyle: {
    //       opacity: 0.5
    //     }
    //   },
    //   {
    //     name: 'MA30',
    //     type: 'line',
    //     data: calculateMA(30),
    //     smooth: true,
    //     lineStyle: {
    //       opacity: 0.5
    //     }
    //   }
    
  };
  
