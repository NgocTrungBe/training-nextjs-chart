import React, { useState } from 'react';
import { NavbarWrapper,BackIcon, Name, NavbarLeft, NavbarRight,SearchForm, SearchButton, SearchIcon, SearchInput, Text, Title, Value, TextWrapper, MenuIcon, SearchList, SearchListItem, } from '@src/assets/styled/Navbar';
import { useAppDispatch, useAppSelector } from '@src/app/hooks';
import { clearSearchData, CompanyState, getCompanyStockData, searchCompany,selectStock, setCompanyData } from '@src/redux/stockSlice';


interface Props {
    handleMenuIconClick:(status:boolean) => void;
}

const Navbar: React.FC<Props> = ({handleMenuIconClick}) => {
    const dispatch = useAppDispatch();
    const {searchData,companyData,apiFunction} = useAppSelector(selectStock);
    const [keywords ,setKeywords] = useState<string>('');
    const handleInputChange = (keywords: string): void  =>{
         setKeywords(keywords);
         if(keywords.length === 0){
             dispatch(clearSearchData());
         }
    }
    const handleSearchButtonClick = (): void=>{
          if(keywords !=''){
            dispatch(searchCompany(keywords));
          }
    } 
    const formatCompanyData = (company:{[key: string]: any}): any => {
        let formatCompanyData: CompanyState = {
            symbol: company["1. symbol"],   
            name: company["2. name"],
            type:company["3. type"],
            region: company["4. region"],
            marketOpen: company["5. marketOpen"],
            marketClose: company["6. marketClose"],
            timezone: company["7. timezone"],
            currency: company["8. currency"],
            matchScore: company["9. matchScore"]
       };
       return formatCompanyData;
        
    }
    const handleCompanyClick = (symbol: string,company: any): void=>{
         if(symbol){
             dispatch(setCompanyData(formatCompanyData(company)))
             dispatch(getCompanyStockData({symbol: symbol,functionName:apiFunction}));
             dispatch(clearSearchData());
             setKeywords('');
         }
    }
    return(
    <NavbarWrapper>
        <NavbarLeft>
            <MenuIcon 
                   onClick={()=> handleMenuIconClick(true)}>
            </MenuIcon>
           
            <BackIcon></BackIcon>
            <Name>{companyData.name}</Name>
            
        </NavbarLeft>
        <NavbarRight>
            <SearchForm>
                <SearchButton onClick={()=> handleSearchButtonClick()}>
                    <SearchIcon></SearchIcon>
                </SearchButton>
                <SearchInput value={keywords}
                             placeholder='Search company'
                             onChange={(e)=> handleInputChange(e.target.value)}
                >
                </SearchInput>
                { 
                  searchData.length > 0 &&
                  <SearchList>
                    {
                        searchData && searchData.map((item)=>(
                            <SearchListItem key={item['1. symbol']} onClick={()=>handleCompanyClick(item['1. symbol'],item)}>{item['2. name']}</SearchListItem>
                        ))

                    }
                  </SearchList> 
                }
                
            </SearchForm>
            <TextWrapper>
            <Text ml={50}>
                <Title>portfolio value</Title>
                <Value>$56,2000,35</Value>
            </Text>
            <Text ml={30}>
                <Title>buying power</Title>
                <Value>$56,2000,35</Value>
            </Text>
            </TextWrapper>
        </NavbarRight>
        
    </NavbarWrapper>
  
  )
}



export default Navbar;