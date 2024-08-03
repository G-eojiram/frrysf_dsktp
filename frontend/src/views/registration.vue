<script>
import Dropdown from "../components/dropdown.vue";
import passwordunhide from "../components/password.vue";

export default {
    components: { 
        Dropdown,
        passwordunhide 
    },
    data() {
        return {
        //icons or images
        dog: require('@/assets/images/animalshelterdog.png'),
        back: require('@/assets/images/Back.png'),
        gender: ""

        }  
    },
    methods: {
        navigateTo(path) {
        this.$router.push(path);
        },
    },
}
</script>

<template>
    <div class="w-full h-screen flex items-center justify-center">
        <div class="border w-screen md:flex md:items-center">
            <div class="w-screen sm:p-[2rem] md:p-[3rem] lg:p-[4rem] xl:p-[7rem]">
                <form action="">
                    <div class="mb-20 sm:text-[10.9px] md:text-[13px] lg:text-[15px]">
                      <router-link to="/" class="flex items-center">
                            <img :src="back" alt="back icon" class="lg:w-[1rem] sm:w-[10px] md:w-[12px]">
                            <span class="text-gray-700 sm:pl-[10px]">Back</span>
                      </router-link>
                    </div>
                    <div class="grid xl:grid-flow-col xl:space-x-4">
                        <div class="field grid sm:text-[10px] sm:pt-5 sm:space-y-2 md:text-[12px] md:space-y-3 lg:text-[15px]">
                            <label for="fname">First Name </label>
                            <input type="text" id="fname" placeholder="Firstname"
                              class="border rounded-lg py-2 px-5">
                        </div>
                        <div class="field grid sm:text-[10px] sm:pt-5 sm:space-y-2 md:text-[12px] md:space-y-3 lg:text-[15px]">
                            <label for="mname">Middle Name </label>
                            <input type="text" id="mname" placeholder="Middlename"
                              class="border rounded-lg py-2 px-5">
                        </div>
                        <div class="field grid sm:text-[10px] sm:pt-5 sm:space-y-2 md:text-[12px] md:space-y-3 lg:text-[15px]">
                            <label for="lname">Last Name </label>
                            <input type="text" id="lname" placeholder="Lastname"
                              class="border rounded-lg py-2 px-5">
                        </div>
                    </div>
                    <div class="field grid sm:text-[10px] sm:pt-5 sm:space-y-2 md:text-[12px] md:space-y-3 lg:text-[15px]">
                        <label for="username">Username </label>
                        <input type="text" id="username" placeholder="Username"
                          class="border rounded-lg py-2 px-5">
                    </div>
                    <div class="field grid sm:text-[10px] sm:pt-5 sm:space-y-2 md:text-[12px] md:space-y-3 lg:text-[15px]">
                        <label for="email">Email </label>
                        <input type="text" id="email" placeholder="Email"
                          class="border rounded-lg py-2 px-5">
                    </div>
                    <div class="field grid sm:text-[10px] sm:pt-5 sm:space-y-2 md:text-[12px] md:space-y-3 lg:text-[15px]">
                        <passwordunhide />
                    </div>
                    <div class="grid mt-[1rem] grid-cols-2">
                        <div class="field w-fit grid sm:grid-flow-row xl:grid-flow-col items-center">
                            <label for="bdate" class="pr-[1rem] sm:text-[12px] md:text-[12px] lg:text-[15px]">Birthdate</label>
                            <input type="date" id="bdate" class="border rounded-lg p-2 sm:text-[12px] md:text-[12px] lg:text-[15px]">
                        </div>
                        <div class="field flex items-center justify-end sm:grid sm:grid-flow-row xl:grid-flow-col">
                            <label for="gender" class="pr-3 sm:text-[12px] md:text-[12px] lg:text-[15px]">Gender</label>
                            <Dropdown v-model="gender" />
                        </div>
                    </div>
                    <div class="flex justify-center mt-[3rem]">
                        <button @click="navigateTo('')"
                          class="px-6 bg-slate-900 rounded-lg p-2 text-white w-full sm:text-[10px] md:text-[12px] lg:text-[15px]">
                          Signup
                        </button>
                    </div>
                </form>
            </div>
            <div class="flex bg-sky-50 pt-[3rem] px-[3rem] sm:hidden md:hidden lg:pl-[3rem] md:pt-[5rem] lg:block lg:pt-[8rem] xl:pl-[7rem]">
                <img :src="dog" alt="animalshelterdog" class="lg:w-[1950px] xl:w-[1550px]">
            </div>
        </div>
    </div>
</template>
