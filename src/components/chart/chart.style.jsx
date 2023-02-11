import styled from "styled-components";
import PieChart from "./PieChart";
// export const BarChart = styled.div`
//   display: flex;
//   justify-content: center;

// `;
export const MyChart = styled.div`
  border: 2px solid;
  border-color: red;
  padding: 10px;
  border-radius: 10px;
  background-color: black;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

  @media screen and (max-width: 768px) {
    height: 45%;
    width: 100%;
  }
  @media screen and (max-width: 600px) {
    padding: 5px;
    height: 40%;
    width: 100%;
  }
`;
export const DashTitle = styled.p`
  font-family: "Staatliches", "Poppins", sans-serif;
  font-size: 33px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Username = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 23px;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

export const Students = styled.div`
  background-color: ${({ theme }) => theme.darkGreen};
  height: 200px;
  width: 250px;
  border-radius: 20px;
  color: white;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  svg {
    font-size: 80px;
  }

  @media screen and (max-width: 768px) {
    height: 150px;
    width: 200px;
    font-size: 10px;
    gap: 10px;
    svg {
      font-size: 40px;
    }
  }
  @media screen and (max-width: 500px) {
    height: 100px;
    width: 150px;
    font-size: 10px;
    gap: 10px;
    svg {
      font-size: 30px;
    }
  }
`;

export const Violations = styled.div`
  background-color: ${({ theme }) => theme.darkRed};
  height: 200px;
  width: 250px;
  border-radius: 20px;
  color: white;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  svg {
    font-size: 80px;
  }

  @media screen and (max-width: 768px) {
    height: 150px;
    width: 200px;
    font-size: 10px;
    gap: 10px;
    svg {
      font-size: 40px;
    }
  }
  @media screen and (max-width: 500px) {
    height: 100px;
    width: 150px;
    font-size: 10px;
    gap: 10px;
    svg {
      font-size: 30px;
    }
  }
`;

export const Log = styled.div`
  display: flex;
  gap: 50px;
  height: 100%;
  width: 100%;
  justify-content: center;
  padding: 50px;

  @media screen and (max-width: 768px) {
    padding: 70px;
    gap: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  @media screen and (max-width: 500px) {
    justify-content: flex-start;
    padding: 40px;
    gap: 15px;
  }
`;
export const StyledBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 900px;
  height: 300px;
`;

export const ChartTitle = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
  }
  @media screen and (max-width: 500px) {
    padding: 30px;
  }
`;
