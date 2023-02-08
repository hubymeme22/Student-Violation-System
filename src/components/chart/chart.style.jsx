import styled from "styled-components";

// export const BarChart = styled.div`
//   display: flex;
//   justify-content: center;

// `;

export const DashTitle = styled.p`
  font-family: "Staatliches", "Poppins", sans-serif;
  font-size: 30px; ;
`;

export const Username = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 20px;
`;

export const Students = styled.div`
  background-color: ${({ theme }) => theme.darkGreen};
  height: 150px;
  width: 200px;
  border-radius: 20px;
  color: white;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  svg {
    font-size: 60px;
  }
`;

export const Violations = styled.div`
  background-color: ${({ theme }) => theme.darkRed};
  height: 150px;
  width: 200px;
  border-radius: 20px;
  color: white;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  svg {
    font-size: 60px;
  }
`;

export const Log = styled.div`
  display: flex;
  gap: 50px;
  width: 100%;
  height: 100%;
  justify-content: center;
  color: white;
`;
export const StyledBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 900px;
  height: 300px;
`;
