import styled from "styled-components"
import config from "../../../styles/config"
import { TypeTabButtonProps } from "../types"

export const TabList = styled.ul`
  list-style: none;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  overflow-x: auto;
  max-width: 100%;
  overflow-scrolling: touch;
  overscroll-behavior-y: contain;
  padding-bottom: 5px;
  @media only screen and (max-width: ${config.breakpoint.small.max}) {
    justify-content: flex-start;
  }
  &::-webkit-scrollbar{
    width: 5px;
    height: 2px;
    background-color: ${config.color.white};
  }
  &::-webkit-scrollbar-track{
    border: none;
    background-color: ${config.color.graylight};
    border-radius: 1px;
  }
  &::-webkit-scrollbar-thumb{
    background-color: ${config.color.gray};
    border-radius: 1px;
  }
`

export const TabListItem = styled.li`
  border-bottom: 1px solid ${config.color.gray};
`

export const TabListButton = styled.button<TypeTabButtonProps & React.HTMLProps<HTMLButtonElement>>`
  color: ${props => props.active ? config.color.primary : 'inherit'};
  background: none;
  border: none;
  border-bottom: 2px solid ${props => props.active ? 'currentColor' : 'transparent'};
  padding: 0.6rem 1.2rem;
  transition: all .1s linear;
  white-space: nowrap;

  &:hover{
    color: ${config.color.primary}
  }
`