<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-dark q-py-md">
      <q-toolbar>
        <router-link to="/">
          <q-avatar size="lg">
            <img  src="../assets/Pinialogo.svg" alt="Pinia Logo"  >
          </q-avatar>
        </router-link>
        <router-link to="/" class="router-link">
          <q-toolbar-title class="logo-title text-secondary">
            Pinia Test
          </q-toolbar-title>
      </router-link>
        <q-space />

        <q-btn-toggle
        v-model="model"
        flat stretch
        toggle-color="yellow"
        :options="options"
      />
      </q-toolbar>
    </q-header>


    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'MainLayout',

  components: {

  },
  setup () {

    return {
      model: ref('one'),
      options: [
      { label: 'home', value: 'one', to: { name: 'home' }},
        { label: 'Tasks', value: 'two', to: { name: 'tasks' }},
        { label: 'Shop', value: 'three', to: { name: 'shop' } },
      ],

    }
  }
})
</script>
<style>

.router-link {
  text-decoration: none;
  color: inherit;
}
</style>
