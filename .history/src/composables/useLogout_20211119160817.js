/* eslint-disable no-undef */
import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const error = ref(null);

async function logout() {
  error.value = null;
  try {
    const response = await projectAuth.signOut();
    
    await response.user.updateProfile({ displayName: fullName })
    
    return response;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}

export function useSignUp() {
  return { error, isPending, signup };
}
