import { reactive } from "vue";
import { api } from "../boot/axios";
const state = reactive({
  name: "",
  course: "",
});

function setName(name = "") {
  state.name = name;
}
function setCourse(course = "") {
  state.course = course;
}

function sendQuestion(question, id = 1) {
  return new Promise((resolve, reject) => {
    const MIN_WAITING_RESPONSE = 3000;
    const now = Date.now();

    api
      .get(`/aswners/${id}`, {
        data: {
          question,
        },
      })
      .then((response) => {
        const end = Date.now();
        if (end - now >= MIN_WAITING_RESPONSE) {
          resolve(response);
        } else {
          setTimeout(() => {
            resolve(response);
          }, MIN_WAITING_RESPONSE - (end - now));
        }
      })
      .catch((e) => {
        const end = Date.now();
        const message = "Erro no servidor";
        if (end - now >= MIN_WAITING_RESPONSE) {
          reject({ message });
        } else {
          setTimeout(() => {
            reject({ message });
          }, MIN_WAITING_RESPONSE - (end - now));
        }
      });
  });
}

export { state, setCourse, setName, sendQuestion };
