// Utilities
import { defineStore } from 'pinia'
import {useAlertStore} from '@/stores/alert'
const alertStore = useAlertStore();

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [],
    taskCreatingTitle: "",
    indexTaskSelected:0,
    showDialogEditTask: false,
    showDialogDeleteTask: false,
  }),
  actions: {
    addTask(){
      if (this.taskCreatingTitle.length < 5) return;

      this.tasks.push({
        title: this.taskCreatingTitle,
        done: false
      })
      this.taskCreatingTitle = "";
      this.saveLocalData();
      alertStore.notifyAlertCreated();
    },
    toggleEdit(index){
      this.showDialogEditTask = !this.showDialogEditTask;
      if(index != null) this.indexTaskSelected = index;
    },
    updateTask(){
      this.saveLocalData();
      this.toggleEdit()
      alertStore.notifyAlertUpdated();
    },
    toggleDelete(index){
      this.showDialogDeleteTask = !this.showDialogDeleteTask;
      if(index != null) this.indexTaskSelected = index;
    },
    deleteTask(){
      this.tasks.splice(this.indexTaskSelected, 1);
      this.toggleDelete();
      this.saveLocalData();
      alertStore.notifyAlertDeleted();
    },
    saveLocalData(){
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
    getTasks(){
      let items = localStorage.getItem('tasks')
      if(items) this.tasks = JSON.parse(items);
    },
    toggleDoneTask(index){
      this.tasks[index].done = !this.tasks[index].done;
      this.saveLocalData();
    },
  }
})
