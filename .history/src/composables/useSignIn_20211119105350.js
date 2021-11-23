import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const error = ref(null);
const isPending = ref(false);

async function signin(email, password) {
    console.error();
    try {
        await projectAuth.signInWithEmailAndPassword(email, password)
    } catch (err) {
        
    }
}

export function useSignIn(){
    return {}
}