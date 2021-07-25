<template>
  <q-layout view="lHh Lpr lFf">
    <Notifications/>
    <MainHeader/>
    <router-view/>
  </q-layout>
</template>

<script lang="ts">
import {provide, ref} from 'vue';
import Notifications from "@/components/Notifications/Notifications.vue";
import NotificationsService from "@/services/notifications.services"
import MainHeader from "@/components/Headers/MainHeader.vue";

const notificationsService = new NotificationsService();

export default {
  name: 'App',

  components: {
    MainHeader,
    Notifications,
  },

  provide: {
    notificationsService
  },

  setup() {
    provide('NotificationService', notificationsService)
    return {
      leftDrawerOpen: ref(false)
    }
  },
}
</script>


<style>
  .text-align-center {
    text-align: center;
  }
</style>
