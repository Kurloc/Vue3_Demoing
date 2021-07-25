<template class="content-center">
  <div class="text-align-center">
    CSharp Api Demo
    <div v-on:click="apiService.GetTestData()">
      <q-btn>
        <q-icon name="computer"></q-icon>
      </q-btn>
    </div>
  </div>
</template>

<script>
import {inject, onMounted} from "vue";
import TestCSharpApiService from "@/services/TestCSharpApiService.ts";

export default {
  name: "CSharpApiDemo",

  setup() {
    const apiService = inject('TestCSharpApiService', new TestCSharpApiService());

    onMounted(() => {
      apiService.GetTestData();
    })

    return {
      apiService
    }
  }
}
</script>

<style scoped>

</style>
