import styled from "styled-components"
import './App.css'
import Btn from "./Components/Btn/Btn"
import Text from "./Components/Text/Text"

const Main = styled.main`
background-color: white;
border-radius: 10px;
width: 400px;
height:500px;

display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`
const ContentContainer = styled.div`
border-radius: 10px;
width: 400px;
height:calc(500px - 195.55px);

display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
`
const Image = styled.img`
  width: 400px;
  border-radius: 10px 10px 0 0;
`
const Icon = styled.img`
width: 40px;
height:40px;
`
const ChangeContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 300px;
`
const PlanContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 180px;
`
const BtnContainer =styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export default function App() {

  return (
    <>

      <div className="App">
        <Main>

            <Image src="https://imageupload.io/ib/C5mdEhatAdezK2t_1696817331.png" alt="illustration" />
          <ContentContainer>
            <h1>Order Summary</h1>
            <Text>
              You can now listen to millions of songs, audiobooks,
               and podcasts on any
              device anywhere you like!
            </Text>
            <ChangeContainer>
              <PlanContainer>
                <Icon src="https://imageupload.io/ib/OkoUaa2xTiw90rU_1696817559.png" alt="music icon" />
                <div>
                  <h2>Annual Plan</h2>
                  <Text>$59.99/year</Text>
                </div>
              </PlanContainer>
              <a href="#">Change</a>
            </ChangeContainer>
            <BtnContainer>
              <Btn style={{backgroundColor: "#3829e0", color:'#f5f7ff'}}>Proceed to Payment</Btn>
              <Btn style={{backgroundColor: "#f5f7ff", color:"#7280a7"}}>Cancel Order</Btn>
            </BtnContainer>
          </ContentContainer></Main>
      </div>
    </>
  )
}
