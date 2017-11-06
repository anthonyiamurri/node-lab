// tasks.js
var tasks = [
  "Go fishing",
  "Take a trip",
  "Relax on the beach",
  "Eat everything"
];

function randomNum() {
  return Math.floor(Math.random() * tasks.length);
}

var task = tasks[randomNum()];

module.exports = {
  task: task
};
