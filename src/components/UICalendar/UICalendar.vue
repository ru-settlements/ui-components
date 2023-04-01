<template>
  <div class="calendar">
    <div class="header">
      <button @click="prevMonth">&lt;</button>
      <span>{{ currentMonth + 1 }} {{ currentYear }}</span>
      <button @click="nextMonth">&gt;</button>
    </div>
    <div class="days">
      <div class="day" v-for="day in days" :key="day">{{ day }}</div>
    </div>
    <div class="dates">
      <div
        class="date"
        v-for="(date, index) in dates"
        :key="index"
        :class="{ 'current-date': isCurrentDate(date) }"
      >
        {{ date }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';

export default {
  setup() {
    const currentDate = ref(new Date());
    const currentMonth = computed(() => currentDate.value.getMonth());
    const currentYear = computed(() => currentDate.value.getFullYear());

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dates = ref([]);

    const generateDates = () => {
      const firstDayOfMonth = new Date(currentYear.value, currentMonth.value, 1).getDay();
      const daysInMonth = new Date(currentYear.value, currentMonth.value + 1, 0).getDate();

      const calendarDates = [];
      for (let i = 1; i <= firstDayOfMonth + daysInMonth; i++) {
        calendarDates.push(i > firstDayOfMonth ? i - firstDayOfMonth : '');
      }

      dates.value = calendarDates;
    };

    const prevMonth = () => {
      currentDate.value = new Date(currentYear.value, currentMonth.value - 1);
      generateDates()
    };

    const nextMonth = () => {
      currentDate.value = new Date(currentYear.value, currentMonth.value + 1);
      generateDates()
    };

    const isCurrentDate = (date) => {
      const today = new Date();
      return (
        date &&
        date === today.getDate() &&
        currentMonth.value === today.getMonth() &&
        currentYear.value === today.getFullYear()
      );
    };

    onMounted(generateDates);

    return {
      currentDate,
      currentMonth,
      currentYear,
      days,
      dates,
      prevMonth,
      nextMonth,
      isCurrentDate,
    };
  },
};
</script>

<!-- Add your SCSS styles here -->
<style scoped lang="scss">
.header {
  width: 350px;
  display: flex;
}

.days {
  width: 350px;
  display: flex;
  flex-wrap: wrap;
}

.day {
  width: 50px;
  margin-left: 5px;
}

.dates {
  width: 350px;
  display: flex;
  flex-wrap: wrap;
}

.date {
  width: 50px;
}
</style>
