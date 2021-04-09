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

function Login() {
  const router = useRouter()

  const [dataLogin, setDataLogin] = React.useState({
    email:null,
    password:null
  })
  

  const onSubmit = () => {
    if(!dataLogin.email && !dataLogin.password) {
      console.log('tidak ada data')
      return
    }
    auth.login(dataLogin)
    .then(res => {
      // console.log(res)
      if(res.code == '202'){
        localStorage.setItem('token', res.accessToken)
        router.push('/admin/dashboard')
      }else{
        console.log('unauthorized')
      }
    })
    .catch(err => console.log(err))
  }

  const handleChangeValue = (e) => {
    const nama = e.target.name;
    const value = e.target.value;

    setDataLogin({
      ...dataLogin,
      [nama]: value,
    })
  }
  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          {/* <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-3">
              <small>Sign in with</small>
            </div>
            <div className="btn-wrapper text-center">
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={require("assets/img/icons/common/github.svg")}
                  />
                </span>
                <span className="btn-inner--text">Github</span>
              </Button>
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={require("assets/img/icons/common/google.svg")}
                  />
                </span>
                <span className="btn-inner--text">Google</span>
              </Button>
            </div>
          </CardHeader> */}
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Sign in</small>
            </div>
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                    name="email"
                    required
                    onChange={(e) => handleChangeValue(e)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    name="password"
                    autoComplete="new-password"
                    onChange={(e) => handleChangeValue(e)}
                    required
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-center">
                <Button className="my-4" color="primary" type="button" onClick={onSubmit}>
                  Sign in
                </Button>
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
