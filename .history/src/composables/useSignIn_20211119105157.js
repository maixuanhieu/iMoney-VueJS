import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const error = ref(null);
const isPending = ref(false);

async function signin(email, password) {
    try {
        await projectAuth.signInWithEmailAndPassword()
    } catch (error) {
        
    }
}

export function useSignIn(){
    return {}
}