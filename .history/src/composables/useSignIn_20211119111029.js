import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const error = ref(null);
const isPending = ref(false);

async function signin(email, password) {
  isPending.value = true;
  error.value = null;
  try {
    const response = await projectAuth.signInWithEmailAndPassword(
      email,
      password
    ); 
    return response;
  } catch (err) {
      error.value = err.message;
  } finally {
      isPending.value = false;
      error.value = null;
  }
}

export function useSignIn() {
  return { error, isPending, signin };
}
