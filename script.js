const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    console.log(label);
    label.innerHTML=label.innerText.split('')
    .map((letter,idx) =>  
            `<span style="transition-delay: ${idx*30}ms">${letter}</span>`
    ).join('') 

    console.log(label.innerText.split(''))
})