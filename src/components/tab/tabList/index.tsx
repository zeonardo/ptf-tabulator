import React from "react";
import { TabList as StyledTabList, TabListItem, TabListButton } from './styles'

interface TabListPropsType {
  tabs: string[];
  active: number;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const getItem = (
  tab: string,
  index: number,
  className: string = '',
  active: number,
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
): JSX.Element => {
  const isActive = index === active
  return (
    <TabListItem key={`item${index}`} role="tablist" className={`tab__item${className ? ' ' + className : ''}`}>
      <TabListButton
        id={`btn-${index}`}
        className={`tab__button${isActive ? ' tab__button--active' : ''}`}
        active={isActive}
        title={tab}
        value={index}
        onClick={onClick}
        type="button"
        role="tab"
        name={tab}
        aria-controls={`tabpane-${index}`}
        aria-selected={isActive}
      >
        {tab}
      </TabListButton>
    </TabListItem>
  )
}

const TabList: React.FC<TabListPropsType> = (props) => {
  const { tabs, onClick, active, className } = props
  return (
    <StyledTabList className={`tab__list${className ? ' ' + className : ''}`}>
      {tabs.map((tab, index) =>  getItem(tab, index, className, active, onClick))}
    </StyledTabList>
  )
}

export default TabList