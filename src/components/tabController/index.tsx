import React, { useState, useCallback } from "react";
import Tab from "../tab";
import StyledTabController from "./styles";

interface TabControllerProps extends React.ComponentPropsWithoutRef<"div"> {
  //props
}

const TabController: React.FC<TabControllerProps> = ({ className, ...rest }) => {
  const [activeIndex, setActiveIndex] = useState(1)

  const onClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    const index = +event.currentTarget.value
    setActiveIndex(index);
  }, []);

  return (
    <StyledTabController className={`tab-controller${className ? ` ${className}` : ''}`} data-tab={activeIndex} { ...rest }>
      <Tab className="controlled" active={activeIndex} onActiveChange={onClick}>
        <Tab.Pane title="First Pane Controlled">
          <>
            <strong>First</strong> Pane Body
          </>
        </Tab.Pane>
        <Tab.Pane title="Second Pane Controlled">
          <>
            Second <strong>Pane</strong> Body
          </>
        </Tab.Pane>
        <Tab.Pane title="Third Pane Controlled">
          <>
            Third Pane <strong>Body</strong>
          </>
        </Tab.Pane>
      </Tab>
    </StyledTabController>
  )
}

export default TabController
