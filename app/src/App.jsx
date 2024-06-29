import { useState,useEffect } from 'react'

import styled from 'styled-components'
import SearchResults from './components/SearchResults/SearchResults';
export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data,setData] = useState(null)
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(null)
  const [filteredData,setFilteredData] = useState(null)
  const [selectedBtn,setSelectedBtn] = useState("all")
  
  useEffect(()=>{
    const fetchFoodData = async()=>{
      setLoading(true)
      try{ 
        const response = await fetch(BASE_URL)
       const json = await response.json()
       setLoading(false)
       setData(json)
       setFilteredData(json)
      }catch(error){
          setError("Unable to fetch Data")
      }
    }
    fetchFoodData()
  },[])


  const filteredFood =(type)=>{
    if (type==="all"){
     setFilteredData(data)
     setSelectedBtn("all")
     return;
    }
    const filter = data?.filter((food)=>food.type.toLowerCase().includes(type.toLowerCase()))
    
    setFilteredData(filter)
    setSelectedBtn(type)
  }



  const serachFood =(event)=>{
    const searchValue = event.target.value;

    if(searchValue === ""){
      setFilteredData(null)
    }
    
    const filter = data?.filter((food)=>food.name.toLowerCase().includes(searchValue.toLowerCase()))
    setFilteredData(filter)
  }

  const filteredBtns=[
    {name:"All",type:"all"},
    {name:"Breakfast",type:"breakfast"},
    {name:"Lunch",type:"lunch"},
    {name:"Dinner",type:"dinner"}
  ]

  if(error) return(<div>{error}</div>)
  if(loading) return <div>Loading....</div>


  return (
    <>
    <Container>
      <TopSection>
        <div className='logo'>
          <img src="/Foody Zone.png" alt="logo"/>
        </div>
        <div className='search'>
            <input type="text" placeholder='Search Food' onChange = {serachFood}/>
        </div>
      </TopSection>

      <FilterContainer>
        {filteredBtns.map((value)=>(
          <Button isSelected = {selectedBtn===value.type} key={value.name} onClick={()=>filteredFood(value.type)}>{value.name}</Button>
        ))}
      </FilterContainer>
      
    </Container>
    <SearchResults foodDetails ={filteredData}/>
    </>
  )
}

export default App

export const Container = styled.div`
   max-width: 1200px;
   margin: 0 auto;
`
const TopSection = styled.section`
 height: 140px;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 16px;

 .search{
    input{
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      width: 140px;
      height: 40px;
      font-size: 15px;
      padding:0 10px;
      &::placeholder{
        color: white;
      }
    }
  @media (0<width<600){
    flex-direction: column;
    height: 60px;
  }
 }
`
const FilterContainer = styled.section`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 12px;
   padding-bottom: 40px;
`
export const Button = styled.button`
  background: ${({isSelected}) =>(isSelected ? "#f22f2f" :"#FF4343" )} ;
  outline: 1px solid ${({isSelected}) =>(isSelected ? "white" :"#FF4343" )};
  color: #fff;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  cursor: pointer;
  &:hover{
    background-color: #f22f2f;
  }
`
