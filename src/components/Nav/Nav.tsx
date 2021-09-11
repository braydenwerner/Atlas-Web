import { AppBar, Toolbar } from '@material-ui/core'

import * as Styled from './Nav.styled'

export const Nav: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Styled.NavLinkContainer>
          <Styled.NavLink href="/">Home</Styled.NavLink>
          <Styled.NavLink href="privacy">Privacy Policy</Styled.NavLink>
        </Styled.NavLinkContainer>
      </Toolbar>
    </AppBar>
  )
}
