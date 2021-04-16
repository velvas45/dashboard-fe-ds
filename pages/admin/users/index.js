import React from "react";
import Routes from "next/router";
import "@fortawesome/fontawesome-free/css/all.min.css";
// reactstrap components
import {
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Tooltip,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Alert,
} from "reactstrap";
// rc-table components
import Table from "rc-table";

// layout for this page
import Admin from "layouts/Admin.js";

import Header from "components/Headers/Header.js";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// validation hook form
import { useForm, Controller } from "react-hook-form";

// import Auth API
import { user } from "../../../utils/api";
import { peruri } from "./../../../utils/api";

// import utils
import { decrypt } from "../../../utils/cryptoUtils";
import { formatIsoDate } from "../../../utils/date/dateFormat";

import InputHooks from "./../../../components/formInput/Input";

import fields from "./fields";

const schema = yup.object().shape({
  firstName: yup.string().required("Tidak Boleh Kosong"),
  lastName: yup.string().required("Tidak Boleh Kosong"),
  phone: yup
    .string()
    .required("Tidak Boleh Kosong")
    .max(12, "Nomor telephone maksimal 12 angka")
    .min(8, "Nomor telephone minimal 8 angka"),
  email: yup.string().email().required("Tidak Boleh Kosong"),
  password: yup
    .string()
    .max(20, "Maksimal karakter 20")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      " Password min 8 letter, must contain symbols, numbers, uppercase letters, lowercase letters"
    ),
  address: yup.string().required("Tidak Boleh Kosong"),
  type: yup.string(),
  ktp: yup
    .string()
    .required("Tidak Boleh Kosong")
    .max(16, "Nomor KTP maksimal 16 karakter"),
  ktpPhoto: yup.string().required("File required"),
  peruri_type: yup.string().required("Tidak Boleh Kosong"),
  npwp: yup.string().max(16, "Nomor KTP maksimal 16 karakter"),
  npwpPhoto: yup.string(),
  city: yup.string().required("Tidak Boleh Kosong"),
  province: yup.string().required("Tidak Boleh Kosong"),
  gender: yup.string().required("Tidak Boleh Kosong"),
  placeofBirth: yup.string().required("Tidak Boleh Kosong"),
  dateofBirth: yup.string().required("Tidak Boleh Kosong"),
  // orgUnit: yup.string().required("Tidak Boleh Kosong"),
  // workUnit: yup.string().required("Tidak Boleh Kosong"),
  // position: yup.string().required("Tidak Boleh Kosong"),
});

const readAsDataURL = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = () => {
      reject(error);
    };
  });
};

