<template>
    <div class="layout">
        <el-container class="content">
            <router-view></router-view>
        </el-container>
    </div>
</template>

<style lang="scss" scoped>
.layout {
    overflow: scroll;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url(../assets/images/auth-background.jpg);
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;

    .content {
        justify-content: center;
        align-items: center;
    }
}
</style>
