const form = document.getElementById('add-item');
const itemList = document.getElementById('item-list');

form.addEventListener('submit',addItem);

itemList.addEventListener('click',removeItem);

itemList.addEventListener('change', checkItem);

function addItem(e){
    e.preventDefault();
    var newItem = document.getElementById('item').value;

    var li = document.createElement('li');
    li.className = 'list-item';

    var itemText = document.createElement('p');
    itemText.className = 'item-description';
    itemText.append(document.createTextNode(newItem));

    li.append(itemText);

    var rightBtns = document.createElement('div');
    rightBtns.className = 'float-right';

    var checkBtn = document.createElement('input');
    checkBtn.type = 'checkbox';
    checkBtn.className = 'check-button';
    checkBtn.name = 'check-button';
    rightBtns.appendChild(checkBtn);

    var removeBtn = document.createElement('button');
    removeBtn.className = 'remove-button';
    removeBtn.append(document.createTextNode('X'));
    rightBtns.appendChild(removeBtn);

    li.appendChild(rightBtns);
    itemList.appendChild(li);

    form.reset();
}

function removeItem(e){
    if(e.target.classList.contains('remove-button')){
        var li = e.target.parentElement.parentElement;
        itemList.removeChild(li);
    }
}

function checkItem(e){
    if(e.target.checked){
        var text = e.target.parentElement.previousElementSibling;
        text.classList.toggle('strikethrough');
    }
    else{
        var text = e.target.parentElement.previousElementSibling;
        text.classList.toggle('strikethrough');
    }
}
