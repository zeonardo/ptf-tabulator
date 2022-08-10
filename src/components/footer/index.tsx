import StyledFooter from './styles'

interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode | React.ReactNode[]
}

const Footer: React.FC<FooterProps> = ({ children, ...rest }) => {
  return (
    <StyledFooter className="footer" role="contentinfo" { ...rest }>
      {children}
    </StyledFooter>
  );
}

export default Footer;