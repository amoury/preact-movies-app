import { h, Component } from 'preact';
import {Link} from 'preact-router/match';
import styled from 'styled-components';
import MovieIcon from './MovieIcon';
import PlayIcon from './PlayIcon';
import BinocularIcon from './BinocularIcon';
import TVIcon from './TVIcon';
import HeartIcon from './HeartIcon';

const SideNav = styled.nav`
  position: fixed;
  height: 100vh;
  left: 0;
  top: 0;
  width: 80px;
  background: ${({ theme }) => theme.primaryDark };
`

const NavItem = styled(Link)`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.first && `#435472`};
  
  &.active {
    background: ${props => props.theme.secondary }
  }
`

const navItems = [
  { Icon: PlayIcon, href: '/'  },
  { Icon: BinocularIcon, href: '/'  },
  { Icon: MovieIcon, href: '/movies'  },
  { Icon: TVIcon, href: '/tv'  },
  { Icon: HeartIcon, href: '/favorites'  },
]

export default () => {
  return (
    <SideNav>
      {navItems.map((item, index) => {
        let IconComponent = item.Icon;
        return (
          <NavItem 
            first={index === 0}
            activeClassName={index !== 0 && `active`}
            href={item.href}
          >
            <IconComponent />
          </NavItem>
      )})}
    </SideNav>
  )
}

  // background: ${props => props.background && props.background};