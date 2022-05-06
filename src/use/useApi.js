import { reactive } from 'vue';
import { api } from '../boot/axios';
import axios from 'axios';

const state = reactive({
  name: '',
  course: '',
});

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

function setName(name = '') {
  state.name = name;
}
function setCourse(course = '') {
  state.course = course;
}

function sendQuestionToAPI(query) {
  return new Promise((resolve, reject) => {
    api
      .get('/answers', {
        data: {
          query,
        },
      })
      .then((array) => {
        resolve(array);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export { state, setCourse, setName, addNewRating, sendQuestionToAPI };
