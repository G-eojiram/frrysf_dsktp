<script>
export default {
    computed: {
      getCurrentDate() {
        const date = new Date();
        const month = date.toLocaleString('default', { month: 'long' });
        const day = date.getDate();
        return `${month} ${day}`;
      },
      getDay() {
        const date = new Date();
        const day = date.toLocaleString('default', { weekday: 'long' });
        return day;
      }
    },
    data() {
    return {
        calendarICON: require('@/assets/images/Calendar.png'),
    };
  },

};
</script>

<style>
.lightgraycolor{
    background: #F5F5F5;
}
.graycolor{
    color: #5A5A5A;
}
</style>

<template>
    <div class="border bg-white rounded-md p-[5px] px-5 space-x-2 text-[10px] flex items-center lightgraycolor">
      <div class="flex items-center">
        <img :src="calendarICON" alt="calendar icon" class="w-5">
        <div class="ml-2 graycolor font-bold text-sm pr-2">Today</div>
        <div class="ml-auto graycolor font-medium text-sm">
          {{ getCurrentDate }} | {{ getDay }}
        </div>
      </div>
    </div>
</template>