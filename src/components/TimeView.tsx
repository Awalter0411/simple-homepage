import dayjs from 'dayjs'
import { useState } from 'react'
import styled from 'styled-components'

const arr = ["日", "一", "二", "三", "四", "五", "六"]

export const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
  color: #fff;
`

const Timer = styled(CenterWrapper)`
  font-size: 78px;
  letter-spacing: 3px;
`

const DateWrapper = styled(CenterWrapper)`
  & div{
    margin-right: 10px;
  }
`

const TimeViewWrapper = styled.div`
  margin-top: 200px;
`

export default function TimeView() {
  // 时间
  const [currentTime, setCurrentTime] = useState(dayjs().format('HH:mm:ss'))
  // 日期
  const [currentDate, setCurrentDate] = useState(dayjs().format('MM月DD日'))
  // 星期
  const [currentDay, setCurrentDay] = useState(arr[dayjs().day()])

  setTimeout(() => {
    setCurrentTime(dayjs().format('HH:mm:ss'))
    setCurrentDate(dayjs().format('MM月DD日'))
    setCurrentDay(arr[dayjs().day()])
  }, 1000)


  return (
    <TimeViewWrapper>
      <Timer>{currentTime}</Timer>
      <DateWrapper>
        <div>{currentDate}</div>
        <div>{'星期' + currentDay}</div>
      </DateWrapper>
    </TimeViewWrapper>
  )
}
