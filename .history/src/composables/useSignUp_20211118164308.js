import {} from "vue";
import { projectAuth } from "@/configs/firebase";
import 

const error = ref(null);
const isPending = ref(false);

async function signup(email, password, fullName) {
  error.value = null;
  try {
    const response = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (!response) throw new Error("Could not create a new user.");
    return response;
  } catch (err) {
      error.value = err.message;
  }
}

export function useSignUp() {
  return {};
}
