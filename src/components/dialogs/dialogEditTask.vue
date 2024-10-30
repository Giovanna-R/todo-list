<template>
  <div class="text-center pa-4">
    <v-dialog
    v-model="taskStore.showDialogEditTask"
    persistent
    min-width="400"
    max-width="600"
    >

      <v-card>
        <v-card-title class="text-h5"> Edit Task </v-card-title>
          <v-card-text>
              <v-text-field 
              v-model="props.task.title" 
              label="Title"></v-text-field>
              <v-text-field 
              v-model="props.task.description"
              label="Description"></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
  
            <v-btn variant="elevated" color="#775fadcf" @click="taskStore.updateTask()">
                Confirm
            </v-btn>
          </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import {defineProps} from 'vue';
import {useTaskStore} from '@/stores/task';

const taskStore = useTaskStore();
const props = defineProps({
    task: Object,
});

</script>
