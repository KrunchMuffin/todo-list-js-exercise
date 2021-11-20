function newTask(title, description) {
  return {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? ' ' : ' not '}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    },
  };
}

// DRIVER CODE CHANGES BELOW

const task1 = newTask('Clean Cat Litter', 'Take all the 💩 out of the litter box');
const task2 = newTask('Do Laundry', '😨');
// const tasks = [task1, task2];  THIS ISN'T USED

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed

task2.logState();
task2.markCompleted();
task2.logState();
