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

goalList.addEventListener('click', (e) => {
  deleteGoal(e);
});



let goals = loadGoals();
renderGoals()

function addGoal() {
    const goal = input.value.trim();
    if(goal) {
        goals.push(goal);
        localStorage.setItem('goals', JSON.stringify(goals));
        input.value = '';
    }
}



function renderGoals() {
  goalList.replaceChildren();
  
  goals.length > 0 ? emptyMessage.classList.add("hidden") : emptyMessage.classList
  .remove('hidden');

  goals.forEach(goal => {
    const li = createList(goal);
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

function deleteGoal(e) {
    const btn = e.target.closest(".delete-btn");
    if(!btn) return;

    const  li = btn.closest('.goal-item');
    const text = li.querySelector('.goal-text').textContent;

    goals = goals.filter(goal => goal !== text);
    
    localStorage.setItem('goals', JSON.stringify(goals));
    renderGoals()
}

function loadGoals() { 
    const goals = JSON.parse(localStorage.getItem('goals')) || [];
    return goals;
}