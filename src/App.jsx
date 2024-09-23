import StatsPreviewCard from "./components/StatsPreviewCard"
import styled from "styled-components"

const AppContainer = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 150px 24px;
`

function App() {
  return (
    <>
      <AppContainer>
        <StatsPreviewCard />
      </AppContainer>
    </>
  )
}

export default App
