import Vue from 'vue';
import ElementLocale from 'element-ui/lib/locale';

import i18n from '@/plugins/i18n.plugin';

import {
    Container,
    Aside,
    Menu,
    MenuItem,
    Submenu,
    Header,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    Main,
    Loading,
    MessageBox,
    Message,
    Breadcrumb,
    BreadcrumbItem,
    Badge,
    Form,
    FormItem,
    Input,
    Button,
} from 'element-ui';

import 'element-ui/packages/theme-chalk/src/index.scss';

const elements = [
    Container,
    Aside,
    Menu,
    MenuItem,
    Submenu,
    Header,
    Breadcrumb,
    BreadcrumbItem,
    Badge,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Main,
    Form,
    FormItem,
    Input,
    Button,
];

// configure language
ElementLocale.i18n((key, value) => i18n.t(key, value));

// import components
for (let Element of elements) {
    Vue.use(Element);
}

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
