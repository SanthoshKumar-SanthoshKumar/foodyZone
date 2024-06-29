import styled from 'styled-components'
import { BASE_URL, Button, Container } from '../../App'
const SearchResults = ({foodDetails}) => {
  return (
    <FoodCardsContainer>
        <Container>
    <FoodCards>
         {foodDetails?.map((food)=>(
            <FoodCard key={food.name}>
                <div className='food-img'>
                   <img src={BASE_URL+food.image} alt={food.name}/>
                </div>
                <div className='food-info'>
                    <div className='info'>
                    <h3>{food.name}</h3>
                    <p>{food.text}</p>
                    </div>
                    <Button>
                    ${food.price.toFixed(2)}
                </Button>
                </div>
            </FoodCard>
         ))}
    </FoodCards>
    </Container>
  </FoodCardsContainer>
  )
}

export default SearchResults


const FoodCardsContainer = styled.section`
 background-image:url("/bg.png");
 background-size:cover;
 min-height: calc(100vh - 210px);

`

const FoodCards =styled.div`

display: flex;
flex-wrap: wrap;
column-gap: 20px;
row-gap: 32px;
justify-content: center;
align-items: center;
padding-top: 80px;


`
const FoodCard = styled.div`

border: 0.66px solid;

border-image-source: radial-gradient(80.38% 222.5% at -13.75% -12.36%, #98F9FF 0%, rgba(255, 255, 255, 0) 100%) 
radial-gradient(80.69% 208.78% at 108.28% 112.58%, #EABFFF 0%, rgba(135, 38, 183, 0) 100%) ;

   width: 340px;
    height: 167px;
    background:url(.png),radial-gradient(90.16% 143.01% at 15.32p% 21.04%, rgba(165,239,255,0.2) 0%,rgba(118,191,244,0.0447917) 77.08%,rgba(70,144,213,0) 100%);
    background-blend-mode:overlay,normal;
    backdrop-filter: blur(13.1842px);
    border-radius:20px;
    
    display: flex;
    padding: 8px;

    .food-info{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: end;

        h3{
            margin-top: 8px;
            font-size: 16px;
            font-weight: 500;
        }
        p{
            margin-top: 4px;
            font-size: 12px;
        }
        button{
            font-size: 12px;
        }
    }
`

