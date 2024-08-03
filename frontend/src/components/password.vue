<script>
    export default {
      data() {
        return {
          password: '',
          passwordType: 'password',
  
          eye: require('@/assets/images/Eye.png'),
          eyeHide: require('@/assets/images/Hide.png'),
        };
      },
      methods: {
        togglePasswordVisibility() {
          this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
        },
      },
    };
</script>

<template>
    <div>
      <div class="pb-2">
        <label for="email">Password </label>
      </div>
      <div class="relative">
        <input
          :type="passwordType"
          id="password"
          placeholder="Password"
          class="pl-5 pr-10 py-2 w-full border border-gray-300 rounded-md"
          v-model="password"
        />
        <span class="absolute top-1/2 right-5 transform -translate-y-1/2">
          <!-- to hide icon-->
          <img
            v-if="passwordType === 'password'"
            :src="eyeHide"
            alt="Unsee Eye Icon"
            class="sm:w-4 sm:h-4 lg:w-5 lg:h-5 cursor-pointer"
            @click="togglePasswordVisibility"
          />
          <!-- to see icon-->
          <img
            v-else
            :src="eye"
            alt="Eye Icon"
            class="sm:w-4 sm:h-4 lg:w-5 lg:h-5 cursor-pointer"
            @click="togglePasswordVisibility"
          />
        </span>
      </div>
    </div>
</template>