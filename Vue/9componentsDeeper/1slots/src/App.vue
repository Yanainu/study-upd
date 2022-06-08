<template>
  <div>
    <the-header></the-header>
    <!-- можно еще <TheHeader/> и тут не нужен закр.тег-->
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
  </div>

  <course-goals>
    <!-- обернуто в template для доступа к данным goal в файле CourseGoals  -->
    <template #default="slotProps">
      <!-- default это имя слота, slotProps это объект со всеми атр. тега slot -->
      <!-- т.е. если <slot :item="goal" another-prop="..."></slot> то slotProps это item и another-prop  -->
      <h2>{{ slotProps.item }}</h2>
      <p>{{ slotProps['another-prop'] }}</p>
    </template>


  </course-goals>

  <!-- короткая запись если обращаюсь только к одному слоту  -->
  <!-- можно без темплейта -->
  <course-goals #default="slotProps">
      <h2>{{ slotProps.item }}</h2>
      <p>{{ slotProps['another-prop'] }}</p>
  </course-goals>
</template>

<script>

import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import CourseGoals from './components/CourseGoals.vue';

export default {
  components: {
    TheHeader,
    BadgeList,
    UserInfo,
    CourseGoals
    // TheHeader: TheHeader
    // 'the-header': TheHeader
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>