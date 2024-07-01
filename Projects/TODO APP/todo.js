let todoList = [
    {item: 'Buy Milk',dueDate: '07/06/2024'},
    {item: 'College', dueDate: '07/06/2024'}
];

displayItems();

function addTodo(params) {
    let inputelement = document.querySelector('#todo_input')
    let dateElement = document.querySelector('#todo_date')
    let todoitem = inputelement.value;
    let tododate = dateElement.value;
    // console.log(todoitem);
    todoList.push({item: todoitem, dueDate: tododate});
    inputelement.value = '';
    dateElement.value = '';
    displayItems();
}

function displayItems() {
    let containerElement = document.querySelector('.todo_container');
    let newHTML = '';
    for (let i = 0; i < todoList.length; i++) {
        // let item = todoList[i].item;
        // let dueDate = todoList[i].dueDate;
        let {item,dueDate} = todoList[i];
        newHTML += `
            <span>${item}</span>
            <span>${dueDate}</span>
            <button class="but_del" onclick="todoList.splice(${i}, 1);displayItems();">Delete</button>
        `;
    }

    containerElement.innerHTML = newHTML;
}
    // dispalyelement.innerText = '';
    // for (let i = 0; i < todoList.length; i++) {
    //     dispalyelement.innerText = dispalyelement.innerText + "\n" +
    //     todoList[i];
        
    // }