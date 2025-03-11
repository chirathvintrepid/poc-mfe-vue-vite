<script setup>
import { defineAsyncComponent } from "vue";

const RemoteComponent = defineAsyncComponent(() =>
  import("remoteApp/RemoteComponent").catch((err) => {
    console.error("Failed to load remote module", err);
  })
);
</script>

<template>
  <div>
    <h1>🏠 Host App</h1>
    <RemoteComponent />
  </div>
</template>
