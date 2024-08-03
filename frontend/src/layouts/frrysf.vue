<template>
    <Disclosure as="nav" class="bg-white" v-slot="{ open }">
        <div class="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <div class="absolute inset-y-0 left-0 flex items-center md:hidden">
                  <!-- Mobile menu button-->
                    <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-800  hover:text-teal-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span class="absolute -inset-0.5" />
                        <span class="sr-only">Open main menu</span>
                        <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                        <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
                    </DisclosureButton>
                </div>
                <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                    <div class="flex flex-shrink-0 items-center lg:px-[1rem]">
                        <img :src="logo" alt="Logout Icon" class="w-10" aria-hidden="true"/>
                        <h1 class=" text-gray-600 font-extrabold px-1 text-xl font-sans pl-2">FurrySafe</h1>
                    </div>
                    <div class="hidden lg:block lg:h-[2.15rem] lg:w-[1px] lg:bg-gray-900/30" aria-hidden="true" /> <!-- separator -->
                    <div class="hidden md:ml-6 md:block">
                        <div class="flex space-x-4">
                            <router-link v-for="item in navigation"
                                :key="item.name" :to="item.to" :class="[item.current ? 'bg-amber-500 text-white' : 'text-gray-600 hover:bg-amber-500 hover:text-white', 'rounded-md px-3 py-2 text-sm font-normal']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                  <!-- buttons -->
                    <div class="hidden sm:hidden md:flex lg:flex xl:flex">
                        <div class="pr-3">
                            <router-link to="/loginform">
                                 <button class="rounded-lg bg-white border hover:bg-amber-500 text-gray-600 hover:text-white justify-center py-2 px-7" type="button" id="btsignup">
                                     Login
                                 </button>
                            </router-link>
                        </div>
                        <div>
                            <router-link to="/registrationform">
                                <button class="rounded-lg lightTeal border hover:bg-amber-500 text-white justify-center py-2 px-7" type="button" id="btsignup">
                                    Sign up
                                </button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- mobile -->
        <DisclosurePanel class="md:hidden">
            <div class="space-y-1 px-2 pb-3 pt-2">
                <DisclosureButton v-for="item in navigation"
                    :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-amber-500 text-white' : 'text-gray-600 hover:bg-amber-500 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}
                </DisclosureButton>
            <!-- add buttons of login and signup when its mobile -->

                <router-link to="/loginform">
                    <button class="rounded-lg bg-white border hover:bg-amber-500 text-gray-600 hover:text-white justify-center py-2 px-7 w-full mb-2" type="button" id="btsignup">
                        Login
                    </button>
                </router-link>
                <router-link to="/registrationform">
                    <button class="rounded-lg lightTeal border hover:bg-amber-500 text-white justify-center py-2 px-7 w-full" type="button" id="btsignup">
                        Sign up
                    </button>
                </router-link>
            </div>
        </DisclosurePanel>
    </Disclosure>
    
    <main class="">
        <div class="">
            <!-- Your content -->
            <router-view/> <!-- display contents of the view -->
        </div>
    </main>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
  

import logo from '@/assets/images/frrysfLOGO.png'

const navigation = [
  { name: 'Home', to: { name: 'landingpage' }, current: true },
  { name: 'Shelters', to: { name: '' }, current: false },
  { name: 'Contacts',to: { name: '' }, current: false },
  { name: 'About', to: { name: '' }, current: false },
  { name: 'FAQ', to: { name: '' },  current: false },
]
  </script>

<style>
.lightOrange{
    background-color: #E9C184;
}
.lightTeal{
    background-color: #5AC3C3;
}
.graycolor{
    color: #5A5A5A;
}
</style>