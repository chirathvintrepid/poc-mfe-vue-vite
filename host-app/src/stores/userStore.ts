import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("userHostStore", () => {
  const user = ref<any>(null);
  const loading = ref<boolean>(false);
  const error = ref<any>(null);

  const fetchUser = async () => {
    loading.value = true;
    error.value = null;
    try {
      console.log("Calling from Host app......");
      const response = await axios.get("https://reqres.in/api/users/4");
      user.value = response.data.data;
    } catch (err) {
      error.value = "Failed to fetch user.";
    } finally {
      loading.value = false;
    }
  };

  return { user, loading, error, fetchUser };
});
