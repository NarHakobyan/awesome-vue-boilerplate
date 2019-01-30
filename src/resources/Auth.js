import Vue from 'vue';
import { AUTH_RESOURCE_URL } from '@/common/constants/appConstants';

const actions = {
    activate: {
        method: 'GET',
        url: `${AUTH_RESOURCE_URL}/activations`,
    },
    login: { method: 'POST', url: `${AUTH_RESOURCE_URL}/login` },
    me: { method: 'GET', url: `${AUTH_RESOURCE_URL}/me` },
};

export default Vue.resource(AUTH_RESOURCE_URL, {}, actions);
