import { styled } from "styled-components";

export const HomeDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 60px auto;
  h1 {
    margin: 10px auto;
  }
  @media only screen and (max-width: 767px) {
    text-align: center;
    width: 98%;
    margin: 15px auto;
  
  }
`;

export const PortadaHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  width: 95%;
  

  margin: 20px auto;
  @media only screen and (max-width: 767px) {
    gap: 10px;
    flex-direction: column;
    text-align: center;
    
    
  }
`;

export const ImgHome = styled.img`
  height: 350px;
  width: 400px;
  border-radius: 5px;
  object-fit: cover;
  border-radius: 8px;
  @media only screen and (max-width: 767px) {
    height: 250px;
    width: 300px;
   
  }

  //background-color: red;
`;
export const TextHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  @media only screen and (max-width: 767px) {
    font-size: 18px;
  }
`;
