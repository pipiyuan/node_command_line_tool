#!/usr/bin/env node

const inquirer = require('inquirer');
const program = require("commander");
const shell = require("shelljs");
const chalk = require("chalk");

console.log('process.argv', process.argv);
console.log('process.cwd', process.cwd());

program.version(require("../package").version);
program.command('init').description('创建项目').action(() => {
    inquirer
        .prompt([
            /* Pass your questions in here */
            {
                type: 'input',
                message: '输入类容',
                name: 'name'
            }
        ])
        .then(answers => {
            // Use user feedback for... whatever!!
            console.log('answers', answers)
            inquirer
                .prompt([{
                    type: 'list',
                    message: '选择类容',
                    name: 'name',
                    choices: [
                        "Apple",
                        "Pear",
                        "Banana"
                    ]
                }])
                .then(answers => {
                    // Use user feedback for... whatever!!
                    console.log('answers', answers)
                });
        });
});

program.command('shell').description('shell example').action(() => {
    const remote = 'https://github.com/pipiyuan/test.git';
    const projectName = 'test';
    const command = `
		git clone ${remote}
		cd ${projectName}
		npm install
	`
    shell.exec(command, (error, stdout, stderr) => {
        if (error) {
            console.log(stdout)
            console.log(stderr)
        }
    })
});
program.command('png').description('shell png').action(() => {
    const remote = 'https://github.com/pipiyuan/test.git';
    const projectName = 'test';
    const command = "assss"
	console.log(chalk.blue(command))
});
program.parse(process.argv);
