<template>
  <transition name="fade">
    <q-banner
        v-if="!alert.expired"
        style="max-width: 45vw; width: auto; height: 85%;"
        v-bind:class="{ 'bg-green-5': alert.alertType === 'Success', 'bg-red-5': alert.alertType === 'Error' }"
        rounded class="text-white">
      {{ alert.message }} - {{ alert.alertType }} - {{alert.expired}}
      <template v-slot:action>
        <q-btn flat color="white" v-on:click="RemoveMessage(alert)" label="Dismiss"/>
      </template>
    </q-banner>
  </transition>
</template>

<script lang="ts">

import {AlertMessage, NotificationsService} from "@/services/notifications.services";

export default {
  name: "Notification",

  props: {
    alert: {} as AlertMessage
  },

  methods: {
    RemoveMessage(alert: AlertMessage) {
      NotificationsService.RemoveMessage(alert, true);
    }
  }
}
</script>

<style scoped>

</style>
