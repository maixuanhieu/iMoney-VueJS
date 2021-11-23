import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const user = ref(null);

projectAuth.onAuthStateChanged()

export function useUser(){
    return {}
}