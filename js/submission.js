let form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

class userData {
    constructor(name, email){
        this.Name = name;
        this.Email = email;
        this.Date = Date.now();
    }
}

function handleSubmit(event) {
    event.preventDefault();
    let data = new FormData(form);
    let obj = new userData(data.get('name'), data.get('email'));
    console.log(obj);
}
