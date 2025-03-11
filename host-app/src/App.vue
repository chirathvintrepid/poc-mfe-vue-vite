<script setup>
import { defineAsyncComponent } from "vue";
// import { useUserStore } from "remoteApp/userStore";
import { useUserStore } from "@/stores/userStore";

const RemoteComponent = defineAsyncComponent(() =>
  import("remoteApp/RemoteComponent").catch((err) => {
    console.error("Failed to load remote module", err);
  })
);

const userStore = useUserStore();

const fetch = () => {
  userStore.fetchUser();
};
</script>

<template>
  <div>
    <h1>🏠 Host App</h1>
    <RemoteComponent />
    <hr />
    <h2>🔄 Shared Store Data in Host App</h2>
    <button v-if="!userStore.user" @click="fetch">Fetch User</button>
    <div v-if="userStore.user">
      <img :src="userStore.user.avatar" alt="User Avatar" class="avatar" />
      <h3>{{ userStore.user.first_name }} {{ userStore.user.last_name }}</h3>
      <p>Email: {{ userStore.user.email }}</p>
    </div>
  </div>
</template>

<style scoped>
.avatar {
  width: 100px;
  border-radius: 50%;
  margin-top: 10px;
}
</style>
