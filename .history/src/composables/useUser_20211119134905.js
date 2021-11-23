import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const user = ref(null);

projectAuth.onAuthStateChanged(function(user){
    if (_user) user.value = user
})

export function useUser(){
    return {}
}