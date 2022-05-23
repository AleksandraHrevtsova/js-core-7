// console.log(window)
// console.dir(window.document);
// console.dir(document);

// const form = document.querySelector('form')
// const form = document.querySelector('.form');
const form = document.querySelector('#program-sighup');


// console.dir(form);
// console.log(form[0]);
// console.log(form[1]);

// console.log(form.elements);
// console.log("input value:",form.elements.userName.value);

form.addEventListener('input', (event)=>{
    // console.log('input EVENT:', event);
       if (event.target.id === 'userName') {
         checkValue(event.target, '^[a-zA-Z]+$');
       }
       if (event.target.id === 'email') {
         checkValue(event.target, '^[A-z]+@([A-z][-A-z]+.)+[A-z]{2,4}$');
       }
})
function checkValue(input, pattern){
    const regex = new RegExp(pattern);
    let checkValue = input.value.match(regex);
    if (!checkValue) {
        input.style.border = '2px solid red';
    }
}

form.addEventListener('change', event => {
    if (event.target.id === 'userName' ) {
        // checkValue(event.target, '^[a-zA-Z]+$');
    }
    if (event.target.id === 'email') {
        // checkValue(event.target, '^[A-z]+@([A-z][-A-z]+.)+[A-z]{2,4}$');
    }
});

form.addEventListener('submit', event => {
    event.preventDefault()
    // console.log('submit EVENT:', event);
    // console.log('target elements EVENT:', event.target.elements);
    // console.log('name:', event.target.elements.userName.value);
    // console.log('email:', event.target.elements.email.value);
    
    const user = {
        name: event.target.elements.userName.value,
        email: event.target.elements.email.value,
    }
    // console.log('user:', user);
    return user
});

// ()=>{}