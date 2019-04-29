const dictionary = {
    en: {
        messages: {
            required: () => 'This field is required',
            min: (field, value) => `Minimum length of this field must be ${value}`,
            max: (field, value) => `Maximum length of this field must be ${value}`,
            email: () => 'Please provide valid email address',
            regex: () => 'This field is not valid',
            confirmed: () => 'Two passwords do not match',
            validatePhone: () => 'Please provide valid phone',
            isTermsChecked: () => 'Please accept account creation agreement and privacy statement!',
            password_regex: () => 'This field must contain digits, letters or one of !@#$%^&* simbols',
            username_regex: () => 'Login name format is not valid',
        },
    },
};

export default dictionary;
