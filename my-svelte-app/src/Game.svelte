<script>
  import Button from "./Button.svelte";

  var numberRandom = null;
  var number = null;
  var history = [];
  var isRandom = false;
  let attempts = 4;

  const handleRandomNumber = () => {
    numberRandom = Math.floor(Math.random() * 100) + 1;
    isRandom = true;
    history = [];
    number = null;
  };

  const handleCheck = () => {
    if (number == null) {
      alert("Please enter a number.");
      return;
    }

    if (number < 1 || number > 100) {
      alert("Please enter a number between 1 and 100.");
      return;
    }

    history = [...history, number];

    if (history.length == attempts) {
      alert("You've reached the maximum number of attempts. Please try again.");
      history = [];
      isRandom = false;
      number = null;
      return;
    }

    if (numberRandom > number) {
      alert("Too low, try higher!");
    } else if (numberRandom < number) {
      alert("Too high, try lower!");
    } else {
      alert("Congratulations! You guessed the correct number!");
      history = [];
      isRandom = false;
      number = null;
      return;
    }
  };
</script>

<div>
  <h1>Number Guessing Game</h1>
  <h2>Inut number from 1 to 100</h2>
  <div>Attempts: {attempts - history.length}</div>
  <Button label={'Generate number'} handleCheck={handleRandomNumber} disabled={false}></Button>
  <input type="number" bind:value={number} max=100 min=1/>
  <Button label={'Check number'} handleCheck={handleCheck} disabled={!isRandom}></Button>
  <div>History:</div>
  <ul>
    {#each history as h}
      <li>{h}</li>
    {/each}
  </ul>
</div>

<style>
</style>
