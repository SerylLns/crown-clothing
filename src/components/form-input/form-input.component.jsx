import React from 'react';
import { Group, Input, FormInputLabel } from './form-input.style';

const FormInput = ({label, ...otherProps}) => {
  return (
    <Group>
      <Input
        {...otherProps}
      />
      <FormInputLabel shrink={ otherProps.value.length}>{label}</FormInputLabel>
    </Group>
  );
};

export default FormInput;