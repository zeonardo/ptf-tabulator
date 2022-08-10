import React from "react"

//START tab
//TODO: Update types to prevent out-of-bound active / initialActive values (if it's technically possible)
type TabDefaultProps = React.HTMLAttributes<HTMLElement> & {//intersection for controlled and uncontrolled mode
  children: [TypeTabPaneChild, ...TypeTabPaneChild[]];
  // children?: never;
}
type TabControlledProps<T = number> = TabDefaultProps & {//controlled mode
  active: T;
  onActiveChange: (event: React.MouseEvent<HTMLButtonElement>) => void;
  initialActive?: never;//or undefined,
}
type TabUncontrolledProps = TabDefaultProps & {//uncontrolled mode
  initialActive: number;
  active?: never;
  onActiveChange?: never;
}

export type TypeTabProps = (TabControlledProps | TabUncontrolledProps)//types merge
//END tab

//START pane
export type TypeTabPaneProps =  React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  index?: number;
  active?: boolean;
}

export type TypeTabPaneChild = React.ReactElement<TypeTabPaneProps>

export type TypeTabButtonProps = {
  active: boolean;
}
//END pane




type BuildArrayMinLength<
  T,
  N extends number,
  Current extends T[]
> = Current['length'] extends N
  ? [...Current, ...T[]]
  : BuildArrayMinLength<T, N, [...Current, T]>;

type ArrayMinLength<T, N extends number> = BuildArrayMinLength<T, N, []>;