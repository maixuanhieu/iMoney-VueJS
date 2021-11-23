import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const error = ref(null);
const isPending = ref(false);

async function signin(email, password) {
  error.value = null;
  try {
    const response = await projectAuth.signInWithEmailAndPassword(
      email,
      password
    ); 
    return
  } catch (err) {}
}

export function useSignIn() {
  return { error, isPending, signin };
}
