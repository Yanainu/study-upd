<template>
  <div>
    <the-header></the-header>
    <!-- можно еще <TheHeader/> и тут не нужен закр.тег-->
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
    <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals> -->

    <!-- keep-alive оставляет компонент актуальным  -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>

  </div>

</template>

<script>

import TheHeader from './components/layout/TheHeader.vue';

import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue'

export default {
  components: {
    TheHeader,

    ActiveGoals,
    ManageGoals
    // TheHeader: TheHeader
    // 'the-header': TheHeader
  },
  data() {
    return {
      selectedComponent: 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    }
  }
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