const Users = (props) => {
  const [users, setUsers] = React.useState(null);
  const [token, setToken] = React.useState(null);
  const [showPassword, setShowPassword] = React.useState(false);
  const [tooltipOpen, setTooltipOpen] = React.useState(false);
  const [dataApi, setDataApi] = React.useState(null);
  const [modal, setModal] = React.useState(false);
  const [modalUser, setModalUser] = React.useState(false);
  const [base64Url, setBase64Url] = React.useState({
    ktp: null,
    npwp: null,
    selfPhoto: null,
  });
  const [isCustomError, setIsCustomError] = React.useState({
    fileSizeSelf: false,
    fileTypeSelf: false,
    fileSizeNpwp: false,
    fileTypeNpwp: false,
    fileSizeKtp: false,
    fileTypeKtp: false,
  });

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const clearImage = (type) => {
    if (base64Url) {
      if (type === "ktp") {
        setBase64Url({
          ...base64Url,
          ktp: null,
        });
      } else if (type === "npwp") {
        setBase64Url({
          ...base64Url,
          npwp: null,
        });
      } else if (type === "selfPhoto") {
        setBase64Url({
          ...base64Url,
          selfPhoto: null,
        });
      }
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "a",
      width: "14.2%",
    },
    {
      id: "123",
      title: "Email",
      dataIndex: "email",
      key: "b",
      width: "14.2%",
    },
    {
      title: "Perurica Account",
      children: [
        {
          title: "Username",
          dataIndex: "username",
        },
        {
          title: "Password",
          dataIndex: "password",
        },
      ],
      key: "c",
      width: "14.2%",
    },
    {
      title: "Quota",
      children: [
        {
          title: "Usage",
          dataIndex: "usage",
        },
        {
          title: "Limit",
          dataIndex: "limit",
        },
        {
          title: "Desc",
          dataIndex: "desc",
        },
      ],
      key: "d",
      width: "14.2%",
    },
    {
      title: "Status",
      dataIndex: "",
      key: "e",
      width: "14.2%",
    },
    {
      title: "Last Login",
      dataIndex: "lastLogin",
      key: "f",
      width: "14.2%",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "g",
      width: "14.2%",
      render(e, row, index) {
        // console.log(e, row, index);
        const email = row.email;
        return (
          <div className="">
            <Button color="warning" onClick={toggle}>
              <i className="ni ni-collection"></i>
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>Modal title</ModalHeader>
              <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={toggle}>
                  Do Something
                </Button>{" "}
                <Button color="secondary" onClick={toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>

            <Button color="primary" onClick={() => onVerification(email)}>
              <i className="fas fa-user-check"></i>
            </Button>

            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>Modal title</ModalHeader>
              <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={toggle}>
                  Do Something
                </Button>{" "}
                <Button color="secondary" onClick={toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>

            <Button color="danger" onClick={toggle}>
              <i className="ni ni-lock-circle-open"></i>
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>Modal title</ModalHeader>
              <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={toggle}>
                  Do Something
                </Button>{" "}
                <Button color="secondary" onClick={toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        );
      },
    },
  ];

  const data = dataApi?.map((data, idx) => ({
    name: "123",
    email: data.email,
    password: "",
    lastLogin: formatIsoDate(data.last_login),
    key: idx,
  }));

  React.useEffect(() => {
    if (window.localStorage.getItem("token") !== null) {
      if (window.localStorage.getItem("users") !== null) {
        setUsers(JSON.parse(decrypt(window.localStorage.getItem("users"))));
      }
      const data = {
        where: {},
        orderBy: "DESC",
      };
      const token = JSON.parse(decrypt(window.localStorage.getItem("token")));

      setToken(token);

      user
        .allUsers(data, token)
        .then((res) => {
          if (res.status == "201") {
            setDataApi(res?.data?.data);
          }
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const toggle = () => setModal(!modal);
  const newUser = () => {
    setModalUser(!modalUser);
    if (modalUser) {
      reset();
    }
  };
  const tooltipToggle = () => setTooltipOpen(!tooltipOpen);

  const onVerification = (email) => {
    const data = {
      email,
    };
    peruri
      .signatureLink(data, token)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const onSubmit = (values) => {
    const data = {
      first_name: values.firstName,
      last_name: values.lastName,
      phone: values.phone,
      email: values.email,
      password: "",
      address: values.address,
      ktp: values.ktp,
      ktpPhoto: values.ktpPhoto,
      peruri_type: values.peruri_type,
      npwp: values.npwp,
      npwpPhoto: values.npwpPhoto,
      city: values.city,
      province: values.province,
      gender: values.gender,
      placeofBirth: values.placeofBirth,
      dateofBirth: values.dateofBirth,
      orgUnit: "",
      workUnit: "",
      position: "",
    };

    peruri
      .peruriRegistration(data, token)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleFileImages = async (e, type) => {
    const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
    const file = e.target.files[0];
    if (!file) return;

    if (type === "ktp") {
      if (SUPPORTED_FORMATS.includes(file.type)) {
        if (file.size <= 2097152) {
          const base64 = await readAsDataURL(file);
          setIsCustomError({
            ...isCustomError,
            fileSizeKtp: false,
            fileTypeKtp: false,
          });
          setBase64Url({
            ...base64Url,
            ktp: base64,
          });
          // console.log(base64)
          setValue("ktpPhoto", base64.split(",")[1], { shouldValidate: true });
        } else {
          setIsCustomError({
            ...isCustomError,
            fileSizeKtp: true,
            fileTypeKtp: false,
          });
        }
      } else {
        setIsCustomError({
          ...isCustomError,
          fileSizeKtp: false,
          fileTypeKtp: true,
        });
      }
    } else if (type === "npwp") {
      if (SUPPORTED_FORMATS.includes(file.type)) {
        if (file.size <= 2097152) {
          setIsCustomError({
            ...isCustomError,
            fileSizeNpwp: false,
            fileTypeNpwp: false,
          });
          const base64 = await readAsDataURL(file);
          setBase64Url({
            ...base64Url,
            npwp: base64,
          });
          // console.log(base64)
          setValue("npwpPhoto", base64.split(",")[1], { shouldValidate: true });
        } else {
          setIsCustomError({
            ...isCustomError,
            fileSizeNpwp: true,
            fileTypeNpwp: false,
          });
        }
      } else {
        setIsCustomError({
          ...isCustomError,
          fileSizeNpwp: false,
          fileTypeNpwp: true,
        });
      }
    } else if (type === "selfPhoto") {
      if (SUPPORTED_FORMATS.includes(file.type)) {
        if (file.size <= 2097152) {
          setIsCustomError({
            ...isCustomError,
            fileSizeSelf: false,
            fileTypeSelf: false,
          });
          const base64 = await readAsDataURL(file);
          setBase64Url({
            ...base64Url,
            npwp: base64,
          });
          setValue("selfPhoto", base64.split(",")[1], { shouldValidate: true });
        } else {
          setIsCustomError({
            ...isCustomError,
            fileSizeSelf: true,
            fileTypeSelf: false,
          });
        }
      } else {
        setIsCustomError({
          ...isCustomError,
          fileSizeSelf: false,
          fileTypeSelf: true,
        });
      }
    }
  };

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt-3" fluid>
        <div className="d-flex justify-content-between mb-3">
          <h2>User List</h2>
          <div>
            <Button color="danger" onClick={newUser}>
              Add New User
            </Button>
            <Modal isOpen={modalUser} toggle={newUser}>
              <ModalHeader toggle={newUser}>Add New User</ModalHeader>
              <ModalBody>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  {fields({
                    control,
                    errors,
                    isCustomError,
                    base64Url,
                    handleFileImages,
                    clearImage,
                    Controller,
                  }).map((data, idx) => {
                    return (
                      <FormGroup row key={idx}>
                        <InputHooks
                          control={data.control}
                          label={data.label}
                          fieldName={data.fieldName}
                          colSmLabel={data.colSmLabel}
                          colSmInput={data.colSmInput}
                          plchldr={data.plchldr}
                          errors={data.errors}
                          type={data.type}
                          fileData={data.fileData}
                          fieldFiledData={data.fieldFiledData}
                          customError={data.customError || ""}
                          onChange={data.onChange}
                          onClick={data.onClick}
                          errorType={data.errorType}
                          errorSize={data.errorSize}
                          Controller={data.Controller}
                          dataSelect={data.dataSelect}
                        />
                      </FormGroup>
                    );
                  })}
                  <Controller
                    id="type"
                    name="type"
                    defaultValue="user"
                    control={control}
                    render={({ field }) => <Input type="hidden" {...field} />}
                  />
                  <Controller
                    id="peruriType"
                    name="peruri_type"
                    defaultValue="INDIVIDUAL"
                    control={control}
                    render={({ field }) => <Input type="hidden" {...field} />}
                  />

                  <FormGroup check row>
                    <Col sm={16} className="text-center">
                      <input
                        type="submit"
                        className="btn btn-primary"
                        value="Submit"
                      />
                      <Button color="secondary" onClick={toggle}>
                        Cancel
                      </Button>
                    </Col>
                  </FormGroup>
                </Form>
              </ModalBody>
              {/* <ModalFooter>
                <Button color="primary" onClick={toggle}>
                  Do Something
                </Button>{" "}
                <Button color="secondary" onClick={toggle}>
                  Cancel
                </Button>
              </ModalFooter> */}
            </Modal>

            <Button color="warning">Kyc Verification</Button>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12">
            <Table
              columns={columns}
              // rowClassName={(record, i) => `row-${i}`}
              expandedRowRender={(record) => <p>extra: {record.a}</p>}
              expandedRowClassName={(record, i) => `ex-row-${i}`}
              data={data}
              className="table text-center"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

Users.layout = Admin;

export default Users;
