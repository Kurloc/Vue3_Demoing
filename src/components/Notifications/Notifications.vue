<template>
    <div style="max-height: 20vh;min-height: 10vh!important;width: 33vw;position: absolute; top: 3vh; right: 2vw;z-index: 100000">
      <q-card style="margin-bottom: 1vh;margin-left: 5%; margin-top: 1vh;max-height: 500px;overflow-y: scroll;min-height: 250px;min-width: 300px;"
              v-if="showNotifications === true"
              v-on:mouseleave="FocusOut()">
        <NotificationsToolBar/>
        <div v-for="(alert) in GetMessages().value" :key="alert.id"
             style="display: block!important;padding: .5vw .5vw .5vw .5vw">
          <Notification v-bind:alert="alert"/>
        </div>
      </q-card>
    </div>
</template>

<script lang="ts">
import {inject, ref} from "vue";
import {AlertMessage, NotificationsService} from "@/services/notifications.services"
import NotificationsToolBar from "@/components/Notifications/NotificationsToolBar.vue";
import Notification from "@/components/Notifications/Notification.vue";

const defaultLifeSpanMs = 7500;

export default {
  components: {Notification, NotificationsToolBar},
  name: 'Notifications',
  setup() {
    const notifications = inject('NotificationService', new NotificationsService());
    const messageToAdd = ref({
      alertType: 'Success',
      message: 'Message Text',
      lifespanMs: defaultLifeSpanMs,
      id: NotificationsService.Uuidv4()
    } as AlertMessage);

    return {
      messageToAdd,
      notifications: notifications
    }
  },

  data() {
    return {
      show: true,
      showNotifications: NotificationsService.showNotifications
    }
  },

  methods: {
    AddMessage(message: AlertMessage) {
      NotificationsService.AddMessages([message])

      return {
        alertType: 'Success',
        message: 'Message Text',
        lifespanMs: defaultLifeSpanMs,
        id: NotificationsService.Uuidv4(),
        expired: false,
      } as AlertMessage;
    },

    FocusOut() {
      if (NotificationsService.messages.value.length > 0) return;
      setTimeout(() => {
        console.log("Focusing Out!");
        NotificationsService.showNotifications.value=false;
      }, 250)
    },

    ClearMessages() {
      NotificationsService.ClearMessages();
    },

    GetMessages() {
      return NotificationsService.messages;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
