import React, { useEffect, useState } from 'react'
import { CenterWrapper } from './TimeView'
import styled from 'styled-components'

const InputViewWrapper = styled(CenterWrapper)`
  margin-top: 20px;
  width: 100%;
  overflow: hidden;
`

const InputWrapper = styled.input`
  margin-left: -20px;
  padding-left: 20px;
  font-size: 15px;
  width: 600px;
  height: 40px;
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
  height: 41px;
  border-bottom-right-radius: 15px;
  border-top-right-radius: 15px;
  margin-left: -44px;
  transition: all 0.4s;
  &:hover {
    cursor: pointer;
    background-color: #e2e2e2d4;
  }
`

export default function InputView() {
  // 输入框
  const [searchText, setSearchText] = useState('')
  // 搜索引擎
  const [currentEngine, setCurrentEngine] = useState<'bing' | 'baidu' | 'google'>('bing')
  // 点击搜索按钮
  const handleSearch = (searchText: string) => {
    switch (currentEngine) {
      case 'bing':
        window.open(`https://cn.bing.com/search?q=${searchText}`)
        break;
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
      handleSearch(searchText)
    }
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
      <InputWrapper placeholder='输入并搜索' type="text" value={searchText} onChange={handleChangeSearchText} />
      <SearchButton onClick={() => handleSearch(searchText)}>
        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2679" width="25" height="25"><path d="M945.066667 898.133333l-189.866667-189.866666c55.466667-64 87.466667-149.333333 87.466667-241.066667 0-204.8-168.533333-373.333333-373.333334-373.333333S96 264.533333 96 469.333333 264.533333 842.666667 469.333333 842.666667c91.733333 0 174.933333-34.133333 241.066667-87.466667l189.866667 189.866667c6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333c8.533333-12.8 8.533333-34.133333-2.133333-46.933334zM469.333333 778.666667C298.666667 778.666667 160 640 160 469.333333S298.666667 160 469.333333 160 778.666667 298.666667 778.666667 469.333333 640 778.666667 469.333333 778.666667z" fill="#666666" p-id="2680"></path></svg>
      </SearchButton>
    </InputViewWrapper>
  )
}
