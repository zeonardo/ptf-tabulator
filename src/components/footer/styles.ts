import styled from 'styled-components'
const config = require("../../styles/config").default

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 0.8rem;
  font-weight: lighter;
  background-color: ${config.color.primary};
  padding: 2.5rem 1rem;
  line-height: 1.6rem;
  flex: 0 0 auto;
  `;

export default StyledFooter