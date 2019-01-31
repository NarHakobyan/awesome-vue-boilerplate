<template>
    <el-container class="min-h-screen">
        <el-aside width="unset">
            <sidebar :default-index="$route.name" :sidebar-opened="sidebarOpened" @select="navbarClick" />
        </el-aside>
        <el-container>
            <el-header class="flex justify-between items-center bg-white border border-grey-light border-solid">
                <div class="flex items-center">
                    <hamburger
                        :is-active="sidebarOpened"
                        class="hamburger-container"
                        @toggleClick="sidebarOpened = !sidebarOpened"
                    />
                    <breadcrumb />
                </div>
                <div class="flex items-center justify-between w-16">
                    <el-badge :value="6">
                        <el-dropdown class="notifications-dropdown">
                            <span><v-icon name="bell"/></span>
                            <el-dropdown-menu slot="dropdown" class="overflow-x-hidden overflow-y-scroll notifications-content">
                                <span class="text-xs block px-5 mb-2 font-semibold text-grey-dark">Notifications</span>
                                <el-dropdown-item v-for="item in notifications" :key="item.id" class="border-grey-light border-solid border-t-2">
                                    <div class="w-64 text-xs leading-loose">
                                        <div class="flex justify-between items-center">
                                            <span class="font-semibold text-grey-darker">{{ item.name }}</span>
                                            <span class="font-medium text-grey">{{ item.time }}</span>
                                        </div>
                                        <span class="text-grey-darker">{{ item.description }}</span>
                                    </div>
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-badge>
                    <el-dropdown class="user-dropdown" @command="handleCommand">
                        <span><v-icon name="user-circle"/></span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>Home</el-dropdown-item>
                            <el-dropdown-item>Settings</el-dropdown-item>
                            <el-dropdown-item command="logout"
                            >Log out</el-dropdown-item
                            >
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </el-header>
            <el-main>
                <transition name="fade-transform" mode="out-in">
                    <router-view :key="key" />
                </transition>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import { sync } from 'vuex-pathify';

import ResizeMixin from '@/mixins/ResizeHandler';
import Hamburger from '@/components/Hamburger';
import Breadcrumb from '@/components/Breadcrumb';
import Sidebar from '@/components/Sidebar/Sidebar.jsx';

export default {
    name: 'MainLayout',
    components: {
        Hamburger,
        Breadcrumb,
        Sidebar,
    },
    mixins: [ResizeMixin],
    data() {
        return {
            notifications: [
                {
                    id: '1',
                    name: 'Hey Name',
                    time: '18h',
                    description: 'Currently your ad has been successfully launched. You have 2800 view.',
                },
                {
                    id: '2',
                    name: 'Hey Name',
                    time: '12h',
                    description: 'Currently your ad has been successfully launched. You have 5000 view.',
                },
                {
                    id: '3',
                    name: 'Hey Name',
                    time: '8h',
                    description: 'Currently your ad has been successfully launched. You have 2500 view.',
                },
                {
                    id: '4',
                    name: 'Hey Name',
                    time: '6h',
                    description: 'Currently your ad has been successfully launched. You have 1000 view.',
                },
                {
                    id: '5',
                    name: 'Hey Name',
                    time: '1h',
                    description: 'Currently your ad has been successfully launched. You have 3000 view.',
                },
                {
                    id: '6',
                    name: 'Hey Name',
                    time: '18h',
                    description: 'Currently your ad has been successfully launched. You have 2800 view.',
                },
                {
                    id: '7',
                    name: 'Hey Name',
                    time: '12h',
                    description: 'Currently your ad has been successfully launched. You have 5000 view.',
                },
                {
                    id: '8',
                    name: 'Hey Name',
                    time: '8h',
                    description: 'Currently your ad has been successfully launched. You have 2500 view.',
                },
                {
                    id: '9',
                    name: 'Hey Name',
                    time: '6h',
                    description: 'Currently your ad has been successfully launched. You have 1000 view.',
                },
                {
                    id: '10',
                    name: 'Hey Name',
                    time: '1h',
                    description: 'Currently your ad has been successfully launched. You have 3000 view.',
                },
            ],
        };
    },
    computed: {
        sidebarOpened: sync('appState/sidebar@opened'),
        key() {
            return this.$route.fullPath;
        },
    },
    methods: {
        navbarClick(route) {
            this.$router.push(route);
        },
        handleCommand(command) {
            if (command === 'logout') {
                this.$store.dispatch('authState/logout');
                this.$router.push({ name: 'login' });
            }
        },
    },
};
</script>

<style scoped lang="scss">
.user-dropdown {
    svg {
        width: 1.5rem;
        height: auto;
    }
}

.notifications-dropdown {
    svg {
        width: 1rem;
        height: auto;
    }
}
.notifications-content {
    max-height: 500px;
}
</style>
