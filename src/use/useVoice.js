import { reactive, ref } from "vue";
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
  
const recognition = SpeechRecognition ? new SpeechRecognition() : false;


const options = reactive({
  volume: 1,
  rate: 1,
  pitch: 1,
  lang: "pt-BR",
  text: "",
  isCapturingVoice: false,
});
const voice = ref(null);
function captureVoice() {
  return new Promise((resolve, reject) => {
    options.isCapturingVoice = true;
    let text = "";
    recognition.lang = "pt-BR"; // this.voiceSelect

    recognition.start();

    recognition.onresult = (event) => {
      let current = event.resultIndex;
      // Get a transcript of what was said.
      let transcript = event.results[current][0].transcript;
      // Add the current transcript to the contents of our Note.
      // var noteContent += transcript
      text += transcript;
      console.log("SUCESSO");
      console.log(text);
      resolve(text);
    };
    recognition.onspeechend = (event) => {
      // if (continuous) {
      // reject(false)
      // console.log('end')
      // }
    };
    recognition.nomatch = () => {
      // reject(false)
    };
    recognition.onend = () => {
      text = "";
    };
  });
}
function stopVoice() {
  recognition.stop();
  options.isCapturingVoice = false;
}
function setText(text = "") {
  options.text = text;
}

function playText() {
  const audio =
    voice.value == null ? new SpeechSynthesisUtterance() : voice.value;
  audio.text = options.text;
  audio.volume = options.volume;
  audio.pitch = options.pitch;
  audio.lang = options.lang;
  audio.text = options.text;
  window.speechSynthesis.speak(audio);
}

export { setText, playText, captureVoice, stopVoice, options };
