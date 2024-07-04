#! /usr/bin/env/ node
import inquirer from "inquirer";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    static select;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([
    {
        name: "Name",
        type: "input",
        message: "Please enter your name:"
    }
]);
let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "select your opponent",
        choices: ["Alien", "Captain", "Kache ke Daku"]
    }
]);
let p1 = new Player(player.Name);
let o1 = new Opponent(opponent.select);
do {
    if (opponent.select === "Alien") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What whould you like to do?",
                choices: ["Attack", "Booster", "Save for life"]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You lossed the game, Please try again");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Booster") {
            p1.fuelIncrease();
            console.log(`Hurrah! For long life${p1.fuel}`);
        }
        if (ask.opt == "Save for life") {
            console.log(" You Loose, Try again");
            process.exit();
        }
    }
    if (opponent.select === "Captain") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What whould you like to do",
                choices: ["Attack", "Booster", "Save for life"]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You lossed the game, Please try again");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Booster") {
            p1.fuelIncrease();
            console.log(`Hurrah! For long life${p1.fuel}`);
        }
        if (ask.opt == "Save for life") {
            console.log(" You Loose, Try again");
            process.exit();
        }
    }
    if (opponent.select === "Kache ke Daku") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What whould you like to do?",
                choices: ["Attack", "Booster", "Save for life"]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You lossed the game, Please try again");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Booster") {
            p1.fuelIncrease();
            console.log(`Hurrah! For long life${p1.fuel}`);
        }
        if (ask.opt == "Save for life") {
            console.log(" You Loose, Try again");
            process.exit();
        }
    }
} while (true);
