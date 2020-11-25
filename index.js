var readline = require("readline-sync");

var shuffle = require("shuffle-array");

const chalk = require("chalk");

var questions = [
    {
        question: "Capital of Andaman and Nicobar Islands? ",
        answer: "PORT BLAIR",
        options: ["Bombooflat", "Garacharama", "Rangat", "Port Blair"],
        correctOption: 3
    },
    {
        question: "Capital of Arunachal Pradesh? ",
        answer: "ITANAGAR",
        options: ["Roing", "Tezu", "Pasighat", "Itanagar"],
        correctOption: 3
    },
    {
        question: "Capital of Assam? ",
        answer: "DISPUR",
        options: ["Dispur", "Guwahati", "Jorhat", "Tezpur"],
        correctOption: 0
    },
    {
        question: "Capital of Bihar? ",
        answer: "PATNA",
        options: ["Gaya", "Patna", "Darbhanga", "Arrah"],
        correctOption: 1
    },
    {
        question: "Capital of Chandigarh? ",
        answer: "CHANDIGARH",
        options: ["Jalandhar", "Pataila", "Mohali", "Chandigarh"],
        correctOption: 3
    },
    {
        question: "Capital of Chhattisgarh? ",
        answer: "RAIPUR",
        options: ["Bangalore", "Ranchi", "Raipur", "Patna"],
        correctOption: 2
    },
    {
        question: "Capial of Dadra and Nagar Haveli and Daman and Diu? ",
        answer: "SILVASSA",
        options: ["Silvassa", "Daman", "Naroli", "Vapi"],
        correctOption: 0
    },
    {
        question: "Capital of Delhi? ",
        answer: "NEW DELHI",
        options: ["New Delhi", "Connaught Place", "India Gate", "Gandhinagar"],
        correctOption: 0
    },
    {
        question: "Capital of Goa? ",
        answer: "PANAJI",
        options: ["Imphal", "Itanagar", "Hyderabad", "Panaji"],
        correctOption: 3
    },
    {
        question: "Capital of Gujarat? ",
        answer: "GANDHINAGAR",
        options: ["Ahmedabad", "Surat", "	Gandhinagar", "Rajkot"],
        correctOption: 2
    },
    {
        question: "Capital of Haryana? ",
        answer: "CHANDIGARH",
        options: ["Gurugram", "Panipat", "Ambala", "Chandigarh"],
        correctOption: 3
    },
    {
        question: "Capital of Himachal Pradesh? ",
        answer: "SHIMLA",
        options: ["Shimla", "Chandigarh", "Manali", "Bhopal"],
        correctOption: 0
    },
    {
        question: "Capital of Jharkhand? ",
        answer: "RANCHI",
        options: ["Jamshedpur", "Ranchi", "Dhanbad", "Ramgarh"],
        correctOption: 1
    },
    {
        question: "Capital of Karnataka? ",
        answer: "BANGALORE",
        options: ["Mangaluru", "Bangalore", "Mysuru", "Bidar"],
        correctOption: 1
    },
    {
        question: "Capital of Kerela? ",
        answer: "THIRUVANATHAPURAM",
        options: ["Kochi", "Kollam", "Thiruvananthapuram", "Kozhikode"],
        correctOption: 2
    },
    {
        question: "Capital of Ladakh? ",
        answer: "LEH",
        options: ["Srinagar", "Amini", "Leh", "Shopian"],
        correctOption: 2
    },
    {
        question: "Capital of Lakshadweep? ",
        answer: "KAVARATTI",
        options: ["Kavaratti", "Amini", "Palakkad", "Manjeri"],
        correctOption: 0
    },
    {
        question: "Capital of Madhya Pradesh? ",
        answer: "BHOPAL",
        options: ["Indore", "Bhopal", "Gwalior", "Jabalpur"],
        correctOption: 1
    },
    {
        question: "Capital of Maharashtra? ",
        answer: "MUMBAI",
        options: ["Mumbai", "New Delhi", "Chennai", "Nagpur"],
        correctOption: 0
    },
    {
        question: "Capital of Manipur? ",
        answer: "IMPHAL",
        options: ["Jiribam", "Imphal", "Kakching", "Kumbi"],
        correctOption: 1
    },
    {
        question: "Capital of Meghalaya? ",
        answer: "SHILLONG",
        options: ["Aizawl", "Kohima", "Shillong", "Agartala"],
        correctOption: 2
    },
    {
        question: "Capital of Mizoram? ",
        answer: "AIZAWL",
        options: ["Aizawl", "Champhai", "Khawzawl", "Biate"],
        correctOption: 0
    },
    {
        question: "Capital of Nagaland? ",
        answer: "KOHIMA",
        options: ["Dimapur", "Kohima", "Peren", "Phek"],
        correctOption: 1
    },
    {
        question: "Capital of Odisha? ",
        answer: "BHUBANESWAR",
        options: ["Bhubaneswar", "Cuttack", "Berhampur", "Rourkela"],
        correctOption: 0
    },
    {
        question: "Capital of Puducherry? ",
        answer: "PUDUCHERRY",
        options: ["Yanam", "Mahe", "Puducherry", "Karaikal"],
        correctOption: 2
    },
    {
        question: "Capital of Punjab? ",
        answer: "CHANDIGARH",
        options: ["Delhi", "Jaipur", "Chandigarh", "Chennai"],
        correctOption: 2
    },
    {
        question: "Capital of Rajasthan? ",
        answer: "JAIPUR",
        options: ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer"],
        correctOption: 0
    },
    {
        question: "Capital of Sikkim? ",
        answer: "GANGTOK",
        options: ["Mangan", "Gyalshing", "Gangtok", "Gyalshing"],
        correctOption: 2
    },
    {
        question: "Capital of Tamil Nadu? ",
        answer: "CHENNAI",
        options: ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli"],
        correctOption: 0
    },
    {
        question: "Capital of Telangana? ",
        answer: "HYDERABAD",
        options: ["Warangal", "Chennai", "Banglore", "Hyderabad"],
        correctOption: 3
    },
    {
        question: "Capital of Tripura? ",
        answer: "AGARTALA",
        options: ["Dharamanagar", "Agartala", "Kailasahar", "Udaipur"],
        correctOption: 1
    },
    {
        question: "Capital of Uttar Pradesh? ",
        answer: "LUCKNOW",
        options: ["Prayagraj", "Kanpur", "Gorakhpur", "Lucknow"],
        correctOption: 3
    },
    {
        question: "Capital of Uttarakhand? ",
        answer: "DEHRADUN",
        options: ["Lucknow", "Prayagraj", "Dehradun", "Shimla"],
        correctOption: 2
    },
    {
        question: "Capital of West Bengal? ",
        answer: "KOLKATA",
        options: ["Durgapur", "Kolkata", "Asansol", "Siliguri"],
        correctOption: 1
    }
];

