<template>
    <div>
        <div class="text-5xl font-bold text-primary text-center my-8">Awesome App</div>
        <div
                v-loading="$wait.waiting('authState/login')"
                class="login-form bg-white h-full rounded border border-grey-dark"
        >
            <el-form
                    ref="loginForm"
                    :model="loginForm"
                    class="form"
                    auto-complete="on"
                    label-position="left"
                    label-width="100px"
            >
                <div class="text-2xl pb-6">{{ $t('login.title') }}</div>
                <el-form-item
                        :label="$t('keywords.login')"
                        prop="username"
                        :error="getError('username')"
                >
                    <el-input
                            v-model="loginForm.username"
                            v-validate="{
                        required: true,
                        min: 2,
                        max: 50,
                        regex: usernameRegexp,
                    }"
                            type="text"
                            name="username"
                            :placeholder="$t('login.login_placeholder')"
                    >
                    </el-input>
                </el-form-item>
                <el-form-item
                        prop="password"
                        :label="$t('keywords.password')"
                        :error="getError('password')"
                ><el-input
                        v-model="loginForm.password"
                        v-validate="'required|min:6|max:12'"
                        type="password"
                        :placeholder="$t('login.password_placeholder')"
                        name="password"
                ></el-input>
                </el-form-item>
                <el-button
                        type="primary"
                        native-type="submit"
                        class="w-full"
                        @click.native.prevent="login()"
                >{{ $t('keywords.login') }}</el-button>
                <div class="py-5 text-sm">
                    <span class="mr-1">{{ $t('login.have_not_account') }}</span>
                    <span>{{ $t('keywords.signUp') }}</span>
                </div>
            </el-form>
        </div>
    </div>

</template>

<script>
import { FormMixin } from '@/mixins/form.mixin';

export default {
    name: 'Login',
    layout: 'auth',
    mixins: [FormMixin],
    data() {
        return {
            loginForm: {
                username: '',
                password: '',
            },
            usernameRegexp: /^[a-zA-Z0-9-_']+$/i,
        };
    },
    methods: {
        async login() {
            const valid = await this.$validator.validate();
            if (valid) {
                // await this.$store.dispatch('authState/login', this.loginForm);

                const { redirectFrom } = this.$route.query;
                if (redirectFrom) {
                    return this.$router.replace({ path: redirectFrom });
                }

                this.$router.replace({ name: 'home' });
            } else {
                this.markFormTouched();
            }
        },
    },
};
</script>
<style lang="scss" scoped>
.login-form {
    width: 400px;
    padding: 25px 15px;
}
</style>
