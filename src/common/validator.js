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

Validator.extend('password_regex', {
    validate: value => {
        var strongRegex = new RegExp('^[a-zA-Z0-9!@#$%^&*]*$');
        return strongRegex.test(value);
    },
});

Validator.extend('username_regex', {
    validate: value => {
        var strongRegex = new RegExp("^[a-zA-Z0-9-_']+$");
        return strongRegex.test(value);
    },
});

Validator.extend('text_regex', {
    validate: value => {
        var strongRegex = new RegExp('^\\S+(?: \\S+)*$');
        return strongRegex.test(value);
    },
});
