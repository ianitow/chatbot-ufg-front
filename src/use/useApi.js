import { reactive } from 'vue';
import { api } from '../boot/axios';
import axios from 'axios';

const state = reactive({
  name: '',
  course: '',
});
function setName(name = '') {
  state.name = name;
}

function setCourse(valor = '') {
  state.course = valor;
}

async function addNewRating(fullname, rating) {
  return new Promise((resolve, reject) => {
    axios
      .post('http://localhost:3000/ratings', {
        fullname,
        rating,
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function sendQuestionToAPI(context) {
  return new Promise((resolve, reject) => {
    api
      .post('/send-message', {
        data: {
          answer: context,
        },
      })
      .then(({ data, status }) => {
        resolve({ answers: data.answers, status });
      })
      .catch((error) => {
        reject(error);
      });
  });
}
function sendReportMessageToAPI(properties) {
  return new Promise((resolve, reject) => {
    api
      .post('/report-messages', {
        ...properties,
      })
      .then(({ data, status }) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export { state, setCourse, setName, addNewRating, sendQuestionToAPI, sendReportMessageToAPI };
