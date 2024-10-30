<template>
  <div>
    <v-list
      v-model:selected="settingsSelection"
      lines="three"
      select-strategy="leaf"
    >
      <v-list-subheader>All</v-list-subheader>
      <v-list-item
        v-for="(task, index) in taskStore.tasks"
        :key="index"
        :value="index"
        @click="taskStore.toggleDoneTask(index)"

      >
        <template v-slot:prepend="{ }">
          <v-list-item-action start>
            <v-checkbox-btn :model-value="task.done"></v-checkbox-btn>
          </v-list-item-action>
        </template>

        <v-list-item-title>{{ task.title }}</v-list-item-title>
        <v-list-item-subtitle>{{ task.description }}</v-list-item-subtitle>

        <!-- INFORMAÇÔES -->
        <template v-slot:append>

          <!-- MENU DE CONFIGURAÇÂO -->
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn
                color="white"
                icon="mdi-dots-vertical"
                variant="text"
                v-bind="props"></v-btn>
            </template>
            <v-list>
              <v-list-item value="1" @click="taskStore.toggleEdit(index)" >
                <v-list-item-title>Edit</v-list-item-title>
              </v-list-item>
              <v-list-item value="2" @click="taskStore.toggleDelete(index)">
                <v-list-item-title>Delete</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-list-item>
    </v-list>

    <!-- DIALOG EDIT TASK -->
    <DialogEditTask :task="taskStore.tasks[taskStore.indexTaskSelected]"/>

    <!-- DIALOG DELETE TASK -->
    <DialogDeleteTask/>

  </div>
</template>

<script setup>
import DialogEditTask from './dialogs/dialogEditTask.vue'
import DialogDeleteTask from './dialogs/dialogDeleteTask.vue'
import { useTaskStore } from '@/stores/task';

const taskStore = useTaskStore();
const settingsSelection = ref(null);

</script>
