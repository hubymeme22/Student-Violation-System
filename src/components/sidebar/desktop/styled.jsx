import styled from 'styled-components';

export const SideContainer = styled.div`
  background-color: ${({ theme }) => theme.red};
  color: white;
  width: 320px;
  border-radius: 25px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2em 2em 5em 2em;

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2em;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const UserInfo = styled.div`
  text-align: center;
`;

export const UserIcon = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background-color: white;
`;

export const Username = styled.p`
  font-size: 24px;
`;

export const Name = styled.p`
  font-size: 16px;
`;

// Navigation
export const LinkContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  width: 100%;

  li:has(div > a.active) {
    background-color: white;

    a,
    svg {
      color: black;
    }

    a {
      font-weight: bold;
    }
  }
`;

export const StyledDiv = styled.div`
  margin: 0 auto;
  width: 75%;
  display: flex;
  align-items: center;
  gap: 1em;

  svg {
    color: inherit;
    pointer-events: none;
    font-size: 20px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const StyledLink = styled.li`
  list-style-type: none;
  width: 100%;
  border-radius: 20px;
  padding: 0.25em;
  transition: 100ms;

  &:hover {
    color: black;
  }
`;

export const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;

  button {
    color: white;
    background-color: transparent;
    border: 0;
    font-size: 20px;
    transition: 100ms;
    width: 100%;
    border-radius: 20px;
    padding: 5px 15px;

    &:hover {
      background-color: white;
      color: black;
    }
  }
`;
