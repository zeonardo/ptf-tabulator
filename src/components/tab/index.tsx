import React, { cloneElement, useEffect, useState, useMemo, useCallback } from "react";
import TabPane from "./tabPane";
import TabList from "./tabList";
import { TypeTabProps } from './types'
import StyledTab from "./styles";

const Tab = ({ className, children, active, initialActive, onActiveChange, ...rest } : TypeTabProps) : JSX.Element => {

  const validChildren = useMemo(() => React.Children.map(children, (child) => {
    return ((child.type as unknown as () => void).name === 'TabPane') ? child : false
  }).filter(Boolean), [children])

  const [activeIndex, setActiveIndex] = useState(Math.min(
    initialActive === undefined
      ? active || 0
      : initialActive,
    React.Children.count(validChildren) - 1))
  
  const tabTitles = validChildren.map((child) => child.props.title)
  const pane = validChildren[activeIndex]
  const activePane = cloneElement(pane, { key: `pane${activeIndex}`, index: activeIndex, active: true })

  const onClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    const index = +event.currentTarget.value
    setActiveIndex(index);
  }, [])

  useEffect(() => {
    if(active !== undefined) setActiveIndex(active)
  },[active])

  return validChildren.length ? (
    <StyledTab className={`tab${className ? ` ${className}` : ''}`} { ...rest }>
      <TabList tabs={tabTitles} onClick={onActiveChange || onClick} active={activeIndex} />
      {activePane}
    </StyledTab>
  ) : <></>
}

Tab.Pane = TabPane

export default Tab
