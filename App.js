
var addtask=document.getElementById("task");
function Deletetask(){

}
function addTask(){
    const newtask=document.getElementById("new-task");
    const  addtask=newtask.value.trim();
    if(addtask===''){
        alert("enter a input value");
        return;
    }
    
        const tasklist=document.getElementById('add-task-inlist');
        const list=document.createElement("li");
       
       //delbutton 
        const adddelbutton=document.createElement("button");
        adddelbutton.textContent='Delete';

        //Input
        const CheckBox=document.createElement("input");
        CheckBox.type="checkbox";
        CheckBox.value=addtask;
        
        //label
        const label=document.createElement("label");
        label.textContent=addtask;

        
        adddelbutton.addEventListener("click",function(){
            list.remove();
        });
        //list.createElement("button");
       
       
        list.appendChild(CheckBox);
        list.appendChild(label);
        list.appendChild(adddelbutton);
        tasklist.appendChild(list);
        
        newtask.value='';
    
}

var http=require("http")
http.createServer(function(req,res){
    res.write("hello world")
    res.end()
}).listen(8080)