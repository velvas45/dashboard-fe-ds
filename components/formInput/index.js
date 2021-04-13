export default InputForm({
  fieldName,
  colSm,
  control,
  field,
  inputType,
  plchldr,
  alertError,
});
{
  return (
    <FormGroup row>
      <Label for={fieldName} sm={colSm}>
        {fieldName}
      </Label>
      <Col sm={colSm}>
        <Controller
          name={fieldName}
          control={control}
          render={({ field }) => (
            <Input
              type={inputType}
              placeholder={plchldr || fieldName}
              {...field}
            />
          )}
        />
        {alertError}
      </Col>
    </FormGroup>
  );
}
