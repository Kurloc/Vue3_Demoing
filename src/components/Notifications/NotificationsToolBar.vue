<template>
  <div>
    <q-toolbar class="bg-grey-3">
      <q-toolbar-title style="color: black">
        Notifications
      </q-toolbar-title>

      <q-btn class="bg-grey-4" flat dense>
        <q-icon color="black" name="menu"/>
        <q-menu style="z-index: 100001">
          <q-list style="min-width: 150px">
            <q-item clickable v-close-popup>
              <q-item-section v-on:click="ClearMessages()">Clear Notifications</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </q-toolbar>
  </div>
</template>

<script>
import {NotificationsService} from "@/services/notifications.services.ts";

export default {
  name: "NotificationsToolBar",
  methods: {
    ClearMessages() {
      NotificationsService.ClearMessages();
    },
  },
}
</script>

<style scoped>

</style>
