import { styled } from "styled-components";

export const FooterCss = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333;
  height: 80px;
  margin-top: 30px;
`;

export const FooterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333;
`;

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #333;
  padding: 15px;

  .social {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 20px;
    gap: 40px;
    background-color: #333;

    a {
      color: #999;
      font-size: 24px;
      padding: 5px;
      transition: all 0.3s ease-in-out;

      &:hover {
        transform: translateY(-5px);
        color: white;
      }
    }
  }
`;
