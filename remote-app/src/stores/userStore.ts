import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useUserStore = defineStore("userRemoteStore", () => {
  const user = ref<any>(null);
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);

  const fetchUser = async () => {
    loading.value = true;
    error.value = null;
    try {
      console.log("Calling from Remote app......");
      const response = await axios.get("https://reqres.in/api/users/2");
      user.value = response.data.data;
    } catch (err) {
      error.value = "Failed to fetch user.";
    } finally {
      loading.value = false;
    }
  };

  return { user, loading, error, fetchUser };
});
