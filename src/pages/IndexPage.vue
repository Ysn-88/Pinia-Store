<template>
  <q-page class="column q-pa-sm no-wrap justify-start items-center content-start">

      <q-form
            class="q-py-lg full-width"
            style="max-width: 600px"
            @submit="handelSubmit"
            >
            <q-input label="i need to ... " v-model="newTask" outlined :dense="dense" />
            <q-btn label="ADD" type="submit" color="primary" class="text-yellow-7 full-width q-mt-md q-py-sm" />
        </q-form>

    <!-- filter -->
    <nav class="">
      <q-btn @click="filter= 'all'" class="q-ma-md" >All Tasks</q-btn>
      <q-btn  @click="filter= 'favs'" class="q-ma-md">Fav Tasks</q-btn>
    </nav>

    <!-- loading -->
    <div class="loading" v-if="taskStore.loaing">Loading tasks ...</div>
    <!-- Task List -->
    <div class="full-width q-mt-md " v-if="filter === 'all'" style="max-width: 600px" >
      <q-chip>
        <q-avatar color="secondary" text-color="whiprimaryte">{{ taskStore.totalCount }}</q-avatar>
        All Tasks
      </q-chip>
        <TaskDetails :task="task" v-for="task in taskStore.tasks" />
    </div>

    <!-- new Array , from getters in store ( taskStore.favs) if isfav = true -->
    <div class="full-width q-mt-md " v-if="filter === 'favs'" style="max-width: 600px" >
      <q-chip>
        <q-avatar color="secondary" text-color="whiprimaryte">{{ taskStore.favCount }}</q-avatar>
        Fav Tasks
      </q-chip>
        <TaskDetails :task="task" v-for="task in taskStore.favs" />
    </div>

</q-page>
</template>

<script>
import {defineComponent, ref} from 'vue'
import {useTaskStore} from 'stores/TaskStore'
import TaskDetails from '../components/TaskDetails.vue'

export default defineComponent({
    components: {
        TaskDetails
    },
    setup() {
        const taskStore = useTaskStore()
        taskStore.getTasks()
        const filter = ref("all")
        const newTask = ref("")


        const handelSubmit = () => {
          if (newTask.value.length > 0) {
            taskStore.addTask({
              title: newTask.value,
              isFav: false,
              id: Math.floor(Math.random() * 10000)
            })
            newTask.value= ""
          }
        }
        return {
            taskStore,
            filter,
            handelSubmit,
            newTask,
            dense: ref(false)
        }
    }
})
</script>

<style>
.loading {
  max-width: 640px;
  border: 1px solid #ffd859;
  background: #ffe9a9;
  color: #3a3a3a;
  padding: 5px 0;
  text-align: center;
  margin: 30px auto;
}
</style>

