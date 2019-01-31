import config from '@/config';
import './Sidebar.scss';

export default {
    functional: true,
    props: {
        sidebarOpened: {
            type: Boolean,
            required: true,
        },
        defaultIndex: {
            type: String,
            required: true,
        },
    },
    render(h, context) {
        function generateMenuItem(menuItem) {
            const { title, iconName, route, children } = menuItem;
            if (children) {
                return (
                    <el-submenu index={route.index || route.name}>
                        <template slot="title">
                            {iconName && <v-icon name={iconName} />}
                            <span slot="title" class="menu-title">
                                {title}
                            </span>
                        </template>
                        {children.map(menu => generateMenuItem(menu))}
                    </el-submenu>
                );
            }
            return (
                <el-menu-item onClick={() => context.listeners.select(route)} index={route.index || route.name}>
                    {iconName && <v-icon name={iconName} />}
                    <span slot="title" class="menu-title">
                        {title}
                    </span>
                </el-menu-item>
            );
        }

        return (
            <el-menu default-active={context.props.defaultIndex} class="aside-vertical-menu" collapse={!context.props.sidebarOpened}>
                {config.asideMenu.map(menu => generateMenuItem(menu))}
            </el-menu>
        );
    },
};
