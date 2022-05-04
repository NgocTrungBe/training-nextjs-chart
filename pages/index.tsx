import { ChartArea, Wrapper } from "@src/assets/styled/Home";
import { Chart } from "@src/components/Charts";
import { News } from "@src/components/News";
import Statistic from "@src/components/Statistics";
import React from "react";

const HomePage: React.FC = () => {
  return (
      <Wrapper>
        <ChartArea>
          <Chart></Chart>
          <Statistic></Statistic>
        </ChartArea>
        <News></News>
        
      </Wrapper>
  )
};
export default HomePage;
