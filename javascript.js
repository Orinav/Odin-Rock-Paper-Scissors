function getComputerChoice()
{
  let random_number = Math.random(); // gives a number between 0 (inclusive) and 1 (exclusive)

  if (random_number < 0.33)
    return "rock";
  else if (random_number < 0.66)
    return "paper";
 else
    return "scissors";
}

function getHumanChoice()
{
    return prompt("Enter rock, paper, or scissors:");
}

function playRound(human_choice, computer_choice)
{
    human_choice = human_choice.toLowerCase();

    if (human_choice === computer_choice)
        alert("Round ended with a Tie!\nCurrent score:\nHuman= " + human_score + " Computer =" + computer_score);

    else if
    (
        (human_choice === "rock" && computer_choice === "scissors") ||
        (human_choice === "paper" && computer_choice === "rock") ||
        (human_choice === "scissors" && computer_choice === "paper")
    )
    {
        human_score++;
        alert("Human won this Round!\nCurrent score:\nHuman = " + human_score + " Computer =" + computer_score);
    }
    else
    {
        computer_score++;
        alert("Computer won this Round!\nCurrent score:\nHuman = " + human_score + " Computer =" + computer_score);
    }
}

alert("Welcome to the game Rock, Paper, Scissors!")

let human_score = 0
let computer_score = 0

for (let i = 0; i < 5; i++)
{
    const human_selection = getHumanChoice();
    const computer_selection = getComputerChoice();
    playRound(human_selection, computer_selection);
}

if (human_score > computer_score)
    alert("Human won the Game!");
else if (human_score < computer_score)
    alert("Computer won the Game!");

