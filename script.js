const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
function addTask(){
    if(inputBox.value === ''){
        alert('Please write something to add');
    }
    else{
        // let img=document.createElement('img');
        // img.src='images/unchecked-icon.png';
        let li = document.createElement('li');
        // li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let text_field = document.createElement('span');
        let edit_icon = document.createElement('span');
        let remove_icon = document.createElement('span');
        // span.innerHTML= '\u00d7';
        text_field.className='text-field';
        edit_icon.className='edit-icon';
        remove_icon.className='remove-icon';
        text_field.innerHTML=inputBox.value;
        remove_icon.innerHTML='&times';
        edit_icon.innerHTML='&#9998';
        li.appendChild(text_field);
        li.appendChild(edit_icon);
        li.appendChild(remove_icon);
    }
    inputBox.value=''
    saveData();
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.className==='remove-icon'){
        e.target.parentElement.remove();
        saveData();
    }
    else if(e.target.className==='edit-icon'){
        const parentElement = e.target.parentElement;
        const item_text= parentElement.querySelector('.text-field');
        item_text.setAttribute('contenteditable', 'true');
        item_text.focus();
        item_text.addEventListener('blur', () => {
            item_text.removeAttribute('contenteditable');
            saveData();
        }, { once: true });
    }
}, false)

function saveData(){
    localStorage.setItem('data',listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem('data');
}

showTask();