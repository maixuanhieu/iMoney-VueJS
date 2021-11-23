import {} from "vue";
import { projectAuth } from "@/configs/firebase";

const error = ref(null);
const isPending = ref(false);

async function signup(email, password, fullName) {
    const response = await projectAuth.createUserWithEmailAndPassword(email, password);
    if (!response) throw new Error()
}

export function useSignUp() {
  return {};
}
