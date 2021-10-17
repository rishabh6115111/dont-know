const sidebar=document.querySelector('.sidebar')

const bar=document.querySelector('.bar')
let numClick=0;


bar.addEventListener('click',()=>{
    if(numClick%2===0){
        sidebar.classList.remove('trans1')
        sidebar.classList.add('trans')
        bar.classList.add('rot')
        bar.classList.remove('rot1')
    }
    else{
        sidebar.classList.remove('trans')
        sidebar.classList.add('trans1')
        bar.classList.add('rot1')
        bar.classList.remove('rot0')
    }
    numClick++;
    // bar.classList.toggle('rot')
   
})

