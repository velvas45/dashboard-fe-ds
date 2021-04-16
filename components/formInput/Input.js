import { Select } from "antd";
import React from "react";
import { Label, Col, Alert, Input, CardImg, Button } from "reactstrap";
// validation hook form
// import { Controller } from "react-hook-form";

export default function InputHooks({
  control,
  label,
  fieldName,
  colSmLabel,
  colSmInput,
  plchldr,
  errors,
  type,
  onChange = () => {},
  onClick = () => {},
  fileData,
  fieldFiledData,
  customError,
  errorType,
  errorSize,
  Controller,
  dataSelect = [],
}) {
  // console.log(errors);
  if (type === "file") {
    return (
      <>
        <Label for={fieldName} sm={colSmLabel}>
          {label}
        </Label>
        <Col sm={colSmInput}>
          {fileData[fieldFiledData] && (
            <>
              <Button close onClick={onClick} />
              <CardImg
                top
                width="100%"
                className="bg-dark"
                src={fileData[fieldFiledData]}
                alt="Card image cap"
              />
            </>
          )}
          {!fileData[fieldFiledData] && (
            <Controller
              name="ktpPhoto"
              control={control}
              render={({ field }) => (
                <Input type={type} id={fieldName} onChange={onChange} />
              )}
            />
          )}

          <CustomError
            fieldFile={fieldFiledData}
            errorSize={errorSize}
            errorType={errorType}
            customError={customError}
          />

          {errors[fieldName] && (
            <ErrorShow errors={errors} fieldName={fieldName} />
          )}
        </Col>
      </>
    );
  } else if (type === "select") {
    return (
      <>
        <Label for={fieldName} sm={colSmLabel}>
          {label}
        </Label>
        <Col sm={colSmInput}>
          <Controller
            name={fieldName}
            control={control}
            render={({ field }) => (
              <Input
                type={type}
                id={fieldName}
                placeholder={plchldr}
                {...field}
              >
                <option value="">Select...</option>
                {dataSelect.map((data, idx) => {
                  return <option value={data.value}>{data.label}</option>;
                })}
              </Input>
            )}
          />
          {errors[fieldName] && (
            <ErrorShow errors={errors} fieldName={fieldName} />
          )}
        </Col>
      </>
    );
  } else {
    return (
      <>
        <Label for={fieldName} sm={colSmLabel}>
          {label}
        </Label>
        <Col sm={colSmInput}>
          <Controller
            name={fieldName}
            control={control}
            render={({ field }) => (
              <Input
                type={type}
                id={fieldName}
                placeholder={plchldr}
                {...field}
              />
            )}
          />
          {errors[fieldName] && (
            <ErrorShow errors={errors} fieldName={fieldName} />
          )}
        </Col>
      </>
    );
  }
}

function ErrorShow({ errors, fieldName }) {
  return (
    <Alert color="danger" className="mt-3">
      {errors[fieldName]?.message}
    </Alert>
  );
}

function CustomError({ fieldFile, customError, errorSize, errorType }) {
  if (fieldFile === "ktp") {
    return (
      <>
        {customError[errorSize] && (
          <Alert color="danger" className="mt-3">
            Mohon Upload File dibawah 2mb
          </Alert>
        )}
        {customError[errorType] && (
          <Alert color="danger" className="mt-3">
            Mohon upload file dengan type png
          </Alert>
        )}
      </>
    );
  } else if (fieldFile === "npwp") {
    return (
      <>
        {customError[errorSize] && (
          <Alert color="danger" className="mt-3">
            Mohon Upload File dibawah 2mb
          </Alert>
        )}
        {customError[errorType] && (
          <Alert color="danger" className="mt-3">
            Mohon upload file dengan type png
          </Alert>
        )}
      </>
    );
  } else if (fieldFile === "selfPhoto") {
    return (
      <>
        {customError[errorSize] && (
          <Alert color="danger" className="mt-3">
            Mohon Upload File dibawah 2mb
          </Alert>
        )}
        {customError[errorType] && (
          <Alert color="danger" className="mt-3">
            Mohon upload file dengan type png
          </Alert>
        )}
      </>
    );
  }
}
// function ErrorShowFile({errors, nameTypeErrors, type})
