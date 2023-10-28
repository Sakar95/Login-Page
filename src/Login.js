import React from 'react';
import {
  LoginContainer,
  LoginForm,
  FormTitle,
  FormField,
  Label,
  Input,
  SubmitButton,
  CenteredButtonContainer 
} from './Components/StyledComponents'

const Login = () => {
    return (
      <LoginContainer>
        <LoginForm>
          <FormTitle>Login</FormTitle>
          <FormField>
            <Label htmlFor="username">Username</Label>
            <Input type="text" id="username" placeholder='Enter here' />
          </FormField>
          <FormField>
            <Label htmlFor="password">Email</Label>
            <Input type="password" id="password" placeholder='Enter here'  />
          </FormField>
          <FormField>
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" placeholder='Enter here'  />
          </FormField>
          <CenteredButtonContainer>
            <SubmitButton type="submit">Login</SubmitButton>
          </CenteredButtonContainer>
        </LoginForm>
      </LoginContainer>
    );
  };

export default Login;
