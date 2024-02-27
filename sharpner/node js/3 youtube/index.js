const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please enter your name: ", (name) => {
    rl.question("What is your father's name? ", (father) => {
        console.log("Your name is " + name);
        console.log("Your father's name is " + father);
        rl.close();
    });
});

rl.on('close', () => {
    console.log("Interface is closed");
    process.exit(0);
});
