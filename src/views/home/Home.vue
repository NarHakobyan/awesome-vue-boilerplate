<template>
    <div class="flex justify-center items-center pt-32">
        <div class="w-1/3">
            <img src="@/assets/images/illustration.png" alt="computer">
        </div>
        <div class="pl-16 pb-32 w-2/5">
            <span class="text-3xl font-bold text-indigo-dark">Welcome to Awesome App!</span>
            <p class="text-lg py-8 w-5/6 leading-tight text-grey-darker">
                An ultimate online platform that helps you create and
                launch ads in a few minutes.
            </p>
            <p class="text-lg pb-12 w-5/6 leading-tight text-grey-darker">
                Target your audience by exploring our features and
                start using the platform!
            </p>
            <button class="bg-blue hover:bg-blue-dark h-12 w-48 outline-none uppercase text-white text-xl font-bold rounded-lg" @click="$router.push({ name: 'reporting' })">
                Continue
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    layout: 'main',
};
</script>
