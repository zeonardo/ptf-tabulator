import StyledContent from "./styles";

interface ContentProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode | React.ReactNode[]
}

const Content: React.FC<ContentProps> = ({ children, ...rest }) => {
  return (
    <StyledContent className='content' { ...rest }>
      {children}
    </StyledContent>
  );
}

export default Content;