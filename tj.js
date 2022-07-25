let turn=new Audio("xt.wav")
let gf=new Audio("yt.wav")
let tu="X"
//changing of player turns
function player()
{
    return tu=="X"?"O" :"X"
}
let er=false;
//check  winnner
function winner()
{
    let boxtext=document.getElementsByClassName("boxtext");
    let prob=[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    prob.forEach(e=>{
        if((boxtext[e[0]].innerText!=="") && (boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) ){
            
             document.querySelector('.gstatus').innerText = boxtext[e[0]].innerText + "  Won";
             er=true;
             document.querySelector('.pic').getElementsByTagName('img')[0].style.width="200px";
             }
             if(er===true)
             {
                 gf.play();
             }
             
    })

}

let boxes=document.getElementsByClassName("box")
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=tu;
            tu= player();
            turn.play();
            winner();
            if(!er){
            document.getElementsByClassName("gstatus")[0].innerText= tu + " Its your Turn";
            er=false;
                  }
        }

    })
})

//start over button
reset.addEventListener('click',()=>{
    let boxtext=document.querySelectorAll('.boxtext')
    Array.from(boxtext).forEach(element=>{
        element.innerText="";
    });
    tu="X";
    er=false;
    document.getElementsByClassName("gstatus")[0].innerText= tu + " Its your Turn";
    document.querySelector('.pic').getElementsByTagName('img')[0].style.width="0px";

})