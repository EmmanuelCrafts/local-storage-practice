const input = document.getElementById('goal-input');
const addButton = document.getElementById('add-button');
const goalList = document.getElementById('goal-list');
const emptyMessage = document.getElementById('empty-message');
const form = document.getElementById('goal-form');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    addGoal();
    renderGoals();
    
});



let goals = [];

function addGoal() {
    const goal = input.value.trim();
    if(goal) {
        goals.push(goal);
        localStorage.setItem('goal', JSON.stringify(goals));
        input.value = '';
    }
 console.log(goals);
}



function renderGoals() {
  goalList.replaceChildren();
  goals.forEach(goal => {
    const li = createList(goal);
    console.log(li);
    goalList.appendChild(li);
  })
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

    return li;
}