import { Message } from 'element-ui';

import store from '@/store';
import i18n from '@/plugins/i18n.plugin';
import router from '@/router';

export const AuthInterceptor = (request, next) => {
    const token = store.get('authState@token');
    if (token) {
        request.headers.set('Authorization', `Bearer ${token}`);
    }
    next(AuthResponseInterceptor);
};

const AuthResponseInterceptor = response => {
    let message;
    if (response.status >= 500) {
        message = 'err_internal';
    }
    if (response.status === 401) {
        message = 'err_unauthorized';
        router.push({ name: 'login' });
    }
    if ([403, 404].includes(response.status)) {
        message = response.body.message;
    }
    if (message) {
        Message({
            showClose: true,
            message: i18n.t(`errors.${message}`),
            type: 'error',
        });
    }
    if (/[23]../.test(response.status)) {
        return Promise.resolve(response);
    }
    return Promise.reject(response);
};
