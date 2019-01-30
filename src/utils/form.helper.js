'use strict';

import { isNull, isArray, isString, isObject, isNumber, toString, isUndefined } from 'lodash';

/**
 *
 * @param model
 * @param form
 * @returns {*|FormData}
 */
export function convertModelToFormData(model, form) {
    const formData = form || new FormData();
    if (isObject(model)) {
        for (const [key, value] of Object.entries(model)) {
            if (isArray(value)) {
                for (const element of Object.values(value)) {
                    if (isNumber(element) || isString(element)) {
                        formData.append(key, toString(element));
                    }
                    if (element instanceof File) {
                        formData.append(key, element, element.name);
                        continue;
                    }
                    convertModelToFormData(element, formData);
                }
            } else if (isObject(value) && !(value instanceof File)) {
                convertModelToFormData(value, formData);
            } else if (value instanceof File) {
                formData.append(key, value, value.name);
            } else if (!isNull(value) && !isUndefined(value) && !isNaN(value)) {
                formData.append(key, toString(value));
            }
        }
    }
    return formData;
}
