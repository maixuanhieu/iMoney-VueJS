import {} from "vue";
import { projectAuth } from "@/configs/firebase";

const error = ref(null);
const isPending = ref(false);

async function signup(email, password, fullName) {
    error = null;
  const response = await projectAuth.createUserWithEmailAndPassword(
    email,
    password
  );
  if (!response) throw new Error("Could not create a new user.");
  return response;
}

export function useSignUp() {
  return {};
}
