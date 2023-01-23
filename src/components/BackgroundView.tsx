import styled from "styled-components"

const ImageWrapper = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -9;
  width: 100vw;
  height: 100vh;
`

export default function BackgroundView() {
  return (
    <ImageWrapper src="../../public/background.jpg" alt="" />
  )
}
