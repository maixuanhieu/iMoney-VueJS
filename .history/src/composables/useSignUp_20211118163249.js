import {} from "vue";
import { projectAuth } from "@/configs/firebase";

const error = ref(null);
const isPending = ref(false);

function signup(email, password, fullName) {
  await projectAuth.createUserWithEmailAndPassword(email, password);
}

export function useSignUp() {
  return {};
}
