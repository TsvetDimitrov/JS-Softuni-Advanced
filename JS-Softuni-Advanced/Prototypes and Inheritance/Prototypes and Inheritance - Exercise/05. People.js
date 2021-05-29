// Define several classes, that represent a company’s employee records. Every employee has a name and age, a salary and a list of tasks, 
// while every position has specific properties not present in the others. Place all common functionality 
// in a parent abstract class. Follow the diagram bellow:
// Every position has different tasks. In addition to all common properties, 
// the manager position has a dividend he can collect along with his salary.
// All employees have a work() function that when called cycles trough the list responsibilities 
// for that position and prints the current one. When all tasks have been printed, 
// the list starts over from the beginning. Employees can also collect salary, which outputs the amount, plus any bonuses.
// Your program needs to expose a module, containing the three classes Junior, Senior and Manager. 
// The properties name and age are set trough the constructor, while the salary and a manager’s 
// dividend are initially set to zero and can be changed later. The list of tasks is filled by each position. 
// The resulting objects also expose the functions work() and collectSalary(). When work() is called, one of the following lines 
// is printed on the console, depending on the current task in the list:
// "{employee name} is working on a simple task."
// "{employee name} is working on a complicated task."
// "{employee name} is taking time off work."
// "{employee name} is supervising junior workers."
// "{employee name} scheduled a meeting."
// "{employee name} is preparing a quarterly report."
// And when collectSalary() is called, print the following:
// "{employee name} received {salary + bonuses} this month."
// Input / Output
// Any input will be passed as valid arguments, where applicable. Print any output that is required to the console as a string.
// Submit your code as a revealing module, containing the three classes. Any definitions need to be named exactly as described above.
// Hints
// We should begin by creating a parent class, that will hold all properties, shared among the different positions. 
// Looking at the problem description, we see the following structure for out parent object:


function people() {
    const TASKS = {
        JUNIOR: [" is working on a simple task."],
        SENIOR: [" is working on a complicated task.",
            " is taking time off work.",
            " is supervising junior workers."
        ],
        MANAGER: [" scheduled a meeting.",
            " is preparing a quarterly report."
        ]
    };
    class Employee {
        constructor(name, age, tasks) {
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = tasks;
            this._index = 0;
        }


        work() {
            if (this._index === this.tasks.length) {
                this._index = 0;
            }
            console.log(this.name + this.tasks[this._index]);
            this._index++;
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary} this month.`)
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age, TASKS.JUNIOR);
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age, TASKS.SENIOR);
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age, TASKS.MANAGER);
            this.dividend = 0;
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`)
        }
    }


    return {
        Employee,
        Junior,
        Senior,
        Manager
    }
}

const company = people();
const emp = new company.Employee('Tsvetomir', 20);
console.log(emp);