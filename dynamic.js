let inputTask = document.querySelector('#input_add');
let btnFillTask = document.querySelector('.btn_add_task');
btnFillTask.addEventListener("click",function(){
    if(inputTask.value === ""){
        inputTask.focus();
        alert("Please Enter Your Task");
    }
    else{
        let taskListContainer = document.querySelector('.containList') ;
        let contain_task = document.createElement("div");
        contain_task.className = "containTask flex justify-between items-center flex-wrap bg-[#3e2378] shadow-[#8e61be] shadow-lg capitalize bg-[#130081] rounded-[0.5rem] my-[1.6rem] p-4 max-sm:p-2 ";
        let text_container = document.createElement("p");
        text_container.innerHTML= `${inputTask.value}`;        
        text_container.className ="p-active text-[1rem] max-sm:text-[0.8rem] text-[#fffbeb]";
        let I = document.createElement("i");
        I.className = "fa-solid fa-trash text-[red] capaitalize cursor-pointer text-[1rem] max-sm:text-[0.8rem]";
        contain_task.append(text_container,I);
        taskListContainer.append(contain_task);
        inputTask.value = "";
        I.addEventListener("click",function(){
            this.parentElement.remove();
        })
    }
})

let btnRemove = document.querySelector('.btn_clear_tasks');
btnRemove.addEventListener("click",function(){
    let pe = document.querySelectorAll(".p-active")
    pe.forEach(function(e){
        e.parentElement.remove();
    })
})

