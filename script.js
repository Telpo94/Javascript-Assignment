document.addEventListener("DOMContentLoaded", function() {
    const nextButton = document.getElementById('next-btn');
    const startGame = document.getElementById('startGame');


    
    // Handle players selection
    const playerButtons = document.querySelectorAll('.player-button');
    const selectedPlayersDiv = document.getElementById("selected-players");

    let selectedPlayers = null;

    playerButtons.forEach(button => {
    button.addEventListener('click', function() {
        playerButtons.forEach(btn => btn.style.backgroundColor = '#007bff'); // Reset color
        button.style.backgroundColor = '#28a745';// Highlight selected button

        selectedPlayers = button.dataset.players;
        selectedPlayersDiv.textContent = `Selected: ${selectedPlayers} Player${selectedPlayers > 1 ? 's' : ''}`;

        //nextButton.classList.add('active');
        nextButton.disabled = false; // Enable the next button
    });
    });


    // Handle subject selection
    const subjectButtons = document.querySelectorAll('.subject-button');
    const selectedSubjectDiv = document.getElementById("selected-subject");

    let selectedSubject = null;

    subjectButtons.forEach(button => {
    button.addEventListener('click', function() {
        subjectButtons.forEach(btn => btn.style.backgroundColor = '#007bff'); // Reset color
        button.style.backgroundColor = '#28a745';// Highlight selected button

        selectedSubject = button.dataset.subject;
        selectedSubjectDiv.textContent = `Selected: ${selectedSubject} Quiz`;

        if (selectedSubject != null && selectedDifficulty != null) {
            startGame.disabled = false; // Enable the next button
        }
    });
    });

    
    // Handle difficulty selection
    const difficultyButtons = document.querySelectorAll('.difficulty-button');
    const selectedDifficultyDiv = document.getElementById("selected-difficulty");

    let selectedDifficulty = null;

    difficultyButtons.forEach(button => {
    button.addEventListener('click', function() {
        difficultyButtons.forEach(btn => btn.style.backgroundColor = '#007bff'); // Reset color
        button.style.backgroundColor = '#28a745';// Highlight selected button

        selectedDifficulty = button.dataset.questions;
        selectedDifficultyDiv.textContent = `Selected: ${selectedDifficulty} Questions`;

        if (selectedSubject != null && selectedDifficulty != null) {
            startGame.disabled = false; // Enable the next button
        }
    });
    });

    
    let CSSquestions =[
        {
            question: "The stylesheet is the:",
            options: [
                "content of the web page",
                "presentation of the web page",
                "both answers are correct",
                "neither answer is correct"
            ],
            answer: "presentation of the web page"
        },
        {
            question: "The cleanest/easiest CSS style method to use and edit (least likelihood of errors):",
            options: ["In-line", "Internal", "External", "Embedded"],
            answer: "External"
        },
        {
            question: "Code used to link CSS file to html file:",
            options: [
                "<a href=\"stylesheet.css\">",
                "<link rel=\"stylesheet\" href=\"style.css\">",
                "{link rel \"stylesheet\" href=\"style.css\"}",
                "<meta style=\"stylesheet.css\" rel=\"stylesheet\">"
            ],
            answer: "<link rel=\"stylesheet\" href=\"style.css\">"
        },
        {
            question: "File extension for an external CSS file:",
            options: [".html", ".txt", ".csx", ".css"],
            answer: ".css"
        },
        {
            question: "CSS styles consist of the format:",
            options: ["property=value", "style=property", "property: value;", "style: value;"],
            answer: "property: value;"
        },
        {
            question: "CSS property used to center text:",
            options: ["textalign", "text-align", "align", "center"],
            answer: "text-align"
        },
        {
            question: "Prefix for a hex number color value:",
            options: ["#", ":", ";", "@"],
            answer: "#"
        },
        {
            question: "Color names in CSS property rules are referred to as:",
            options: ["codes", "selectors", "names", "values"],
            answer: "values"
        },
        {
            question: "Hex code characters range from the number 0 to the letter:",
            options: ["A", "F", "Z", "E"],
            answer: "F"
        },
        {
            question: "Instead of html tags, CSS has these to represent the element being styled:",
            options: ["codes", "selectors", "names", "values"],
            answer: "selectors"
        },
        {
            question: "Not a unit for font size in CSS:",
            options: ["px", "pt", "em", "%"],
            answer: "%"
        },
        {
            question: "HTML is the meaning or:",
            options: [
                "content of the web page",
                "presentation of the web page",
                "semantic part of the page",
                "neither answers are correct"
            ],
            answer: "content of the web page"
        },
        {
            question: "CSS script that underlines text:",
            options: [
                "text-transform: underline",
                "text-decoration: underscore",
                "text-transform: underscore",
                "text-decoration: underline"
            ],
            answer: "text-decoration: underline"
        },
        {
            question: "CSS style that inserts attributes into individual tags:",
            options: ["In-line", "Internal", "External", "Embedded"],
            answer: "In-line"
        },
        {
            question: "CSS colors can take the form of all except:",
            options: [
                "a color name",
                "an RGBa value",
                "a hex code",
                "monochromatic value"
            ],
            answer: "monochromatic value"
        },
        {
            question: "The most complicated/easiest to make errors style of CSS to use:",
            options: ["Internal", "In-line", "External", "Embedded"],
            answer: "In-line"
        },
        {
            question: "Which would be an appropriate property/value pair for styling the h2 selector?",
            options: [
                "text align: center;",
                "color: (255);",
                "font-size: 12 px;",
                "font-size: 16pt;"
            ],
            answer: "text align: center;"
        },
        {
            question: "Internal CSS is coded into the:",
            options: [
                "head section of the html document",
                "individual html tags",
                "body section of the html document",
                "body tag"
            ],
            answer: "head section of the html document"
        },
        {
            question: "CSS is the acronym for:",
            options: [
                "custom style sheet",
                "creative style sheet",
                "cascading style sheet",
                "consistent style sheet"
            ],
            answer: "cascading style sheet"
        },
        {
            question: "CSS embedded in the head section and affecting the whole HTML document:",
            options: ["In-line", "Embedded", "External", "Internal"],
            answer: "Embedded"
        },
        {
            question: "When creating a font-family tri-list, what should the last item in the list contain?",
            options: [
                "the font size",
                "font-weight",
                "generic font category",
                "alignment"
            ],
            answer: "generic font category"
        },
        {
            question: "For each selector in CSS on an internal or external stylesheet, there are properties inside:",
            options: ["square brackets", "parenthesis", "curly braces", "quotations"],
            answer: "curly braces"
        },
        {
            question: "CSS script to make only the first letter of every word uppercase:",
            options: [
                "text-transform: capitalize",
                "text-decoration: uppercase",
                "text-transform: uppercase",
                "text-decoration: capitalize"
            ],
            answer: "text-transform: capitalize"
        },
        {
            question: "Fonts WITHOUT extra wing-like attachments are referred to as:",
            options: ["fantasy fonts", "serif fonts", "monospace fonts", "sans-serif fonts"],
            answer: "sans-serif fonts"
        },
        {
            question: "Properties are separated from values by:",
            options: ["semicolons", "colons", "commas", "brackets"],
            answer: "colons"
        },
        {
            question: "Fonts that have extra wing-like attachments are referred to as:",
            options: ["open fonts", "serif fonts", "closed fonts", "sans-serif fonts"],
            answer: "serif fonts"
        },
        {
            question: "The default font-weight value, if you do not change anything, is:",
            options: [
                "font-weight: normal;",
                "font-weight: bold;",
                "font-weight: plain;",
                "not this one"
            ],
            answer: "font-weight: normal;"
        },
        {
            question: "The property used to make text italicized is:",
            options: ["text-transform:", "font-style:", "text-decoration:", "font-family:"],
            answer: "font-style:"
        },
        {
            question: "The property used to specify a certain font and its alternative options is:",
            options: ["text-transform:", "font-style:", "text-decoration:", "font-family:"],
            answer: "font-family:"
        },
        {
            question: "The html code at the very top of an HTML file:",
            options: [
                "<!CSS DOCTYPE>",
                "<DOCTYPE HTML>",
                "<!DOCTYPE>",
                "<!DOCTYPE HTML>"
            ],
            answer: "<!DOCTYPE HTML>"
        }
    ];

    let HTMLquestions =[
        {
            question: "What is full form of HTML?",
            options: [
                "Hyper thermal Maximum Language",
                "Hypertext Mathematic Language",
                "Hypertext Markup Language",
                "None Of these."
            ],
            answer: "Hypertext Markup Language"
        },
        {
            question: "Who invented HTML?",
            options: [
                "Bill Gates",
                "Steve Jobs",
                "Mark Zuckerberg",
                "Tim Berners Lee"
            ],
            answer: "Tim Berners Lee"
        },
        {
            question: "HTML is a language of:",
            options: [
                "Tags",
                "Tagged",
                "Commands",
                "All of the above."
            ],
            answer: "Tags"
        },
        {
            question: "This tag is used to create paragraphs in my web page:",
            options: [
                "<BR>",
                "<P>",
                "<HR>",
                "<HTML>"
            ],
            answer: "<P>"
        },
        {
            question: "We create our web page in:",
            options: [
                "Web Browser",
                "MS Paint",
                "MS Excel",
                "Notepad"
            ],
            answer: "Notepad"
        },
        {
            question: "This tag is used for giving title to our web page:",
            options: [
                "<head> tag",
                "<HTML> tag",
                "<Title> tag",
                "<body> tag"
            ],
            answer: "<Title> tag"
        },
        {
            question: "This tag is used to give a line break in a web page:",
            options: [
                "<P>",
                "<BR>",
                "<HR>",
                "<line>"
            ],
            answer: "<BR>"
        },
        {
            question: "<sup> tag is used to write text:",
            options: [
                "on same level of the remaining text",
                "above the remaining text",
                "below the remaining text",
                "None of these"
            ],
            answer: "above the remaining text"
        },
        {
            question: "We can change the color, size, and style of the text with:",
            options: [
                "<style>",
                "<color>",
                "<font>",
                "<size>"
            ],
            answer: "<style>"
        },
        {
            question: "We can make our text appear in Bold using this tag:",
            options: [
                "<B>",
                "<I>",
                "<U>",
                "All of the above"
            ],
            answer: "<B>"
        },
        {
            question: "We can add a horizontal line in our web page using tag:",
            options: [
                "<HR>",
                "<P>",
                "<BR>",
                "<Line>"
            ],
            answer: "<HR>"
        },
        {
            question: "We can make our text italicized with:",
            options: [
                "<B>",
                "<U>",
                "<I>",
                "<L>"
            ],
            answer: "<I>"
        },
        {
            question: "We can write the text appear below the remaining text by using tag:",
            options: [
                "<U>",
                "<SUP>",
                "<SUB>",
                "<Lower>"
            ],
            answer: "<SUB>"
        },
        {
            question: "We can see our web page in this software:",
            options: [
                "Text Editor",
                "Web Browser",
                "MS Word",
                "MS Paint"
            ],
            answer: "Web Browser"
        },
        {
            question: "What do HTML elements use tags for?",
            options: [
                "To structure content",
                "To make content noticeable",
                "To build content",
                "To link content"
            ],
            answer: "To structure content"
        },
        {
            question: "Which tags are used to create lists in HTML?",
            options: [
                "<list> <list item>",
                "<l> <ul> <li>",
                "<ul> <ol> <li>",
                "<ordered list> <unordered list> <list item>"
            ],
            answer: "<ul> <ol> <li>"
        },
        {
            question: "Tables columns are indicated in an HTML file by these tags:",
            options: [
                "<td></td>",
                "align",
                "rows",
                "Table"
            ],
            answer: "<td></td>"
        },
        {
            question: "HTML is a:",
            options: [
                "programming language",
                "app",
                "markup language",
                "coding language"
            ],
            answer: "markup language"
        },
        {
            question: "Types of List are created in HTML?",
            options: [
                "Ordered List",
                "Definition List",
                "Unordered List",
                "Nested List"
            ],
            answer: "Ordered List"
        },
        {
            question: "Do all tags need to be closed?",
            options: [
                "Yes",
                "No"
            ],
            answer: "No"
        },
        {
            question: "In HTML what is the difference between the opening and closing tags?",
            options: [
                "The closing tag has no / and the opening tag does",
                "The opening tag has no / and the closing tag does",
                "The opening tag starts with a capital, the closing doesn't",
                "The closing tag starts with a capital, the opening doesn't"
            ],
            answer: "The opening tag has no / and the closing tag does"
        },
        {
            question: "Where do we write the HTML Code?",
            options: [
                "Notepad",
                "Word",
                "Excel",
                "PowerPoint"
            ],
            answer: "Notepad"
        },
        {
            question: "In HTML paragraphs are shown using:",
            options: [
                "<p>",
                "<p/>",
                "<p/><p>",
                "<p></p>"
            ],
            answer: "<p></p>"
        },
        {
            question: "What type of standard is HTML?",
            options: [
                "Defacto",
                "Dejure",
                "Industry",
                "Open"
            ],
            answer: "Defacto"
        },
        {
            question: "What does the HTML tag <hr> do?",
            options: [
                "Inserts a line break",
                "Makes the text contained a header",
                "Inserts a horizontal line",
                "Forms an ordered list"
            ],
            answer: "Inserts a horizontal line"
        },
        {
            question: "What are the two sections of an HTML document?",
            options: [
                "HTML and CSS",
                "Top and Bottom",
                "Head and Body",
                "Code and Program"
            ],
            answer: "Head and Body"
        },
        {
            question: "Does spacing matter in an HTML document?",
            options: [
                "No",
                "Yes"
            ],
            answer: "No"
        },
        {
            question: "How do you create a paragraph in HTML?",
            options: [
                "Use complete sentences.",
                "Use capital letters and proper punctuation.",
                "Use <p> and </p>",
                "Just use <p>"
            ],
            answer: "Use <p> and </p>"
        },
        {
            question: "HTML is used to create what?",
            options: [
                "mobile apps",
                "webpages",
                "programs",
                "animations"
            ],
            answer: "webpages"
        },
        {
            question: "A hyperlink in HTML is coded using?",
            options: [
                "<href= />",
                "<a href= />",
                "<href></href>",
                "<a href></a href>"
            ],
            answer: "<a href= />"
        },
        {
            question: "Which tags set Heading Style 1?",
            options: [
                "heading",
                "<head>",
                "<h1>",
                "header"
            ],
            answer: "<h1>"
        },
        {
            question: "Why would you include meta tags when creating a website?",
            options: [
                "They make it look nice",
                "They provide keywords to search engines",
                "They define the fonts used",
                "They hide your website from the public"
            ],
            answer: "They provide keywords to search engines"
        },
        {
            question: "Between which two tags should ALL of your website content go?",
            options: [
                "<html> </html>",
                "<p> </p>",
                "<head> </head>",
                "<body> </body>"
            ],
            answer: "<body> </body>"
        }
    ];

    let JSquestions = [
        {
            question: "What is the name of this function? var ptBreak = function(swellSize)",
            options: [
                "var",
                "ptBreak",
                "function",
                "swellSize"
            ],
            answer: "ptBreak"
        },
        {
            question: "What command is used to ask the user a question in a pop-up window?",
            options: [
                "alert",
                "confirm",
                "prompt",
                "function"
            ],
            answer: "prompt"
        },
        {
            question: "What happens when you concatenate ('this' + 'that')?",
            options: [
                "thisthat",
                "tt",
                "this",
                "that"
            ],
            answer: "thisthat"
        },
        {
            question: "What happens when you concatenate var this = 'GROWTH'; with var that = 'MINDSET'; (this + that)?",
            options: [
                "thisthat",
                "GROWTHMINDSET",
                "GROWTH MINDSET",
                "this that"
            ],
            answer: "GROWTHMINDSET"
        },
        {
            question: "How long will the loop run? for(var i = 10; i < 10; i++)",
            options: [
                "10",
                "1",
                "0",
                "9"
            ],
            answer: "0"
        },
        {
            question: "What does not belong? for(var i = 0; i < 0; i++)",
            options: [
                "=",
                "var",
                "<",
                ";"
            ],
            answer: "="
        },
        {
            question: "What is mom? var mom = 'Very Nice!';",
            options: [
                "Nice",
                "Very",
                "Very Nice",
                "Nice Very"
            ],
            answer: "Very Nice"
        },
        {
            question: "Variables are the part of the program that...",
            options: [
                "Repeats",
                "Remembers",
                "Chooses",
                "Varies"
            ],
            answer: "Remembers"
        },
        {
            question: "Conditionals are the part of the program that...",
            options: [
                "Repeats",
                "Remembers",
                "Chooses",
                "Varies"
            ],
            answer: "Chooses"
        },
        {
            question: "Loops are the part of the program that...",
            options: [
                "Repeats",
                "Remembers",
                "Chooses",
                "Varies"
            ],
            answer: "Repeats"
        },
        {
            question: "How many times will 'hi' be printed?",
            options: [
                "2",
                "3",
                "4",
                "5"
            ],
            answer: "2"
        },
        {
            question: "What is the parameter? var apples = function(amount)",
            options: [
                "var",
                "apples",
                "function",
                "amount"
            ],
            answer: "amount"
        },
        {
            question: "Pick the for loop that runs 3 times...",
            options: [
                "for(var i = 3; i < 10; i++)",
                "for(var i = 3; i < 8; i++)",
                "for(var i = 3; i < 6; i++)",
                "for(var i = 3; i < 3; i++)"
            ],
            answer: "for(var i = 3; i < 6; i++)"
        },
        {
            question: "What is the variable name? var tableSetting = 'complete';",
            options: [
                "complete",
                "tableSetting",
                "var",
                "="
            ],
            answer: "tableSetting"
        },
        {
            question: "True or False? if(500 > 499)",
            options: [
                "true",
                "FALSE!!!"
            ],
            answer: "true"
        },
        {
            question: "TRUE or FALSE????? if(5 + 43 <= 48)",
            options: [
                "TRUE!!!",
                "false"
            ],
            answer: "TRUE!!!"
        },
    ];

    const questions = [CSSquestions, HTMLquestions, JSquestions]

    const players = ["Player 1", "Player 2", "Player 3", "Player 4"]; // Example players
    const playerColors = ["#007bff", "#28a745", "#ffc107", "#ff007f"];

    let currentPlayerIndex = 0;
    let currentQuestionIndex = 0;
    let timer;
    const maxTime = 30;
    let timeLeft = maxTime;

    const playerAnswers = [];

    const currentPlayerElement = document.getElementById("current-player");
    const questionText = document.getElementById("question-text");
    const answerButtons = document.querySelectorAll(".answer-btn");
    const submitButton = document.getElementById("submit-btn");
    const timerElement = document.getElementById("time-left");

    function loadQuestion() {
        const question = questions[1][currentQuestionIndex];
        questionText.textContent = question.question;
        answerButtons.forEach((btn, index) => {
            btn.textContent = question.options[index];
            btn.classList.remove("selected");
            btn.addEventListener('click', () => selectAnswer(index));
        });

        submitButton.disabled = true;
        //submitButton.classList.remove("enabled");
        timeLeft = maxTime;
        startTimer();
    }

    function selectAnswer(index) {
        answerButtons.forEach((btn) => btn.classList.remove("selected"));
        answerButtons[index].classList.add("selected");
        answerButtons[index].style.backgroundColor = "#28a745";
        submitButton.disabled = false;
    }

    function nextPlayer() {
        currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
        currentPlayerElement.textContent = "It's " + players[currentPlayerIndex] + "'s Turn";
        currentPlayerElement.style.background = playerColors[currentPlayerIndex];
    }

    function submitAnswer() {
        const selectedButton = document.querySelector(".answer-btn.selected"); 

        if (selectedButton == null) { //case timer ends
            playerAnswers.push({
                player: players[currentPlayerIndex],
                question: questions[1][currentQuestionIndex],
                selectedAnswer: null,
                correct: false
            });
        } else {
            const answerIndex = Array.from(answerButtons).indexOf(selectedButton);

            //update aswers array
            playerAnswers.push({
                player: players[currentPlayerIndex],
                question: questions[1][currentQuestionIndex],
                selectedAnswer: answerIndex,
                correct: answerIndex === questions[1][currentQuestionIndex].answer
            });
        };

        clearInterval(timer);

        currentQuestionIndex++;
        if (currentQuestionIndex < selectedDifficulty*selectedPlayers) {
            nextPlayer();
            loadQuestion();
        } else {
            // End game logic
            console.log(playerAnswers);
        }
    }

    
    function startTimer() {
        timerElement.textContent = timeLeft;
        timer = setInterval(() => {
            timeLeft--;
            timerElement.textContent = timeLeft;

            if (timeLeft <= 0) {
                clearInterval(timer);
                submitAnswer();
            }
        }, 1000);
    }

    //button.addEventListener('click', submitAnswer());
    submitButton.onclick = submitAnswer;
    loadQuestion();


});