var funFacts = [
  {
    fact: "Jammu & Kashmir have two capiatal cities\nSrinagar is the capiatal of Jammu & Kashmir in Summer\nJammu is the capital of Jammu & Kashmir in Winter\n\n"
  },
  {
    fact: "Andhra Pradesh and Telangana will share Hyderabad\nas thier capital for atleast till 2024.\n\n"
  },
  {
    fact: "The states Punjab and Haryana and the UT Chandigarh\nshare the same capital: Chandigarh\n\n"
  }
];

var leaderboard = [
  {
    name: "shubham",
    score: 40
  },
  {
    name: "sushant",
    score: 25
  },
  {
    name: "saurabh",
    score: 20
  }
];

var score = 0, streak = 0, right = 0;

var tenQuestion = shuffle.pick(questions, { 'picks': 10 });

var fact = shuffle.pick(funFacts, { 'picks': 1 });

function checkStreak()
{
  if (streak == 10)
  {
    console.log(chalk.black.bgWhite("\nWoah! You are a Perfectionist."));
  }
  else if(streak == 7)
  {
    console.log(chalk.cyanBright.italic("\nUnstoppable!!"));
  }
  else if (streak == 4)
  {
    console.log(chalk.magentaBright.italic("\nWoohoo! You are on a roll ;)"));
  }
  else ;
}

function rightAnswer()
{
  right++;
  score += 2;
  streak++;
  console.log(chalk.green("Right"));
}

function wrongAnswer()
{
  score--;
  streak = 0;
  console.log(chalk.red("Wrong"));
}

function correctAnswer(question)
{
  console.log("Correct answer is: " + chalk.green(question.options[question.correctOption]));
};

function checkAnswer(question, answer)
{
  var userAnswer = readline.question(question.question);

  if(userAnswer.toUpperCase() === answer)
  {
    rightAnswer();
  }
  else
  {
    wrongAnswer();
    correctAnswer(question);
  }
  checkStreak();
};

function checkMCQ(question, answer)
{
  console.log(question.question);
  var userOption = readline.keyInSelect(question.options, "Enter the correct option", {cancel: false});

  if(userOption == answer)
  {
    rightAnswer();
  }
  else
  {
    wrongAnswer();
    correctAnswer(question);
  }
  checkStreak();
};

function leaderBoard()
{
  var highScores = [leaderboard[0].score, leaderboard[1].score, leaderboard[2].score];
  var min = Math.min(...highScores);
  if(score > min)
  {
    console.log(chalk.underline("WOW! " + name + ", you are in top 3\n\n"));
    console.log(chalk.bgYellow("Leaderboard"));
    for(var i = 0, l = funFacts.length; i < l; i++)
    {
      console.log(i+1 + " " + chalk.bold(leaderboard[i].name) + ": " + leaderboard[i].score);
    }
    console.log(chalk.underline("\nSend me this screenshot to get your name featured in leaderboard\n\n"));
  }
};

function funFact()
{
  console.log(chalk.white.underline("\nDid you know?"));
  console.log(fact.fact);
}

console.clear();

var name = readline.question("What's your name? ");
console.log("Welcome, " + chalk.yellow(name) + "\nThis is a quiz about how much you know about India.\n+2 for ever right answer.\n-1 for every wrong answer.\nLesss go\n\n")

for(var i = 0, l = tenQuestion.length; i < l; i++)
{
  checkMCQ(tenQuestion[i], tenQuestion[i].correctOption);
  console.log("\n-------------------------------------------------\n");
}
if(score >= 7)
{
  console.log(chalk.green("Congratulations! "+ chalk.yellow(name) +". You answered " + right + " questions right.\nYour Score: " + score) + chalk.underline("\nYou go to Level 2.\n"));
  streak = 0;
  if (readline.keyInYN('Do you want to play Level 2? '))
  {
    console.clear();
    console.log(chalk.yellow(chalk.underline(name) + " in this level, you won't get any options.\nSo there's no guessing around.\nType the correct answer.\nKeep an eye on the spellings ;)"));
    for (var i = 0, l = tenQuestion.length; i < l; i++)
    {
      checkAnswer(tenQuestion[i], tenQuestion[i].answer);
      console.log("-------------------------------------------------\n");
    }
    console.log(chalk.green(chalk.yellow(name) + ", you answered " + right + " questions right.\nYour score: ") + score);
  }
}
else
{
  console.log(chalk.green(chalk.yellow(name) + ", you answered " + right + " questions right.\nYour Score: ") + score + chalk.red("\nFor Level 2, you need atleast 7 questions right.\nBetter luck next time!"));
}

funFact();

leaderBoard();