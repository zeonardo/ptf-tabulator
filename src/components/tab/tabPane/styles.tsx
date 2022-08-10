import styled from "styled-components"
import { TypeTabPaneProps } from "../types"
/* import config from "../../../styles/config" */

const StyledTabPane = styled.div<TypeTabPaneProps & React.HTMLProps<HTMLDivElement>>`
  display: ${props => props.active ? 'block' : 'none'};
  width: 90vw;
  max-width: 100%;
  padding: 2rem 3rem;
  text-align: center;
  cursor: default;
`

export default StyledTabPane