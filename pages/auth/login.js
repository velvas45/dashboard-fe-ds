import React from "react";
import { useRouter } from 'next/router'

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
// layout for this page
import Auth from "layouts/Auth.js";

// import Auth API
import {auth} from "./../../utils/api"

// validation hook form
import { useForm, Controller } from "react-hook-form";

// utils
import {encrypt} from './../../utils/cryptoUtils'

function Login() {
  const { register, handleSubmit, control, formState: { errors }} = useForm();
  const router = useRouter()

  React.useEffect(() => {
    // check apakah user sudah login apa tidak
    if(window.localStorage.getItem('token') !== null){
      router.push("/auth/dashboard");
    }
  },[])
  

  const handleOnsubmit = (data) => {
    auth.login(data)
    .then(res => {
      // console.log(res)
      if(res.status >= 200 && res.status < 300){
        console.log(res)
        const dataUser = res?.data?.data
        localStorage.setItem('users', encrypt(JSON.stringify(dataUser)))
        localStorage.setItem('token', encrypt(JSON.stringify(res?.data?.accessToken)))
        router.push('/admin/dashboard')
      }
    })
    .catch(err => console.log(err))
  }

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Sign in</small>
            </div>
            <Form role="form" onSubmit={handleSubmit(handleOnsubmit)}>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Controller
                    name="email"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <Input type="email" placeholder="email" {...field} />}
                  />
                </InputGroup>
              </FormGroup>
              {errors.email && (
                <p className="text-danger">Email is required</p>
              )}
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Controller
                    name="password"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <Input type="password" placeholder="password" {...field} />}
                  />
                </InputGroup>
              </FormGroup>
              {errors.password && (
                <p className="text-danger">Password is required</p>
              )}
              <div className="text-center">
                <input className="btn my-4 btn-primary text-white" type="submit" />
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}

Login.layout = Auth;

export default Login;
