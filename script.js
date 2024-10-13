let container = document.querySelector(".container");
let btn = document.getElementById('btn');

function talk(text) {
    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'hi-GB';
    speech.rate = 1;
    speech.volume = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}

function talkMe() {
    let day = new Date();
    let hours = day.getHours();

    if (hours >= 0 && hours < 12) {
        talk("good morning");
    }
    else if (hours >= 12 && hours <= 16) {
        talk("good afternoon");
    }

    else {
        talk("good evenig");
    }
}
window.addEventListener('load', () => {
    talkMe();
})

let speechRecongnition = window.webkitSpeechRecognition;
let recongnition = new speechRecongnition();
recongnition.onresult = (ent) => {
    let currentInd = ent.resultIndex;
    let transcript = ent.results[currentInd][0].transcript;
    btn.innerText = transcript;
    speak(transcript.toLowerCase());
};
btn.addEventListener('click', () => {
    recongnition.start();
});

function speak(message) {
    if (message.includes("hello") || message.includes("hey")) {
        talk("hello sir how can i help you");
    }
    else if (message.includes("your name")) {
        talk("i am  Sophia the robot  created by Mr ajit sir");
    }
    else if (message.includes("gandu") || message.includes("chakka")) {
        talk("Mr or Mrs Mahendra Gundyaagoal");
    }
    else if (message.includes("makak") || message.includes("mkak")) {
        talk("Mr Abhishek kochargi");
    }
    else if (message.includes("who are you")) {
        talk("i am  Sophia your virtual assistant");
    }
    else if (message.includes("hey")) {
        talk("hello sir how can i help you ");
    }
    else if (message.includes("hi")) {
        talk("hello sir ");
    }
    else if (message.includes("open youtube")) {

        talk("opening youtube");
        window.open("https://www.youtube.com");
    }
    else if (message.includes("open google")) {
        talk("opening google ");
        window.open("https://www.google.com")
    }
    else if (message.includes("open facebook")) {
        talk("opening facebook ");
        window.open("https://www.facebook.com")
    }
    else if (message.includes("close facebook")) {
        talk("closing the facebook ");
        window.close("https://www.facebook.com")
    }
    else if (message.includes("open instagram" || message.includes("open insta"))) {
        talk("opening instagram app");
        window.open("https://www.instagram.com")
    }
    else if (message.includes("open whatsapp")) {
        talk("opening whatsapp ");
        window.open(`https://www.whatsapp.com/`)
    }
    else if (message.includes("open phone")) {
        talk("opening phone app");
        window.open(`phone:///`)
    }
    else if (message.includes("open message")) {
        talk("opening message app");
        window.open(`message:///`)
    }
    else if (message.includes("open truecaller")) {
        talk("opening truecaller ");
        window.open(` truecaller : /// `)
    }
    else if (message.includes("open calculater")) {
        talk("opening calculater ");
        window.open(`calculater:///`)
    }
    else if (message.includes("open Mx player")) {
        talk("opening mx player ");
        window.open(`mxplayer:///`)
    }
    else if (message.includes("open playit")) {
        talk("opening playit ");
        window.open(`playit:///`)
    }
    else if (message.includes("open camera")) {
        talk("opening CAMERA ");
        window.open(`camera:///`)
    }
    else if (message.includes("open settings")) {
        talk("opening settings ");
        window.open(`settings:///`)
    }

    else if (message.includes("time")) {
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" })
        talk(time);
    }
    else if (message.includes("time")) {
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" })
        talk(time);
    }
    else if (message.includes("date")) {
        let date = new Date().toLocaleString(undefined, { day: "numeric", month: "short" })
        talk(date);
    }

    else {
        let tex = "this is what i found on internet " + message.replace("Sophia", "");
        talk(tex);
        window.open(`https://www.google.com/search?q= ${message.replace("Sophia", " ")}`);

    }

}
