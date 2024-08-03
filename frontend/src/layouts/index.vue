<template>
    <div>
        <span class="lightOrange md:flex"><br class="md:flex"></span>
    </div>
    <header>
        <nav class="px-16 bg-white py-6 md:flex md:items-center drop-shadow-sm">
            <div class="flex justify-between items-center pr-5">
                <img :src="logo" alt="FurrySafe Logo" class=" w-9">
                <h1 class=" text-gray-600 font-extrabold px-1 text-xl font-sans">FurrySafe</h1>
            </div>
            <div class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true" />
            <navigation />
            <div class="grid md:ml-auto gap-2 sm:grid-cols-1 md:grid-cols-2">
                <div>
                    <router-link to="/loginform">
                        <button class="rounded-lg bg-white border hover:bg-teal-400 text-gray-600 hover:text-white justify-center py-2 px-7" type="button" id="btsignup">
                            Login
                        </button>
                    </router-link>
                </div>
                <div>
                    <router-link to="/registrationform">
                        <button class="rounded-lg lightTeal border hover:bg-teal-400 text-white justify-center py-2 px-7" type="button" id="btsignup">
                            Sign up
                        </button>
                    </router-link>
                </div>
            </div>
        </nav>
    </header>
    <main>
        <div>
            <router-view/>
        </div>
    </main>
</template>

<script>
import navigation from "../components/navigation.vue";

export default {
    components: { 
        navigation
    },
    data() {
        return {
            //icons
            logo: require('@/assets/images/frrysfLOGO.png'),
            home: require('@/assets/images/homepage.png'),
        }
    },
}
</script>

<style>
.lightOrange{
    background: #E9C184;
}
.lightTeal{
    background: #5AC3C3;
}
.graycolor{
    color: #5A5A5A;
}
</style>