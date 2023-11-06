import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  gap: 8px;
  @media only screen and (min-width: 768px) {
    gap: 14px;
  }
`;

export const Input = styled.input`
  padding: 0 18px;
  height: 50px;
  width: 100px;
  background-color: inherit;
  font-size: 14px;
  color: #f3f3f3;
  letter-spacing: -0.02em;
  outline: none;
  border: ${({ errors, value }) =>
    value && errors
      ? '1px solid #3cbc8150'
      : errors
      ? '1px solid #da141450'
      : '1px solid rgba(243, 243, 243, 0.5)'};
  border-radius: 200px;
  box-sizing: border-box;
  @media only screen and (min-width: 768px) {
    padding-left: 24px;
    width: 150px;
    height: 56px;
    font-size: 17px;
    line-height: 1.56;
  }
  :focus {
    outline: none;
  }
  :hover {
    border: 1px solid rgba(243, 243, 243, 1);
  }
`;

export const Button = styled.button`
  margin-left: auto;
  font-size: 32px;
  font-weight: 400;
  border-radius: 50%;
  border: none;
  background-color: inherit;
  color: #f3f3f3;
  transform: rotate(45deg);
  @media only screen and (min-width: 768px) {
    font-size: 36px;
  }
  :hover {
    color: #f3f3f380;
    scale: 1.25;
  }
  &:active {
    scale: 0.85;
  }
`;

export const ErrorText = styled.p`
  margin-left: 18px;
  display: flex;
  align-items: flex-start;
  position: absolute;
  top: 50px;
  font-size: 12px;
  line-height: calc(14 / 12);
  letter-spacing: 0;
  color: #da1414;
  @media only screen and (min-width: 768px) {
    top: 58px;
    font-size: 14px;
    line-height: calc(18 / 14);
  }
`;

export const ErrorIcon = styled.span`
  position: absolute;
  top: -35px;
  right: ${({ measure, value }) =>
    measure === 'measure' ? '-12px' : value ? '-134px' : '-24px'};
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 18px;
  height: 18px;
  color: ${({ measure, value }) => (!measure && value ? '#3cbc81' : '#da1414')};
  border: ${({ measure, value }) =>
    !measure && value ? '2px solid #3cbc81' : '2px solid #da1414'};
  border-radius: 50%;
  @media only screen and (min-width: 768px) {
    top: -42px;
    right: ${({ measure, value }) =>
      measure === 'measure' ? '-46px' : value ? '-256px' : '-124px'};
    width: 20px;
    height: 20px;
  }
`;
