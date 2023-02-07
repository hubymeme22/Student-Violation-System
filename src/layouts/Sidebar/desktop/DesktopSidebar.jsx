import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  SideContainer,
  UserInfo,
  UserIcon,
  Username,
  Name,
  LinkContainer,
  StyledDiv,
  StyledLink,
  AccountContainer,
} from './styled';

// Icons
import { MdDashboard } from 'react-icons/md';
import { GiGraduateCap } from 'react-icons/gi';
import { RiFileList3Line } from 'react-icons/ri';

function DesktopSideBar() {
  return (
    <>
      <SideContainer>
        <section>
          <UserInfo>
            <UserIcon />
            <Username>Username</Username>
            <Name>Poul De Chavez</Name>
          </UserInfo>

          <LinkContainer>
            <StyledLink>
              <StyledDiv>
                <MdDashboard />
                <NavLink to="/">Dashboard</NavLink>
              </StyledDiv>
            </StyledLink>

            <StyledLink>
              <StyledDiv>
                <GiGraduateCap />
                <NavLink to="/students">Students</NavLink>
              </StyledDiv>
            </StyledLink>

            <StyledLink>
              <StyledDiv>
                <RiFileList3Line />
                <NavLink to="/records">Records</NavLink>
              </StyledDiv>
            </StyledLink>
          </LinkContainer>
        </section>

        <AccountContainer>
          {/* Button */}
          <button>Account</button>
          <button>Log Out</button>
        </AccountContainer>
      </SideContainer>
    </>
  );
}

export default DesktopSideBar;
