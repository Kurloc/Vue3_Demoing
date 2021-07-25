<template>
  <div class="q-pa-md" style="width: 100%!important;padding: 0!important;">
    <q-layout view="lHh lpr lFf" container style="height: 75px;width: 100%;" class="shadow-2 rounded-borders">
      <q-header elevated style="height: 100%;width: 100%;">
        <q-toolbar style="height: 100%;width: 100%;">
          <q-btn flat round dense style="margin-right: 1vw;">
            <q-icon color="white" name="menu"/>
            <q-menu style="z-index: 100001">
              <q-list>
                <q-item clickable tag="router-link" :to="Urls.frontEnd.Home">
                  <q-item-section avatar>
                    <q-icon name="home"/>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Home</q-item-label>
                    <q-item-label caption>Home</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable tag="router-link" :to="Urls.frontEnd.About">
                  <q-item-section avatar>
                    <q-icon name="info"/>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>About</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable tag="router-link" :to="Urls.frontEnd.Demos.NotificationsDemo">
                  <q-item-section avatar>
                    <q-icon name="D"/>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Notifications Demo</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable tag="router-link" :to="Urls.frontEnd.Demos.CSharpApiDemo">
                  <q-item-section avatar>
                    <q-icon name="C"/>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>CSharp Api Demo</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>

          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>

          <q-toolbar-title>Quasar Framework</q-toolbar-title>

          <q-btn flat round dense icon="whatshot" v-on:click="ToggleNotifications()" />
        </q-toolbar>
      </q-header>
    </q-layout>
  </div>
</template>

<script lang="ts">
import NotificationsService from "@/services/notifications.services";
import {Urls} from "@/constants/Urls";

export default {
  name: "MainHeader",
  methods: {
    ToggleNotifications() {
      NotificationsService.showNotifications.value = !NotificationsService.showNotifications.value;
      console.log("Toggling Notifications", NotificationsService.showNotifications.value);
    }
  },

  data() {
    return {
      Urls
    }
  }
}
</script>

<style scoped>

</style>
