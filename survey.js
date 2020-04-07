const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? Nicknames are also acceptable :) ', (answer) => {
  console.log(`Nice to meet you ${answer}`);

  rl.question('What\'s an activity you enjoy? ', (answer) => {
    console.log(`${answer} sounds really fun!`);
    
    rl.question('What meal is your favourite? (eg. dinner, brunch, etc.)', (answer) => {
      console.log(`Mmmmm... ${answer}... `);
      
      rl.question('What is your favourite thing to eat for that meal?', (answer) => {
        console.log(`Mmmmm... ${answer}... `);
        
        rl.question('What is your favourite sport to play?', (answer) => {
          console.log(`${answer} is a great sport! `);
          
          rl.close();
        });
      });
    });
  });
});