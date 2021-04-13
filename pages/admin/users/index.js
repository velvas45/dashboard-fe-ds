import React from "react";
import Routes from "next/router";
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
  FormText,
  Col,
  Alert,
  CardImg,
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

// import utils
import { decrypt } from "../../../utils/cryptoUtils";
import { formatIsoDate } from "../../../utils/date/dateFormat";

const schema = yup.object().shape({
  firstName: yup.string().required("Tidak Boleh Kosong"),
  lastName: yup.string().required("Tidak Boleh Kosong"),
  phone: yup
    .string()
    .required("Tidak Boleh Kosong")
    .max(12, "Nomor telephone maksimal 12 angka")
    .min(8, "Nomor telephone minimal 8 angka"),
  email: yup.string().email().required("Tidak Boleh Kosong"),
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
  // selfPhoto: yup.string().required('Tidak Boleh Kosong'),
  // city: yup.string().required('Tidak Boleh Kosong'),
  // province: yup.string().required('Tidak Boleh Kosong'),
  // gender: yup.string().required('Tidak Boleh Kosong'),
  // placeofBirth: yup.string().required('Tidak Boleh Kosong'),
  // dateofBirth: yup.string().required('Tidak Boleh Kosong'),
  // orgUnit: yup.string().required('Tidak Boleh Kosong'),
  // workUnit: yup.string().required('Tidak Boleh Kosong'),
  // position: yup.string().required('Tidak Boleh Kosong')
});

