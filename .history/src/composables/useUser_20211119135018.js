import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const user = ref(projectAuth);

projectAuth.onAuthStateChanged(function (_user) {
  if (_user) user.value = _user;
});

export function useUser() {
  return {};
}
