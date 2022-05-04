import styled from 'styled-components';

export const NewsWrapper = styled.div`
   display: flex;
   flex-direction:column;
   height: auto;
   width: calc(25% - 20px);
   background:#fff;
   box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
   border-radius:3px;
   margin-left: 20px;
   @media only screen and (max-width: 1024px) {
     margin-left:0;
     margin-top: 20px;
     width: 100%;
   }
  
`;


export const Title = styled.div`
    font-size: 1.8rem;
    font-weight: 500;
    border-bottom: 1px solid #ececec;
    padding: 20px;

`
export const NewsList = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;

` 
export const NewsItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: flex-start;
    height: 60px;
    @media only screen and (max-width: 1024px) {
        height: 80px;
    }
   

` 
export const NewsImage = styled.div`
    width: calc(30% - 15px);
    height: 100%;
    background: #ececec;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    @media only screen and (max-width: 1024px) {
        width: calc(25% - 15px);
    }

` 
export const NewsContent = styled.div`
   width: calc(70% - 15px);
   margin-left: 15px;
   display: flex;
   flex-direction: column;
   @media only screen and (max-width: 1024px) {
    width: calc(75% - 15px);
}

`
export const NewsTitle = styled.h2`
   cursor: pointer;
   font-size: 1.6rem;
   font-weight: 500;
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height:1.6rem;
  margin-bottom: 8px;
  transition: 0.2s;
  :hover{
      color: red;
  }
`
export const NewsAuthor = styled.h4`
   font-size: 1.3rem;
   color:grey;
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`