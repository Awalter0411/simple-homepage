import SearchInput from './components/SearchInput'
import TimeView from './components/TimeView'
import styled from 'styled-components'
import BackgroundView from './components/BackgroundView'
import EngineList from './components/EngineList'
import SearchContext from './context/SearchContext'
import { useState } from 'react'

const AppWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function App() {
  const [currentEngine, setCurrentEngine] = useState('Bing')
  const [isShowEngineList, setIsShowEngineList] = useState(false)

  return (
    <SearchContext.Provider value={{ currentEngine, setCurrentEngine }}>
      <AppWrapper className="App">
        <TimeView />
        <SearchWrapper>
          <SearchInput isShowEngineList={isShowEngineList} setIsShowEngineList={setIsShowEngineList} />
          {
            isShowEngineList && <EngineList />
          }
        </SearchWrapper>
        <BackgroundView />
      </AppWrapper>
    </SearchContext.Provider>
  )
}
