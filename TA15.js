document.addEventListener('DOMContentLoaded', function (){
    const btn = document.getElementById('addElement')
    const input = document.getElementById('inputElement');
    const lista = document.getElementById('elementList');
    const deleted = document.getElementById('deleteElement');

    btn.addEventListener('click',function(){
        const texto = input.value.trim(); 

        if (texto) {
            const list = document.createElement('li');
            list.textContent = texto;
            lista.appendChild (list);
            input.value = '';
        }
    })
    deleted.addEventListener('click',function(){
        const lastElement = lista.lastElementChild;
        if (lastElement) {
            lista.removeChild(lastElement);
        }
    })
})
