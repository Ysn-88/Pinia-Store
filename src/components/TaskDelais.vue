<template>
<q-list>
    <q-item clickable v-ripple style="min-height: 70px" class="task">

        <q-item-section style="font-size: 20px;">{{task.title}}</q-item-section>

        <q-item-section avatar side>
            <q-btn flat dense round icon="delete" @click="taskStore.deleteTask(task.id)" />
        </q-item-section>
        <q-item-section avatar side>
            <q-btn class="btn" flat dense round icon="favorite"
                  @click="taskStore.toggelFav(task.id)"
                  :class="{ active: task.isFav}" />
        </q-item-section>
    </q-item>
    <q-separator />
</q-list>
</template>

<script>
import {useTaskStore} from 'src/stores/TaskStore';

export default {
    props: ["task"],
    setup() {

        const taskStore = useTaskStore()
        return {
            taskStore,
        }
    }
}
</script>

<style scoped>
.task .btn.active {
    color: #ff005d;
}
</style>
