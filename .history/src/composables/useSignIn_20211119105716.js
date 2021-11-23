import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const error = ref(null);
const isPending = ref(false);

async function signin(email, password) {
    error.value = null;
    try {
        await response projectAuth.signInWithEmailAndPassword(email, password)
    } catch (err) {
        
    }
}

export function useSignIn(){
    return { error, isPending, signin}
}