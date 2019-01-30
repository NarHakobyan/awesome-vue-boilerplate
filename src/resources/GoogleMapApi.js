import Vue from 'vue';
import { GOOGLE_MAP_RESOURCE_URL } from '@/common/constants/appConstants';

const actions = {
    autocompleteLocation: {
        method: 'GET',
        url: `${GOOGLE_MAP_RESOURCE_URL}/autocomplete/json`,
    },
    getLocation: {
        method: 'GET',
        url: `${GOOGLE_MAP_RESOURCE_URL}/details/json`,
    },
};
export default Vue.resource(GOOGLE_MAP_RESOURCE_URL, {}, actions);
