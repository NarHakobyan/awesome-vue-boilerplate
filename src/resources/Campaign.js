import Vue from 'vue';
import { CAMPAIGN_RESOURCE_URL } from '@/common/constants/appConstants';

const actions = {
    autocompleteLocation: {
        method: 'GET',
        url: 'https://maps.googleapis.com/maps/api/place/autocomplete/json',
    },
    getLocation: {
        method: 'GET',
        url: 'https://maps.googleapis.com/maps/api/place/details/json',
    },
};
export default Vue.resource(CAMPAIGN_RESOURCE_URL, {}, actions);
