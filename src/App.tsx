import InputView from './components/InputView'
import TimeView from './components/TimeView'
import styled from 'styled-components'
import BackgroundView from './components/BackgroundView'

const AppWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`

export default function App() {
  return (
    <AppWrapper className="App">
      <TimeView />
      <InputView />
      <BackgroundView />
    </AppWrapper>
  )
}
