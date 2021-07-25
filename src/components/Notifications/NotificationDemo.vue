<template>
  <q-input
      model-value=""
      color="primary"
      filled
      type="text"
      label="Message Text"
      v-model="messageToAdd.message"/>

  <q-input
      model-value=""
      color="primary"
      filled
      type="number"
      label="Life Span Ms"
      v-model="messageToAdd.lifespanMs"/>

  <q-select model-value="Success" filled v-model="messageToAdd.alertType" :options="alertTypes" label="Msg Type" />

  <q-btn
      v-on:click="messageToAdd=AddMessage(messageToAdd)"
      flat class="bg-light-blue-8" label="Add Message" text-color="white" style="width: 24vw;" />
  <br>
</template>

<script lang="ts">
import {ref} from "vue"
import {AlertMessage, NotificationsService} from "@/services/notifications.services";


const defaultLifeSpanMs = 7500;

export default {
  name: "NotificationDemo",

  setup() {
    const messageToAdd = ref({alertType: 'Success', message: 'Message Text', lifespanMs: defaultLifeSpanMs, id: NotificationsService.Uuidv4()} as AlertMessage);

    return {
      messageToAdd
    }
  },

  data() {
    return {
      model: ref(null),
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],
      alertTypes: NotificationsService.alertTypes
    }
  },

  methods: {
    AddMessage(message: AlertMessage) {
      NotificationsService.AddMessages([message])

      return {alertType: 'Success', message: 'Message Text', lifespanMs: defaultLifeSpanMs, id: NotificationsService.Uuidv4()} as AlertMessage;
    }
  }
}
</script>

<style scoped>

</style>
