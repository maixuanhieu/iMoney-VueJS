import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const user = ref(null);

projectAuth.onAuthStateChanged(function(user){
    if 
})

export function useUser(){
    return {}
}