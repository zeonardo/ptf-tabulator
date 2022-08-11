import React, { cloneElement, useEffect, useState, useMemo, useCallback } from "react";
import TabPane from "./tabPane";
import TabList from "./tabList";
import { TypeTabPaneChild, TypeTabProps} from './types'
import StyledTab from "./styles";

const _renderedPanes: TypeTabPaneChild[] = []//cache constant instead of extra state

const Tab2 = ({ className, children, active, initialActive, onActiveChange, ...rest }: TypeTabProps) : JSX.Element => {

  const panes = useMemo(() => React.Children.map(children, (child) => child), [children])

  const [activeIndex, setActiveIndex] = useState(Math.min(
    initialActive === undefined
      ? active || 0
      : initialActive,
    panes.length - 1))

  const tabTitles = panes.map((child) => child.props.title)
  const activePane = React.Children.toArray(children)[activeIndex] as TypeTabPaneChild
  if(!_renderedPanes[activeIndex]) _renderedPanes[activeIndex] = activePane//adds new render to cached list

  const onClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    const index = +event.currentTarget.value
    setActiveIndex(index);
  }, [])

  useEffect(() => {
    if(active !== undefined) setActiveIndex(active)
  },[active])

  return panes.length ? (
    <StyledTab className={`tab${className ? ' ' + className : ''}`} { ...rest }>
      <TabList tabs={tabTitles} onClick={onActiveChange || onClick} active={activeIndex} />
      {_renderedPanes.map((pane, index) => cloneElement(pane, { 
          key: `pane${index}`,
          index: index,
          active: activeIndex === index
        })
      )}
    </StyledTab>
  ) : <></>
}

Tab2.Pane = TabPane

export default Tab2
