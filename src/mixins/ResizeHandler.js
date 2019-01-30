import store from '@/store';

const { body } = document;
const WIDTH = 1024;
const RATIO = 3;

export default {
    watch: {
        $route() {
            if (this.device === 'mobile' && this.sidebarOpened) {
                store.dispatch('auth', { withoutAnimation: false });
            }
        },
    },
    beforeMount() {
        window.addEventListener('resize', this.resizeHandler);
    },
    mounted() {
        const isMobile = this.isMobile();
        if (isMobile) {
            // todo save device type in tore
            // store.dispatch('toggleDevice', 'mobile');
            store.set('appState/sidebar@opened', false);
        }
    },
    methods: {
        isMobile() {
            const rect = body.getBoundingClientRect();
            return rect.width - RATIO < WIDTH;
        },
        resizeHandler() {
            if (!document.hidden) {
                const isMobile = this.isMobile();
                // store.dispatch('toggleDevice', isMobile ? 'mobile' : 'desktop');

                if (isMobile) {
                    store.set('appState/sidebar@opened', false);
                }
            }
        },
    },
};
