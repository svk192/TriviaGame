$(document).ready(function () {
    var questions = [
        {
            question: "What type of product's commercial is Joey a part of?",
            options: ["cars", "food", "lipstick"],
            answer: "lipstick",
            image: "https://media.giphy.com/media/l4Ki6CgyyOU6IIO6A/giphy.gif"

        },

        {
            question: "What is Joey's favorite food?",
            options: ["Sandwiches", "Salad", "Pizza"],
            answer: "Sandwiches",
            image: "https://media.giphy.com/media/pyEDsTDy2aIR5SXkBD/giphy.gif"

        },

        {
            question: "What is Monica's Occupation",
            options: ["Masseuse", "Chef", "Agent"],
            answer: "Chef",
            image: "https://media.giphy.com/media/IdyHPMy8eqZ68/giphy.gif"

        },
        {
            question: "Whose catchphrase is 'Oh My God!'?",
            options: ["Janice", "Monica", "Ross"],
            answer: "Janice",
            image: "https://media.giphy.com/media/fYPtYT18vVLm8/giphy.gif"

        },
        {
            question: "What is the name of the Coffee Shop?",
            options: ["Friends Cafe", "Central Perk", "Central Park"],
            answer: "Central Perk",
            image: "https://media.giphy.com/media/6KoHLujBN4QWk/giphy.gif"

        },
        {
            question: "Who was the bride in the first one?",
            options: ["Pheobe", "Monica", "Rachel"],
            answer: "Rachel",
            image: "https://media.giphy.com/media/w5M9QgelugIJG/giphy.gif"

        },

    ];

    var questionNumber = [0, 1, 2, 3, 4, 5];
    shuffle(questionNumber);
    var clockRunning = false;
    var intervalId;
    var wins = 0;
    var losses = 0;
    var counter = 0;
    var questionNumber = 0;
    // var timeOut;
    var timeOutShort;
    var timeOutLong;
    var time = 30;


    $(document).on("click", "#StartGame", function () {
        // event.preventDefault();

        $(this).remove();
        nextquestion();


    });

    // $("#StartGame").on("click", function () {
    $(document).on("click", ".option", function () {
        console.log("counter" + counter);
        // event.preventDefault();//

        checkAnswer($(this).attr("data-letter"));

    });

    // });

    function nextquestion() {
        console.log("counter" + counter);
        if (counter < 5) {

            reset();

            clearTimeout(timeOutShort);
            clearTimeout(timeOutLong);
            displayQuestion();

        }
        else {
            var message;
            var image = $("<img>");

            if (wins >= losses) {

                image.attr("src", "https://media.giphy.com/media/j9T65td3Kjqko/giphy.gif");
                message = "You are the winner!"
            }
            else {
                image.attr("src", "https://media.giphy.com/media/10I5e2yNnaozOo/giphy.gif");
                message = "Better Luck Next Time!"
            }

            $("#container").html("<p>" + "End!" + "</p><br> Wins:"
                + wins + "<br> Losses:"
                + losses + "<br>"
                + message + "<br>"
            );
            $("#container").append(image);

            stop();



        }


    }

    function checkAnswer(data) {

        console.log(data);
        stop();
        if (data === 0) {
            console.log("Timout");
            losses++;
            $("#Options").empty();
            $("#Question").empty();

            $("#display").empty();


            $("#result").html("<p>" + "Time Out!" + "</p>" +
                "<p>" + "Correct Answer: " + questions[questionNumber].answer + "</p>");

            timeOutShort = setTimeout(nextquestion, 2000);

        }


        else if (data === questions[questionNumber].answer) {
            console.log("Correct");
            wins++;
            $("#Options").empty();
            $("#Question").empty();

            $("#display").empty();
            $("#result").html("<p>" + "Correct!" + "</p>" +
                "<p>" + "Correct Answer: " + questions[questionNumber].answer + "</p>");

            timeOutShort = setTimeout(nextquestion, 2000);

        }
        else {
            console.log("Not Correct");
            losses++;
            $("#Options").empty();
            $("#Question").empty();
            $("#display").empty();

            timeOutShort = setTimeout(nextquestion, 2000);

            $("#result").html("<p>" + "Not Correct!" + "</p>" +
                "<p>" + "Correct Answer: " + questions[questionNumber].answer + "</p>");



        }
        var image = $("<img>");
        image.attr("src", questions[questionNumber].image);
        $("#result").append(image);
    }


    function displayQuestion() {


        questionNumber = counter;

        $("#Question").html(questions[questionNumber].question);
        shuffle(questions[questionNumber].options);
        for (i = 0; i < 3; i++) {

            var newDiv = $("<div>");
            newDiv.html((i + 1) + ") " + questions[questionNumber].options[i]);
            // $("#Options").append("<div>" + (i + 1) + ") " + questions[qno].options[i] + "</div>");

            newDiv.attr("data-letter", questions[questionNumber].options[i]);
            newDiv.addClass("option");
            $("#Options").append(newDiv);
        }

        counter++;
        timeOutLong = setTimeout(checkAnswer, 30000, 0);
    }



    function shuffle(array) { array.sort(() => Math.random() - 0.5); }




    function start() {

        // DONE: Use setInterval to start the count here and set the clock to running.
        if (!clockRunning) {
            intervalId = setInterval(count, 1000);
            clockRunning = true;

        }
    }

    function count() {
        time--;

        var converted = time;
        console.log(converted);
        $("#display").text("Time Remaining:" + converted);
    }

    function stop() {
        clearInterval(intervalId);
        clockRunning = false;
    }

    function reset() {
        stop();
        $("#Options").empty();
        $("#Question").empty();
        $("#result").empty();

        time = 30;

        $("#display").text("Time Remaining: 30");
        start();
    }


});