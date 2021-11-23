import {} from "vue";
import { projectAuth } from "@/configs/firebase";

const error = ref(null);
const isPending = ref(false);

function signup(email, password) {
  projectAuth.createUserWithEmailAndPassword()
}

export function useSignUp() {
  return {};
}
