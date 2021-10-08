import { lighten } from 'polished';
import styled from 'styled-components';

interface NavLinkProps {
  isActive: boolean;
}

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: space-between;
  height: 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.backgroundLight};

  section {
    display: flex;
    align-items: center;
    margin-left: 12rem;
    gap: 1rem;

    p {
      color: ${({ theme }) => theme.text};
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.text};
      transition: 0.5s;
      cursor: pointer;

      &:hover {
        color: ${({ theme }) => theme.primary};
      }
    }
  }
`;

export const NavBar = styled.ul`
  ul {
    display: flex;
    gap: 2rem;
    align-items: center;
    margin-right: 30rem;
  }
`;

export const NavLinkContainer = styled.li<NavLinkProps>`
  a {
    text-transform: uppercase;
    color: ${props =>
      props.isActive ? props.theme.primary : props.theme.textHighlight};
    transition: 0.5s;

    &:hover {
      color: ${props =>
        props.isActive
          ? lighten(0.2, props.theme.primary)
          : lighten(0.2, props.theme.textHighlight)};
    }
  }
`;
