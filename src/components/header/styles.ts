import styled from 'styled-components'
const config = require("../../styles/config").default

const StyledHeader = styled.header `
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${config.color.black};
  background-color: ${config.color.white};
  height: 3.10rem;
  padding: 0.6rem 1rem;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-width: ${config.breakpoint.small.min};
  box-shadow: 0 -5px 10px ${config.color.black};
  flex: 0 0 3.10rem;
  @media (max-width: ${config.breakpoint.medium.mid}){
    justify-content: center;
  }
  `;
export default StyledHeader