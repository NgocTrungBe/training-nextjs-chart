import React, { useEffect } from 'react'
import ReactLoading from 'react-loading';
import {NewsAuthor, NewsContent, NewsImage, NewsItem, NewsList, NewsTitle, NewsWrapper, Title} from '@src/assets/styled/News';
import { useAppDispatch, useAppSelector } from '@src/app/hooks';
import { getNews, selectNews } from '@src/redux/newsSlice';
import { Loading } from '@src/assets/styled/Home';

export const News: React.FC = () => {
  const dispatch = useAppDispatch();
  const {newsData,pending,error} = useAppSelector(selectNews);

  useEffect(()=>{
             dispatch(getNews());
  },[])  
  return (
   <NewsWrapper>
       <Title>News</Title>
       <NewsList>
           {
               error ? <div style={{height:'30px',width:'100%',display:'flex',justifyContent:'center',alignItems: 'center',fontSize:'17px',color:'red'}}>Data error...!</div> :
               pending ? <Loading>
                           <ReactLoading type='spin' color='#3CB371' width={30} height={30}></ReactLoading>
                        </Loading> : newsData.slice(0,5).map((item,index)=>(
                <NewsItem key={index}>
                    <NewsImage>
                        <img src={item.urlToImage}/>
                    </NewsImage>
                    <NewsContent>
                        <NewsTitle>{item.title}</NewsTitle>
                        <NewsAuthor>{item.author != '' ? item.author : '...'}</NewsAuthor>
                    </NewsContent>
                </NewsItem>
               ))
           }
       </NewsList>
   </NewsWrapper>
    
  )
}
