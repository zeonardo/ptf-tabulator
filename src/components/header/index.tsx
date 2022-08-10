import StyledHeader from './styles'

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode | React.ReactNode[]
}

const Header: React.FC<HeaderProps> = ({ children, ...rest }) => {
  return (
    <StyledHeader className="header" role="banner" { ...rest }>
      {children}
    </StyledHeader>
  );
}

export default Header;