const readAsDataURL = (file, cb) => {
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
    handleSubmit,
    control,
    setValue,
    formState: { errors },
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
      render() {
        return (
          <div className="">
            <Button color="warning" onClick={toggle} id="toolTipEdit">
              <i className="ni ni-collection"></i>
            </Button>
            <Tooltip
              placement="top"
              isOpen={tooltipOpen}
              target="toolTipEdit"
              toggle={tooltipToggle}
            >
              Edit
            </Tooltip>
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
      const data = {
        where: {},
        orderBy: "DESC",
      };
      const token = JSON.parse(decrypt(window.localStorage.getItem("token")));
      console.log(token);
      user
        .allUsers(data, token)
        .then((res) => {
          if (res.status == "201") {
            setDataApi(res?.data?.data);
            console.log(res?.data?.data);
            // console.log(res)
          }
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const toggle = () => setModal(!modal);
  const newUser = () => setModalUser(!modalUser);
  const tooltipToggle = () => setTooltipOpen(!tooltipOpen);

  const onVerification = () => Routes.push("/admin/digital-signature");

  const onSubmit = (data) => console.log(data);

  const handleFileImages = async (e, type) => {
    setIsCustomError({
      ...isCustomError,
      fileSizeSelf: false,
      fileTypeSelf: false,
      fileSizeNpwp: false,
      fileTypeNpwp: false,
      fileSizeKtp: false,
      fileTypeKtp: false,
    });

    const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
    const file = e.target.files[0];
    if (!file) return;
    console.log(file);

    if (type === "ktp") {
      if (SUPPORTED_FORMATS.includes(file.type)) {
        if (file.size <= 2097152) {
          setIsCustomError({
            ...isCustomError,
            fileSizeSelf: false,
            fileTypeSelf: false,
            fileSizeNpwp: false,
            fileTypeNpwp: false,
            fileSizeKtp: false,
            fileTypeKtp: false,
          });
          const base64 = await readAsDataURL(file);
          setBase64Url({
            ...base64Url,
            ktp: base64,
          });
          // console.log(base64)
          setValue("ktpPhoto", base64.split(",")[1], { shouldValidate: true });
        } else {
          setIsCustomError({
            ...isCustomError,
            fileSizeSelf: false,
            fileTypeSelf: false,
            fileSizeNpwp: false,
            fileTypeNpwp: false,
            fileSizeKtp: true,
            fileTypeKtp: false,
          });
        }
      } else {
        setIsCustomError({
          ...isCustomError,
          fileSizeSelf: false,
          fileTypeSelf: false,
          fileSizeNpwp: false,
          fileTypeNpwp: false,
          fileSizeKtp: false,
          fileTypeKtp: true,
        });
      }
    } else if (type === "npwp") {
      if (SUPPORTED_FORMATS.includes(file.type)) {
        if (file.size <= 2097152) {
          setIsCustomError({
            ...isCustomError,
            fileSizeSelf: false,
            fileTypeSelf: false,
            fileSizeNpwp: false,
            fileTypeNpwp: false,
            fileSizeKtp: false,
            fileTypeKtp: false,
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
            fileSizeSelf: false,
            fileTypeSelf: false,
            fileSizeNpwp: true,
            fileTypeNpwp: false,
            fileSizeKtp: false,
            fileTypeKtp: false,
          });
        }
      } else {
        setIsCustomError({
          ...isCustomError,
          fileSizeSelf: false,
          fileTypeSelf: false,
          fileSizeNpwp: false,
          fileTypeNpwp: true,
          fileSizeKtp: false,
          fileTypeKtp: false,
        });
      }
    } else if (type === "selfPhoto") {
      if (SUPPORTED_FORMATS.includes(file.type)) {
        if (file.size <= 2097152) {
          setIsCustomError({
            ...isCustomError,
            fileSizeSelf: false,
            fileTypeSelf: false,
            fileSizeNpwp: false,
            fileTypeNpwp: false,
            fileSizeKtp: false,
            fileTypeKtp: false,
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
            fileSizeSelf: false,
            fileTypeSelf: false,
            fileSizeNpwp: true,
            fileTypeNpwp: false,
            fileSizeKtp: false,
            fileTypeKtp: false,
          });
        }
      } else {
        setIsCustomError({
          ...isCustomError,
          fileSizeSelf: false,
          fileTypeSelf: false,
          fileSizeNpwp: false,
          fileTypeNpwp: true,
          fileSizeKtp: false,
          fileTypeKtp: false,
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
                  <FormGroup row>
                    <Label for="email" sm={4}>
                      Email
                    </Label>
                    <Col sm={8}>
                      <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                          <Input type="email" placeholder="Email" {...field} />
                        )}
                      />
                      {errors.email && (
                        <Alert color="danger" className="mt-3">
                          {errors.email?.message}
                        </Alert>
                      )}
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="firstName" sm={4}>
                      First Name
                    </Label>
                    <Col sm={8}>
                      <Controller
                        id="firstName"
                        name="firstName"
                        control={control}
                        render={({ field }) => (
                          <Input
                            type="text"
                            placeholder="Masukkan Nama Depan..."
                            {...field}
                          />
                        )}
                      />
                      {errors.firstName && (
                        <Alert color="danger" className="mt-3">
                          {errors.firstName?.message}
                        </Alert>
                      )}
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="lastName" sm={4}>
                      Last Name
                    </Label>
                    <Col sm={8}>
                      <Controller
                        id="lastName"
                        name="lastName"
                        control={control}
                        render={({ field }) => (
                          <Input
                            type="text"
                            placeholder="Masukkan Nama Belakang..."
                            {...field}
                          />
                        )}
                      />
                      {errors.lastName && (
                        <Alert color="danger" className="mt-3">
                          {errors.lastName?.message}
                        </Alert>
                      )}
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="phone" sm={4}>
                      No. Telephone
                    </Label>
                    <Col sm={8}>
                      <Controller
                        name="phone"
                        control={control}
                        render={({ field }) => (
                          <Input
                            type="text"
                            id="phone"
                            placeholder="+62813999828"
                            {...field}
                          />
                        )}
                      />
                      {errors.phone && (
                        <Alert color="danger" className="mt-3">
                          {errors.phone?.message}
                        </Alert>
                      )}
                    </Col>
                  </FormGroup>
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
                  <FormGroup row>
                    <Label for="address" sm={4}>
                      Address
                    </Label>
                    <Col sm={8}>
                      <Controller
                        id="address"
                        name="address"
                        control={control}
                        render={({ field }) => (
                          <Input
                            type="textarea"
                            name="text"
                            placeholder="Your Address.."
                            {...field}
                          />
                        )}
                      />
                      {errors.address && (
                        <Alert color="danger" className="mt-3">
                          {errors.address?.message}
                        </Alert>
                      )}
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="phone" sm={4}>
                      No. KTP
                    </Label>
                    <Col sm={8}>
                      <Controller
                        name="ktp"
                        control={control}
                        render={({ field }) => (
                          <Input
                            type="text"
                            id="ktp"
                            placeholder="17318..."
                            {...field}
                          />
                        )}
                      />
                      {errors.ktp && (
                        <Alert color="danger" className="mt-3">
                          {errors.ktp?.message}
                        </Alert>
                      )}
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="ktpPhoto" sm={4}>
                      Photo Ktp
                    </Label>
                    <Col sm={8}>
                      {base64Url.ktp && (
                        <>
                          <Button close onClick={() => clearImage("ktp")} />
                          <CardImg
                            top
                            width="100%"
                            className="bg-dark"
                            src={base64Url.ktp}
                            alt="Card image cap"
                          />
                        </>
                      )}
                      {!base64Url.ktp && (
                        <Controller
                          name="ktpPhoto"
                          control={control}
                          render={({ field }) => (
                            <Input
                              type="file"
                              id="ktpPhoto"
                              onChange={(e) => handleFileImages(e, "ktp")}
                            />
                          )}
                        />
                      )}
                      {isCustomError.fileSizeKtp && (
                        <Alert color="danger" className="mt-3">
                          Mohon Upload File dibawah 2mb
                        </Alert>
                      )}
                      {isCustomError.fileTypeKtp && (
                        <Alert color="danger" className="mt-3">
                          Mohon upload file dengan type png
                        </Alert>
                      )}
                      {errors.ktpPhoto && (
                        <FormText color="danger" className="mt-3">
                          {errors.ktpPhoto?.message}
                        </FormText>
                      )}
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="phone" sm={4}>
                      NPWP
                    </Label>
                    <Col sm={8}>
                      <Controller
                        name="npwp"
                        control={control}
                        render={({ field }) => (
                          <Input
                            type="text"
                            id="npwp"
                            placeholder="17318..."
                            {...field}
                          />
                        )}
                      />
                      {errors.ktp && (
                        <Alert color="danger" className="mt-3">
                          {errors.ktp?.message}
                        </Alert>
                      )}
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="npwpPhoto" sm={4}>
                      Photo NPWP
                    </Label>
                    <Col sm={8}>
                      {base64Url.npwp && (
                        <>
                          <Button close onClick={() => clearImage("npwp")} />
                          <CardImg
                            top
                            width="100%"
                            className="bg-dark"
                            src={base64Url.npwp}
                            alt="Card image cap"
                          />
                        </>
                      )}
                      {!base64Url.npwp && (
                        <Controller
                          name="npwpPhoto"
                          control={control}
                          render={({ field }) => (
                            <Input
                              type="file"
                              id="npwpPhoto"
                              onChange={(e) => handleFileImages(e, "npwp")}
                            />
                          )}
                        />
                      )}
                      {isCustomError.fileSizeNpwp && (
                        <Alert color="danger" className="mt-3">
                          Mohon Upload File dibawah 2mb
                        </Alert>
                      )}
                      {isCustomError.fileTypeNpwp && (
                        <Alert color="danger" className="mt-3">
                          Mohon upload file dengan type png
                        </Alert>
                      )}
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="selfPhoto" sm={4}>
                      Foto Selfie
                    </Label>
                    <Col sm={8}>
                      {base64Url.selfPhoto && (
                        <>
                          <Button
                            close
                            onClick={() => clearImage("selfPhoto")}
                          />
                          <CardImg
                            top
                            width="100%"
                            className="bg-dark"
                            src={base64Url.selfPhoto}
                            alt="Card image cap"
                          />
                        </>
                      )}
                      {!base64Url.selfPhoto && (
                        <Controller
                          name="selfPhoto"
                          control={control}
                          render={({ field }) => (
                            <Input
                              type="file"
                              id="selfPhoto"
                              onChange={(e) => handleFileImages(e, "selfPhoto")}
                            />
                          )}
                        />
                      )}
                      {isCustomError.fileSizeSelf && (
                        <Alert color="danger" className="mt-3">
                          Mohon Upload File dibawah 2mb
                        </Alert>
                      )}
                      {isCustomError.fileTypeSelf && (
                        <Alert color="danger" className="mt-3">
                          Mohon upload file dengan type png
                        </Alert>
                      )}
                    </Col>
                  </FormGroup>

                  <FormGroup>
                    <Label for="exampleSelectMulti">City</Label>
                    <Input type="select" name="selectMulti">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
                  </FormGroup>

                  <FormGroup>
                    <Label for="exampleSelectMulti">Gender</Label>
                    <Input type="select" name="selectMulti">
                      <option>select Gender</option>
                      <option>Man</option>
                      <option>Women</option>
                    </Input>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="province" sm={4}>
                      Province
                    </Label>
                    <Col sm={8}>
                      <Controller
                        name="province"
                        control={control}
                        render={({ field }) => (
                          <Input
                            type="text"
                            id="province"
                            placeholder="Enter your province..."
                            {...field}
                          />
                        )}
                      />
                      {errors.province && (
                        <Alert color="danger" className="mt-3">
                          {errors.province?.message}
                        </Alert>
                      )}
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="placeOfBirth" sm={4}>
                      Place Of Birth
                    </Label>
                    <Col sm={8}>
                      <Controller
                        name="placeOfBirth"
                        control={control}
                        render={({ field }) => (
                          <Input
                            type="text"
                            id="placeOfBirth"
                            placeholder="Enter your place of birth..."
                            {...field}
                          />
                        )}
                      />
                      {errors.placeOfBirth && (
                        <Alert color="danger" className="mt-3">
                          {errors.placeOfBirth?.message}
                        </Alert>
                      )}
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="dateOfBirth" sm={4}>
                      Date Of Birth
                    </Label>
                    <Col sm={8}>
                      <Controller
                        name="dateOfBirth"
                        control={control}
                        render={({ field }) => (
                          <Input
                            type="date"
                            id="dateOfBirth"
                            placeholder="Enter your date of birth..."
                            {...field}
                          />
                        )}
                      />
                      {errors.placeOfBirth && (
                        <Alert color="danger" className="mt-3">
                          {errors.placeOfBirth?.message}
                        </Alert>
                      )}
                    </Col>
                  </FormGroup>

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

            <Button color="warning" onClick={onVerification}>
              Kyc Verification
            </Button>
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
