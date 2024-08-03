<script>
export default {
    methods: {
        navigateTo(path) {
        this.$router.push(path);
        },
    },
}
</script>

<template>
    <div>
        <ul class="flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 top-[-400px] transition-all ease-in duration-500 cursor-pointer">
            <li class=" mx-4 my-6 md:my-0">
                <a class=" text-gray-700 hover:text-black duration-500" @click="navigateTo('/')">
                    Home
                </a></li>
            <li class="mx-4 my-6 md:my-0">
                <a class="text-gray-700 hover:text-black duration-500" @click="navigateTo('/')">
                    Featured
                </a>
            </li>
            <li class="mx-4 my-6 md:my-0">
                <a class="text-gray-700 hover:text-black duration-500" @click="navigateTo('/')">
                    Contact
                </a>
            </li>
            <li class="mx-4 my-6 md:my-0">
                <a class="text-gray-700 hover:text-black duration-500" @click="navigateTo('/')">
                    About
                </a>
            </li>
            <li class="mx-4 my-6 md:my-0">
                <a class="text-gray-700 hover:text-black duration-500" @click="navigateTo('/')">
                    FAQ
                </a>
            </li>
        </ul>
    </div>
</template>