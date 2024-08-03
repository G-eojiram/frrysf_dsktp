<template>
    <div>
        <TransitionRoot as="template" :show="sidebarOpen">
            <Dialog as="div" class="relative z-50 lg:hidden" @close="sidebarOpen = false">
                <!-- sidebar ouside color -->
                <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
                    enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
                    leave-to="opacity-0">
                    <div class="fixed inset-0 bg-amber-50" />
                </TransitionChild>

                <div class="fixed inset-0 flex">
                    <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
                        enter-from="-translate-x-full" enter-to="translate-x-0"
                        leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
                        leave-to="-translate-x-full">
                        <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
                            <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0"
                                enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100"
                                leave-to="opacity-0">
                                <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                                    <button type="button" class="-m-2.5 p-2.5" @click="sidebarOpen = false">
                                        <span class="sr-only">Close sidebar</span>
                                        <!-- x icon color -->
                                        <XMarkIcon class="h-6 w-6 text-gray-700" aria-hidden="true" />
                                    </button>
                                </div>
                            </TransitionChild>
                            <!-- Sidebar component, swap this element with another sidebar if you like -->
                            <div
                                class="flex grow flex-col gap-y-5 overflow-y-auto bg-teal-500 px-6 pb-4 ring-1 ring-white/10">
                                <div class="flex h-16 shrink-0 items-center">
                                    <img :src="logo" alt="Logout Icon" class="w-10" aria-hidden="true"/>
                                    <span class="pl-3 font-bold text-2xl">FurrySafe</span>
                                </div>
                                <nav class="flex flex-1 flex-col">
                                    <ul role="list" class="flex flex-1 flex-col gap-y-7">
                                        <li>
                                            <ul role="list" class="-mx-2 space-y-1">
                                                <!-- <li v-for="item in navigation" :key="item.name">
                                                    <a v-if="!item.children" @click="navigateTo(item.href)"
                                                        :class="[item.current ? 'bg-teal-600 text-white' : 'text-white hover:text-white hover:bg-teal-600', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                                                        <img :src="item.icon" class="h-5 w-5 shrink-0 text-gray-400" aria-hidden="true" />
                                                        {{ item.name }}
                                                    </a>
                                                </li> -->
                                                <li v-for="item in navigation" :key="item.name">
                                                    <router-link v-if="!item.children" :to="item.to" :class="[item.current ? 'bg-teal-600 text-white' : 'text-white hover:text-white hover:bg-teal-600', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                                                        <img :src="item.icon" class="h-5 w-5 shrink-0 text-white" aria-hidden="true" />
                                                        {{ item.name }}
                                                    </router-link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="mt-auto">
                                            <router-link :to="{ name: 'landingpage' }"
                                                class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-white hover:bg-teal-600 hover:text-white">
                                                <img :src="logoutICON" alt="Logout Icon" class="h-6 w-6 shrink-0" aria-hidden="true"/>
                                                Logout
                                            </router-link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </Dialog>
        </TransitionRoot>

        <!-- Static sidebar for desktop -->
        <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
            <!-- Sidebar component, swap this element with another sidebar if you like -->
            <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-teal-500 pb-4">
                <div class="flex h-[3.97rem] shrink-0 items-center bg-white pl-[3rem]">
                    <img :src="logo" alt="Logout Icon" class="w-10" aria-hidden="true"/>
                    <span class="pl-3 font-extrabold text-2xl text-gray-600">FurrySafe</span>
                </div>
                <nav class="flex flex-1 flex-col px-6 pt-16">
                    <ul role="list" class="flex flex-1 flex-col gap-y-7">
                        <li>
                            <ul role="list" class="-mx-2 space-y-1">
                                <!-- <li v-for="item in navigation" :key="item.name">
                                    <a v-if="!item.children" @click="navigateTo(item.href)"
                                        :class="[item.current ? 'bg-teal-600 text-white' : 'text-white hover:text-white hover:bg-teal-600', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                                        <img :src="item.icon" class="h-5 w-5 shrink-0 text-white" aria-hidden="true" />
                                        {{ item.name }}
                                    </a>
                                </li> -->
                                <li v-for="item in navigation" :key="item.name">
                                    <router-link v-if="!item.children" :to="item.to" :class="[item.current ? 'bg-teal-600 text-white' : 'text-white hover:text-white hover:bg-teal-600', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                                        <img :src="item.icon" class="h-5 w-5 shrink-0 text-white" aria-hidden="true" />
                                        {{ item.name }}
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="mt-auto">
                            <router-link :to="{ name: 'landingpage' }"
                                class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-white hover:bg-teal-600 hover:text-white">
                                <img :src="logoutICON" alt="Logout Icon" class="h-6 w-6 shrink-0" aria-hidden="true"/>
                                Logout
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

        <div class="lg:pl-72">
            <div
                class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
                <button type="button" class="-m-2.5 p-2.5 text-gray-700 lg:hidden" @click="sidebarOpen = true">
                    <span class="sr-only">Open sidebar</span>
                    <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                </button>

                <!-- Separator -->
                <div class="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

                <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                    <form class="relative flex flex-1" action="#" method="GET">
                        <label for="search-field" class="sr-only">Search</label>
                        <MagnifyingGlassIcon class="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                            aria-hidden="true" />
                        <input id="search-field"
                            class="block h-full w-full border-0 py-0 pl-8 pr-3 text-gray-900 outline-0 placeholder:text-gray-400 focus:ring-0 xl:w-1/3 lg:w-1/2 sm:text-sm"
                            placeholder="Search..." type="search" name="search" />
                    </form>
                    <div class="flex items-center gap-x-4 lg:gap-x-6">
                        <!-- notif icon -->
                        <!-- <button type="button" class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                            <span class="sr-only">View notifications</span>
                            <BellIcon class="h-6 w-6" aria-hidden="true" />
                        </button> -->

                        <!-- Separator -->
                        <div class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true" />

                        <!-- Profile dropdown -->
                        <Menu as="div" class="relative">
                            <MenuButton class="-m-1.5 flex items-center p-1.5">
                                <span class="sr-only">Open user menu</span>
                                <img class="h-8 w-8 rounded-full bg-gray-50"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt="" />
                                <span class="hidden lg:flex lg:items-center">
                                    <span class="ml-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                                    User
                                    </span>
                                    <ChevronDownIcon class="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                            </MenuButton>
                            <transition enter-active-class="transition ease-out duration-100"
                                enter-from-class="transform opacity-0 scale-95"
                                enter-to-class="transform opacity-100 scale-100"
                                leave-active-class="transition ease-in duration-75"
                                leave-from-class="transform opacity-100 scale-100"
                                leave-to-class="transform opacity-0 scale-95">
                                <MenuItems
                                    class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                                    <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                                        <router-link :to="item.to" :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900']">
                                            {{ item.name }}
                                        </router-link>
                                    </MenuItem>
                                </MenuItems>
                            </transition>
                        </Menu>
                    </div>
                </div>
            </div>

            <main class="py-7">
                <div class="px-4 sm:px-6 lg:px-8">
                    <!-- Your content -->
                    <router-view/> <!-- display contents of the view -->
                </div>
            </main>
        </div>
    </div>
