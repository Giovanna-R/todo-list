<template>
  <v-text-field 
    clearable 
    label="Add Task"
    :rules="rules"
    v-model="taskStore.taskCreatingTitle"
    @keyup.enter="taskStore.addTask"
  ></v-text-field>

  <ListTasks/>
</template>

<script setup>
import { onMounted } from 'vue';
import ListTasks from './listTasks.vue';
import {useTaskStore} from '@/stores/task';

const taskStore = useTaskStore();

const rules = [
  value => {
    if (!value || value.length >= 5) return true

    return 'Please enter a task title with more than 5 characters.'
  },
];

onMounted(()=>{
  taskStore.getTasks();
})

</script>