window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;

const recognition = new SpeechRecognition();
const icon = document.querySelector('i.fa.fa-microphone');
let paragraph = document.createElement('p');
let container = document.querySelector('.text-box');
container.appendChild(paragraph);

icon.addEventListener('click', () => {
    dictate();
});
const dictate = () => {
    recognition.start();
    recognition.onresult = (event) => {
        const speechToText = event.results[0][0].transcript;
        paragraph.textContent = speechToText;

        $.ajax({
            url: 'http://innhubhai.herokuapp.com/' + speechToText,
            method: 'POST'
        });
    }
};