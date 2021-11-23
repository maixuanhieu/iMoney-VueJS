import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const user = ref(null);

projectAuth.onAuthStateChanged(function (user) {
  if (_user) user.value = _user;
});

export function useUser() {
  return {};
}
