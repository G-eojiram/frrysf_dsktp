<script>
export default {
    components: { 
        navigation
    },
    data() {
        return {
            //icons
            home: require('@/assets/images/homepage.png'),
        }
    },
}
</script>

<template>
    <div>
        <img :src="home" alt="animalshelterdog" class="w-full h-full"/>
    </div>
</template>
