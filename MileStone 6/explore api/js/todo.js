function Load_To_do(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res=>res.json())
    .then(data=>displayTodo(data));

}

function displayTodo(data){
    const todoConatainer=document.getElementById('to_do_container')
for (const comment of data){
    console.log(comment);
    const to_Do_div=document.createElement('div');
    to_Do_div.innerHTML=`
    <h3>Title: ${comment.title}</h3>
    <p>User:${comment.id}
    <p>Is Completed: ${comment.completed===true? 'completed' : 'not Completed'}
    `;
    todoConatainer.appendChild(to_Do_div);

}
}
Load_To_do();