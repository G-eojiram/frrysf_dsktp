<template>
  <div class="relative">
    <input
      type="text"
      placeholder="Select Gender"
      class="w-full p-2 px-5 text-gray-700 border rounded-lg cursor-pointer sm:text-[12px] md:text-[12px] lg:text-[15px]"
      @click="showOptions = !showOptions"
      v-model="selectedOption"
    />
    <div v-if="showOptions" class="absolute right-0 w-[12.4rem]  bg-white border overflow-hidden rounded-md shadow-md">
      <ul>
        <li
          v-for="(option, index) in options"
          :key="index"
          @click="selectOption(option)"
          class="hover:bg-gray-100 px-6"
        >
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showOptions: false,
      selectedOption: "",
      options: ["Male", "Female", "Other"]
    };
  },
  methods: {
    selectOption(option) {
      this.selectedOption = option;
      this.showOptions = false;
    }
  }
};
</script>

