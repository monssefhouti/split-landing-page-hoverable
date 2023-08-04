let boxes =[];
const createContent=(e)=>{

    for ( let i=0;i<20;i++)
    {
        let box =document.createElement('div');
        box.className="scrolling_box";
        let contentTag=document.createElement("h2");
        contentTag.className="content";
        let tagTitle = document.createTextNode(` Content ${i+1}`);
        contentTag.appendChild(tagTitle);
        box.append(contentTag);
        document.body.appendChild(box);
        boxes.push(box);
    }
}
createContent();
const checkBoxes=()=>{
const triggerBottom = window.innerHeight/5 *4;

boxes.forEach(box=>{
    const boxTop = box.getBoundingClientRect().top;

    if(boxTop<triggerBottom)
    {
        box.classList.add('show');
    }else{
        box.classList.remove('show');
    }
})
}

window.addEventListener('scroll',checkBoxes);

