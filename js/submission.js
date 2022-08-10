let form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

class userData {
    constructor(name, email, message){
        this.Name = name;
        this.Email = email;
        this.Message = message;
        this.Date = Date.now();
    }
}

function handleSubmit(event) {
    event.preventDefault();
    let data = new FormData(form);
    let obj = new userData(data.get('name'), data.get('email'), data.get('message'));
    console.log(obj);
}
