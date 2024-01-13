var defaultPrompt = "[guest@ak1932 ~]$"
var promptElem = document.getElementsByName("prompt")[0]
promptElem.innerText = defaultPrompt

var inputElem = document.getElementsByName("prompt_input")[0]
inputElem.addEventListener("focus", () => {inputElem.focus()});

var blinkCursor = document.getElementsByName("cursor")[0]
blinkCursor.onclick = inputElem.focus

inputElem.addEventListener("focus", () => {inputElem.focus()});

inputElem.addEventListener('input', resizeInput); // bind the "resizeInput" callback on "input" event
resizeInput.call(inputElem); // immediately call the function

function resizeInput() {
    this.style.width = this.value.length + "ch";
}

inputElem.addEventListener('change', () => {
    var inputValue = inputElem.value
    var promptValue = document.getElementsByName("prompt")[0].innerText
    var shellElem = document.getElementsByName("shell")[0]

    if (shellElem.innerText !== "") {
        shellElem.innerText = shellElem.innerText + "\n"
    }
    else {
        shellElem.innerText = ""
    }

    var output = ""

    var firstWord = inputValue.split(" ")[0]

    switch (firstWord) {
        case "help":
            output = 
`about => Some info about me
theme => Coz preety :)
server => Access to my servers
projects => Link to my coding projects
contact => If you feel deep in your heart the need to contact me
name => Let me know you were here
social => My social media
help => Guess what this does
clear => Clear output`
            break;

        case "about":
            output = 
`hi.
i am aryan kadole.
i am 19 years old.
i laugh 😆.
i love FOSS.
i hate proprietary stuff.
i love my privacy.`
            break;

        case "theme":
            var secondWord = inputValue.split(" ")[1]
            var bgcolor = "";
            var fgcolor = "";
            var prompt = "";
            var asciiart_start = "";
            var asciiart_end = "";
            var root = document.querySelector(':root');
            switch (secondWord) {
                case "nord":
                    bgcolor = "#2e3440"
                    fgcolor = "#8fbcbb"
                    prompt = "#5e81ac"
                    asciiart_start = "#5e81ac"
                    asciiart_end = "#8fbcbb"
                    output = "Changed to nord"
                    break;
                case "gruvbox":
                    bgcolor = "#282828"
                    fgcolor = "#fabd2f"
                    prompt = "#d79921"
                    asciiart_start = "#d79921"
                    asciiart_end = "#cc241d"
                    output = "Changed to gruvbox"
                    break;
                case "abomination":
                    bgcolor = "#fbf1c7"
                    fgcolor = "#b57614"
                    prompt = "#d79921"
                    asciiart_start = "#d79921"
                    asciiart_end = "#cc241d"
                    output = 
`Welcome to hell.
Changed to abomination`
                    break;
                case "everforest":
                    bgcolor = "#272e33"
                    fgcolor = "#d3c6aa"
                    prompt = "#a7c080"
                    asciiart_start = "#a7c080"
                    asciiart_end = "#dbbc7f"
                    output = "Changed to everforest"
                    break;
                case "onedark":
                    bgcolor = "#282c34"
                    fgcolor = "#e06c75"
                    prompt = "#61afef"
                    asciiart_start = "#e06c75"
                    asciiart_end = "#e5c07b"
                    output = "Changed to onedark"
                    break;
                case "catpuccin":
                    bgcolor = "#303446"
                    fgcolor = "#e78284"
                    prompt = "#ca9ee6"
                    asciiart_start = "#a6d189"
                    asciiart_end = "#e5c890"
                    output = "Changed to catpuccin"
                    break;
                case "tokyonight":
                    bgcolor = "#24283b"
                    fgcolor = "#ff9e64"
                    prompt = "#2ac3de"
                    asciiart_start = "#2ac3de"
                    asciiart_end = "#f7768e"
                    output = "Changed to tokyonight"
                    break;
                case "monokai":
                    bgcolor = "#2e2e2e"
                    fgcolor = "#6dcdd9"
                    prompt = "#ddbc5a"
                    asciiart_start = "#6dcdd9"
                    asciiart_end = "#9e92e3"
                    output = "Changed to monokai"
                    break;
                default:
                    var themes=["nord", "gruvbox", "everforest", "monokai", "onedark", "catpuccin", "tokyonight", "abomination"]
                    output = `Usage:
theme <themename>
Choose from 
${themes.join("\n")}`
                    break;
            }

            if (bgcolor !== "") {
                root.style.setProperty('--bgcolor', bgcolor);
                root.style.setProperty('--fgcolor', fgcolor);
                root.style.setProperty('--prompt', prompt);
                root.style.setProperty('--asciiart_start', asciiart_start);
                root.style.setProperty('--asciiart_end', asciiart_end);
            }
            break;

        case "server":
            var secondWord = inputValue.split(" ")[1]
            switch (secondWord) {
                case "navidrome":
                    output = "routing to navidrome";
                    var loc = window.location.href;
                    if(loc.includes("tail")) {
                        output += "\nIt seems you don't have tailscale access. If you require it ask ak1932 politely. politely being key :)"
                    }
                    else {
                        window.open(loc + "music/", '_blank');
                    }
                    break;
                case "jellyfin":
                    output = "routing to jellyfin";
                    var loc = window.location.href;
                    if(loc.includes("tail")) {
                        output += "\nIt seems you don't have tailscale access. If you require it ask ak1932 politely. politely being key :)"
                    }
                    else {
                        window.open(loc + "jellyfin/", '_blank');
                    }
                    break;
                default:
                    output = 
`Usage:
server <servername>
Choose from 
navidrome
jellyfin`
                    break;
            }
            break;

        case "contact":
            output = "Ooooo really? honoured 😌\n"
            break;

        case "name":
            var secondWord = inputValue.split(" ")[1]
            if(secondWord == undefined) {
                output = "Usage:\nname <your birth name if you have one>"
            }
            else {
                var name=inputValue.split(" ").slice(1).join(" ")
                switch(secondWord.toLowerCase()) {
                    case "harsha": 
                        output="uwu\n"
                        break;
                    case "praneel": 
                        output="paneer?\n"
                        break;
                    case "drishti": 
                        output="🐵\n"
                        break;
                    case "sahil": 
                        output="👨‍👧\n"
                        break;
                    case "shubham":
                        output="sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss\n"
                        break;
                }
                fetch(window.location.href, {
                  method: "POST",
                  body: JSON.stringify({
                      name: name,
                  }),
                  headers: {
                    "name": name
                  }
                });
                output += "Thanks for visiting :)"
            }
            break;

        case "projects":
            output = 
`TODO:-
1. Add good projects to showoff
2. Complete the aforementioned good projects
-----
Up for a collab tho. 😏`
            break;

        case "social":
            output = "hehe hehe hehe hehe hehe hehe hehe hehe hehe"
            break;

        case "clear":
            shellElem.innerText=""
            output = "expecting something funny here?"
            break;

        default:
            output = 
`bash: ${firstWord}: command not found
Try \`help\` for available commands`
            break;
    }

    var speed = 50;
    var i = 0;
    var indexedData = ""
    var outputElem = document.getElementsByName("output")[0]
    function typeWriter() {
        if (i < output.length) {
            indexedData += output.charAt(i)
            outputElem.innerText = indexedData;
            i++;
            setTimeout(typeWriter, speed);
        }
        else if (i === output.length) {
            setTimeout(() => { outputElem.innerText = ""; }, speed);
            i++;
            setTimeout(typeWriter, speed);
        }
        else {
            var shellValue=
                promptValue +
                " " +
                inputValue +
                "\n" +
                output

            shellElem.innerText += shellValue

            inputElem.value = ""
            inputElem.dispatchEvent(new Event('input', { bubbles: true }));
        }
    }

    typeWriter()
})
