import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: rgb(17, 24, 39);
`;

export const LoginForm = styled.form`
  width: 100%;
  max-width: 325px;
  padding: 20px 35px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  background-color: rgb(31,41,55);

  @media (max-width: 600px) {
    max-width: 50%;
  }

  @media (max-width: 500px) {
    max-width: 60%;
  }

  @media (max-width: 400px) {
    padding: 20px 20px;
    max-width:70%;
  }
`;

export const CenteredButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SubmitButton = styled.button`
  width: 20%;
  padding: 10px;
  margin-top:20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.5s; 

  @media (max-width: 500px) {
    font-size: 14px;
    width:60px;
  }

  &:hover {
    background-color: blue; 
  }
`;

export const FormTitle = styled.h2`
  color:white;
  text-align: center;
  margin-bottom: 20px;
`;

export const FormField = styled.div`
  margin: 8px 0;
`;

export const Label = styled.label`
  color:white;
  display: block;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 92%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none; 

  @media (max-width: 420px) {
    /* Adjust styles for screens with a maximum width of 768px */
    font-size: 14px;
  }
`;
