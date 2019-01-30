'use strict';
import { Validator } from 'vee-validate';

Validator.extend('validatePhone', {
    validate: (value, [isPhoneValid]) => {
        return isPhoneValid;
    },
});

Validator.extend('isTermsChecked', {
    validate: value => {
        return value && value === true;
    },
});
