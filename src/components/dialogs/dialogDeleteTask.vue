<template>
    <div class="text-center pa-4">
      <v-dialog
      v-model="taskStore.showDialogDeleteTask"
      persistent
      min-width="400"
      max-width="600"
      >
  
        <v-card>
          <v-card-title class="text-h5">Are you sure you want to delete this task?</v-card-title>
            <v-card-text>This action cannot be undone.</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn variant="elevated" color="#775fadcf" @click="taskStore.toggleDelete">
                  No
              </v-btn>

              <v-btn variant="tonal" color="#775fadcf" @click="taskStore.deleteTask">
                  Yes
              </v-btn>
            </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>
  
  
  <script setup>
  import {useTaskStore} from '@/stores/task';

  const taskStore = useTaskStore();

  </script>
  