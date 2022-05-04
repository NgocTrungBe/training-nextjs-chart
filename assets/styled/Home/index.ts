import styled from 'styled-components';



export const Main = styled.div`
     margin-left: auto;
     width: calc(100% - 250px);
     padding: 30px;
     @media only screen and (max-width: 1024px) {
      width: calc(100% - 200px);
    }
     @media only screen and (max-width: 600px) {
      width: 100%;
    }
  
`;
export const Loading = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const ChartArea = styled.div`
   width : calc(75% - 20px);
   @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;
export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
     
   @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
 
`;