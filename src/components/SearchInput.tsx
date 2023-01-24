import React, { useContext, useEffect, useState } from 'react'
import { CenterWrapper } from './TimeView'
import styled from 'styled-components'
import { EngineListData } from './EngineList'
import SearchContext from '../context/SearchContext'

const InputViewWrapper = styled(CenterWrapper)`
  box-sizing: border-box;
  margin-top: 20px;
  width: 100%;
  overflow: hidden;
`

const InputWrapper = styled.input`
  box-sizing: border-box;
  margin-left: -20px;
  padding-left: 55px;
  padding-right: 48px;
  width: 600px;
  font-size: 15px;
  height: 45px;
  line-height: 40px;
  outline: none;
  border: 1px solid #bebebe;
  border-radius: 15px;
  transition: all 0.4s;
  background-color: #d8d8d8af;
  &:hover{
    background-color: #eeeeeeb6;
  }
`

const SearchButton = styled.div`
  display: flex;
  align-items: center;
  width: 34px;
  padding-left: 10px;
  height: 45px;
  border-bottom-right-radius: 15px;
  border-top-right-radius: 15px;
  margin-left: -44px;
  transition: all 0.4s;
  &:hover {
    cursor: pointer;
    background-color: #e2e2e2d4;
  }
`

const EngineButton = styled(SearchButton)`
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;
  border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;
  margin-right: -24px;
  z-index: 999;
`

interface InputViewProps {
  isShowEngineList: boolean,
  setIsShowEngineList: React.Dispatch<React.SetStateAction<boolean>>
}

export default function InputView({ isShowEngineList, setIsShowEngineList }: InputViewProps) {
  // 当前搜索引擎
  const { currentEngine } = useContext(SearchContext)
  // 输入框
  const [searchText, setSearchText] = useState('')
  // 点击搜索按钮
  const handleSearch = (searchText: string) => {
    console.log(currentEngine, searchText)
    switch (currentEngine) {
      case 'Bing':
        window.open(`https://cn.bing.com/search?q=${searchText}`)
        break;
      case 'Google':
        window.open(`https://www.google.com/search?q=${searchText}`)
        break;
      case 'Baidu':
        window.open(`https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=${searchText}&fenlei=256&oq=react&rsv_pq=d16f04d8005a4a44&rsv_t=5fdac4saXJfTf1HfPL18EYjbOWzUhpVKpGUNZyGCxC7w85v6bt2edbQdv60&rqlang=cn&rsv_enter=1&rsv_dl=tb&rsv_btype=t&inputT=1626&rsv_sug3=20&rsv_sug1=18&rsv_sug7=101&rsv_sug2=0&rsv_sug4=1937`)
      case 'Github':
        window.open(`https://github.com/search?q=${searchText}`)
      default:
        break;
    }
  }
  // 搜索输入按钮回调
  const handleChangeSearchText: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchText(e.target.value)
  }
  // 回车事件回调
  const handleKeyDownEvent = (e: KeyboardEvent) => {
    if (e.keyCode == 13) {
      // TODO
      handleSearch(searchText)
    }
  }

  const handleShowEngineList = () => {
    setIsShowEngineList(() => !isShowEngineList)
  }

  // 监听键盘事件
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDownEvent)
    return () => {
      document.removeEventListener('keydown', handleKeyDownEvent)
    }
  }, [searchText])

  return (
    <InputViewWrapper>
      <EngineButton onClick={handleShowEngineList}>
        {EngineListData.filter(item => item.name === currentEngine)[0].icon}
        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9183" width="20" height="20"><path d="M512.726547 675.318646c-8.063653 0-15.790638-3.245927-21.435195-9.006118L231.175103 400.906809c-11.603269-11.837606-11.410887-30.840402 0.427742-42.442648 11.837606-11.601222 30.841426-11.410887 42.442648 0.427742l238.681054 243.534596L751.407602 358.891903c11.601222-11.839653 30.602995-12.033058 42.442648-0.427742 11.839653 11.603269 12.031011 30.605042 0.427742 42.442648L534.161742 666.312528C528.517185 672.072719 520.791224 675.318646 512.726547 675.318646z" fill="#272636" p-id="9184"></path></svg>
      </EngineButton>
      <InputWrapper onClick={() => isShowEngineList && handleShowEngineList()} placeholder='输入并搜索' type="text" value={searchText} onChange={handleChangeSearchText} />
      <SearchButton onClick={() => handleSearch(searchText)}>
        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2679" width="25" height="25"><path d="M945.066667 898.133333l-189.866667-189.866666c55.466667-64 87.466667-149.333333 87.466667-241.066667 0-204.8-168.533333-373.333333-373.333334-373.333333S96 264.533333 96 469.333333 264.533333 842.666667 469.333333 842.666667c91.733333 0 174.933333-34.133333 241.066667-87.466667l189.866667 189.866667c6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333c8.533333-12.8 8.533333-34.133333-2.133333-46.933334zM469.333333 778.666667C298.666667 778.666667 160 640 160 469.333333S298.666667 160 469.333333 160 778.666667 298.666667 778.666667 469.333333 640 778.666667 469.333333 778.666667z" fill="#666666" p-id="2680"></path></svg>
      </SearchButton>
    </InputViewWrapper>
  )
}
