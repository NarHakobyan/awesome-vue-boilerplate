import Vue from 'vue';
import ElementLocale from 'element-ui/lib/locale';

import i18n from '@/plugins/i18n.plugin';

import {
    DatePicker,
    Switch,
    Checkbox,
    CheckboxGroup,
    RadioGroup,
    FormItem,
    Form,
    Container,
    Select,
    Option,
    Button,
    Aside,
    Menu,
    MenuItem,
    Submenu,
    MenuItemGroup,
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
    Table,
    TableColumn,
    Pagination,
    Row,
    Col,
    Card,
    Tag,
    Radio,
    Upload,
    Dialog,
    Badge,
    Input,
    Step,
    Steps,
    Tooltip,
    Slider,
} from 'element-ui';

import 'element-ui/packages/theme-chalk/src/index.scss';

const elements = [
    Dialog,
    Upload,
    Checkbox,
    CheckboxGroup,
    DatePicker,
    RadioGroup,
    Radio,
    Switch,
    FormItem,
    Form,
    Container,
    Select,
    Option,
    Button,
    Aside,
    Menu,
    MenuItem,
    Submenu,
    MenuItemGroup,
    Header,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    Main,
    Breadcrumb,
    BreadcrumbItem,
    Table,
    TableColumn,
    Pagination,
    Row,
    Col,
    Card,
    Tag,
    Badge,
    Input,
    Step,
    Steps,
    Slider,
    Tooltip,
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
