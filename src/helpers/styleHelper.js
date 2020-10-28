import { commonStyles } from '../themes/common';

export const inputStyle = (errors, touched, basicStyle, name) => {
  if (touched[name] && errors[name]) {
    return [basicStyle, { borderColor: 'red' }];
  } else {
    return [commonStyles.textInputStyle, basicStyle];
  }
};
