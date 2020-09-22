import React, { useState } from 'react';
import { Form } from 'reactstrap';
import { Link } from 'gatsby';
import Alert from './Alert';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import SubmitBtn from './SubmitBtn';

const LoginForm = ({ login }) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const handleSubmit = (ev) => {
    ev.preventDefault();
    login(email, password);
  };
  return (
    <div className="form-container c-white text-center">
      <h2 className="medium-text">Login</h2>
      <Alert />
      <Form onSubmit={handleSubmit}>
        <EmailInput getEmail={(email) => setemail(email)} inputId="login-email" />
        <PasswordInput getPassword={(passw) => setpassword(passw)} inputId="login-password" />
        <SubmitBtn text="Login" />
        <Link to="/signup"><small className="form-text c-green bold">Don&apos;t have an account yet? Sign up</small></Link>
      </Form>
    </div>
  );
};

export default LoginForm;
