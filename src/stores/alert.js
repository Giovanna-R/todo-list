// Utilities
import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', {
  state: () => ({
    showAlert: false,
    type:'Success',
    title:'Success!',
    text:'The new task was added to your list.',
  }),
  actions:{
    notifyAlert(){
      this.showAlert = true;
      setTimeout(()=>{this.showAlert = false;}, 3000)
    },
    notifyAlertCreated(){
      this.type = 'success';
      this.title = 'Success!';
      this.text = 'The new task was added to your list.';
      this.notifyAlert();
    },
    notifyAlertDeleted(){
      this.type = 'warning';
      this.title = 'Deletion Complete!';
      this.text = 'The task has been successfully removed from your list.';
      this.notifyAlert();
    },
    notifyAlertUpdated(){
      this.type = 'info';
      this.title = 'Changes Saved!';
      this.text = 'Your task has been successfully updated.';
      this.notifyAlert();
    },
  }
})
