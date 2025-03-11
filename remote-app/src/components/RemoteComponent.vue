<template>
  <div class="remote-component">
    <h2>🚀 Remote Component</h2>
    <button v-if="!userStore.user" @click="fetch">Fetch User</button>
    <div v-if="userStore.loading">Loading...</div>
    <div v-if="userStore.error" class="error">{{ userStore.error }}</div>
    <div v-if="userStore.user">
      <img :src="userStore.user.avatar" alt="User Avatar" class="avatar" />
      <h3>{{ userStore.user.first_name }} {{ userStore.user.last_name }}</h3>
      <p>Email: {{ userStore.user.email }}</p>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/userStore";

const userStore = useUserStore();

const fetch = () => {
  userStore.fetchUser();
};
</script>

<style scoped>
.remote-component {
  padding: 20px;
  border: 2px solid #ddd;
  text-align: center;
}

.avatar {
  width: 100px;
  border-radius: 50%;
  margin-top: 10px;
}

.error {
  color: red;
  font-weight: bold;
}
</style>
