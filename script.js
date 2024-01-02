const btn = document.querySelectorAll('.button');
const body = document.querySelector('body');
console.log(body.innerText)
body.style.backgroundColor='aqua';

btn.forEach(
    (button) => { 
        // console.log(button.id);
        button.addEventListener('click',(e)=>{
            // console.log(e);
            console.log(e.target.id);
            body.style.backgroundColor=e.target.id;
            /*
            //if want to change the color of h1 tag text
            let htag=document.querySelectorAll('h1');
            htag.forEach((item)=>{
                item.style.color='red';
            })
            */
        } ) 
    }
)
