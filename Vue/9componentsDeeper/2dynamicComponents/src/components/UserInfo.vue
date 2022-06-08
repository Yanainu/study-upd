<template>
  <section>
    <!-- base-card это slot  -->
    <base-card>
      <template #header>
        <!-- # заменяет v-slot  -->
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </template>
      <template #default>
        <p>{{ infoText }}</p>
      </template>
    
    </base-card>

  </section>
</template>

<script>
export default {
  props: ['fullName', 'infoText', 'role'],
};
</script>
