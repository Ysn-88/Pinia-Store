<template>
  <q-page class="flex-center row q-mt-md">
    <q-card
      class="my-card "
      v-for="item in items"
      :key="item.id"
      style="min-height: 500px;"
      :class="{
        'col-12 col-sm-5 col-md-6 col-lg-2': !$q.screen.md,
        'col-12 col-sm-3 col-md-3 col-lg-2': $q.screen.md
      }">


        <q-img class="card-image " :src="item.image" style="max-height: 300px;"></q-img>

    <q-separator inset/>
        <q-card-section class="q-pa-md text-h6 ">{{ item.title }}</q-card-section>

    <q-card-actions class="bg-primary  absolute-bottom ">
        <q-btn  flat>Action 1</q-btn>
        <q-btn flat >Action 2</q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useShopStore } from '../stores/shopStore';

export default {
  setup() {
    const shopStore = useShopStore();
    const items = computed(() => shopStore.items);

    onMounted(() => {
      shopStore.fetchItems(); // Automatically fetch items when the component is mounted
    });

    return {
      items,
    };
  },
};
</script>

<style scoped>
.my-card {
  margin: 4px;
}
.card-image {

  object-fit: fill;
}
</style>