</template>
  
<script setup>

import { ref } from 'vue'

import {
    Dialog,
    DialogPanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'
import {
    Bars3Icon,
    BellIcon,
    XMarkIcon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/vue/20/solid'

import logo from '@/assets/images/frrysfLOGO.png'
import adminICON from '@/assets/images/User Menu Male.png'
import dashboardICON from '@/assets/images/Dashboard Layout.png'
import logoutICON from '@/assets/images/Logout.png'
import petsICON from '@/assets/images/pethome.png'
import applicationICON from '@/assets/images/applicationICON.png'
import usersICON from '@/assets/images/Users.png'
import pinMapICON from '@/assets/images/PickupMapICON.png'
import { RouterLink } from 'vue-router'

const navigation = [
  { name: 'Admin', to: { name: 'dashboardContent' }, icon: adminICON, current: true },
  { name: 'Dashboard', to: { name: 'dashboardContent' }, icon: dashboardICON, current: false },
  { name: 'Manage Pets',to: { name: 'managepetsContent' }, icon: petsICON, current: false },
  { name: 'Manage Applications', to: { name: 'applicationContent' }, icon: applicationICON, current: false },
  { name: 'Manage Users', to: { name: 'userContent' }, icon: usersICON, current: false },
  { name: 'Manage Map', to: { name: 'mapContent' }, icon: pinMapICON, current: false },
]

const userNavigation = [
  { name: 'Your profile', to: { name: 'profileContent' }}
]

// function navigateTo(item) {
//   router.push(item.to);
// }

const sidebarOpen = ref(false)
</script>