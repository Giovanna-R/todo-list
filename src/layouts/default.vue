<template>
  <v-app>
    <Alert v-if="alertStore.showAlert"/>
    <DefautView/>
  </v-app>
</template>

<script setup>
import DefautView from './view.vue'
import Alert from '@/components/shared/alert.vue'

import{ useAlertStore } from '@/stores/alert'
const alertStore = useAlertStore();

</script>
