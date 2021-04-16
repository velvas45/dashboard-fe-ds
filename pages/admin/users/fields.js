import { useCallback } from "react";
import { gender } from "./../../../data/gender";
import cities from "./../../../data/city";
import province from "./../../../data/province";

const fields = ({
  control,
  errors,
  isCustomError,
  base64Url,
  handleFileImages,
  clearImage,
  Controller,
}) => {
  return [
    {
      fieldName: "email",
      colSmLabel: 4,
      colSmInput: 8,
      Controller,
      type: "email",
      control,
      errors,
      label: "Email",
      plchldr: "Enter your email...",
    },
    {
      fieldName: "password",
      colSmLabel: 4,
      colSmInput: 8,
      Controller,
      type: "password",
      control,
      errors,
      label: "Password",
      plchldr: "Enter your password...",
    },
    {
      fieldName: "firstName",
      colSmLabel: 4,
      colSmInput: 8,
      Controller,
      type: "text",
      control,
      errors,
      label: "First Name",
      plchldr: "Enter your first name...",
    },
    {
      fieldName: "lastName",
      colSmLabel: 4,
      colSmInput: 8,
      Controller,
      type: "text",
      control,
      errors,
      label: "Last Name",
      plchldr: "Enter your last name...",
    },
    {
      fieldName: "phone",
      colSmLabel: 4,
      colSmInput: 8,
      Controller,
      type: "text",
      control,
      errors,
      label: "No. Telephone",
      plchldr: "Enter your number phone...",
    },
    {
      fieldName: "gender",
      colSmLabel: 4,
      colSmInput: 8,
      Controller,
      type: "select",
      control,
      errors,
      label: "Gender",
      dataSelect: gender,
    },
    {
      fieldName: "address",
      colSmLabel: 4,
      colSmInput: 8,
      Controller,
      type: "textarea",
      control,
      errors,
      label: "Address",
      plchldr: "Enter your address...",
    },
    {
      fieldName: "ktp",
      colSmLabel: 4,
      colSmInput: 8,
      Controller,
      type: "text",
      control,
      errors,
      label: "No. Ktp",
      plchldr: "19887384778988",
    },
    {
      fieldName: "ktpPhoto",
      colSmLabel: 4,
      colSmInput: 8,
      Controller,
      type: "file",
      control,
      errors,
      label: "Foto KTP",
      plchldr: "",
      fileData: base64Url,
      fieldFiledData: "ktp",
      customError: isCustomError,
      onChange: useCallback((e) => {
        handleFileImages(e, "ktp");
      }, []),
      onClick: () => clearImage("ktp"),
      errorType: "fileTypeKtp",
      errorSize: "fileSizeKtp",
    },
    {
      fieldName: "npwp",
      colSmLabel: 4,
      colSmInput: 8,
      Controller,
      type: "text",
      control,
      errors,
      label: "NPWP",
      plchldr: "19883284778988",
    },
    {
      fieldName: "npwpPhoto",
      colSmLabel: 4,
      colSmInput: 8,
      Controller,
      type: "file",
      control,
      errors,
      label: "Foto NPWP",
      plchldr: "",
      fileData: base64Url,
      fieldFiledData: "npwp",
      customError: isCustomError,
      onChange: (e) => handleFileImages(e, "npwp"),
      onClick: () => clearImage("npwp"),
      errorType: "fileTypeNpwp",
      errorSize: "fileSizeNpwp",
    },
    {
      fieldName: "city",
      colSmLabel: 4,
      colSmInput: 8,
      Controller,
      type: "select",
      control,
      errors,
      label: "City",
      dataSelect: cities,
    },
    {
      fieldName: "province",
      colSmLabel: 4,
      colSmInput: 8,
      Controller,
      type: "select",
      control,
      errors,
      label: "Province",
      dataSelect: province,
    },
    {
      fieldName: "placeofBirth",
      colSmLabel: 4,
      colSmInput: 8,
      Controller,
      type: "text",
      control,
      errors,
      label: "Place of Birth",
      plchldr: "...",
    },
    {
      fieldName: "dateofBirth",
      colSmLabel: 4,
      colSmInput: 8,
      Controller,
      type: "date",
      control,
      errors,
      label: "Date of Birth",
      plchldr: "...",
    },
  ];
};

export default fields;
