import Vue from 'vue';
import { REPORTING_RESOURCE_URL } from '@/common/constants/appConstants';

const actions = {};

export default Vue.resource(REPORTING_RESOURCE_URL, {}, actions);
