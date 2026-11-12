const input = document.getElementById('goal-input');
const addButton = document.getElementById('add-button');
const goalList = document.getElementById('goal-list');
const emptyMessage = document.getElementById('empty-message');
const form = document.getElementById('goal-form');

let goals = [];

function addGoal() {
    const goal = input.value.trim();
    if(goal) {
        goals.push(goal);
        localStorage.setItem('goal', JSON.stringify(goals));
        input.textContent = '';
    }
}

function reanderGoals() {
  goalList.replaceChild();
  goals.forEach(goal => createList(goal))
}

function createList(text) {
    const li = document.createElement('li');
    li.classList.add('goal-item');

    const span = document.createElement('span');
    span.classList.add('goal-text');
    span.textContent = text;

    const button = document.createElement('button');
    button.textContent = 'Delete';
    button.classList.add('delete-btn');

    li.append(span, button);

    return li
}