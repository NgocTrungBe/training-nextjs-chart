import React, { useEffect, useRef } from 'react'
import { ECharts, EChartsOption, getInstanceByDom, init } from 'echarts';

export interface ChartsProps {
    option: EChartsOption;
    loading?: boolean;
    
  }


export const LineChart: React.FC <ChartsProps> = ({option,loading}) => {
    const chartRef = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        let lineChart: ECharts | undefined;
        if (chartRef.current !== null) {
          lineChart = init(chartRef.current);
        }
        function resizeChart() {
            lineChart?.resize();
          }
          window.addEventListener("resize", resizeChart);
      
          // Return cleanup function
          return () => {
             lineChart?.dispose();
            window.removeEventListener("resize", resizeChart);
          };
    
    },[])
    
    useEffect(()=>{
        if(chartRef.current !== null){
          const lineChart = getInstanceByDom(chartRef.current); 
           option && lineChart?.setOption(option);
        }
    },[option]);

    useEffect(() => {
    
      if (chartRef.current !== null) {
        const lineChart = getInstanceByDom(chartRef.current);
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        loading === true ? lineChart?.showLoading() : lineChart?.hideLoading();
      }
    }, [loading]);
   
  return (
    <div ref={chartRef} style={{height:'400px'}}>LineChart</div>
  )
};
