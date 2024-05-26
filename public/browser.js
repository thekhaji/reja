console.log("FrontEnd JS ishga tushdi");

function itemTemplate(data){
    console.log(data)
    return `<li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
    <span class="item-text"> ${data.reja} </span>
    <div>
        <button data-id="${data._id}" class="edit-me btn btn-secondary btn-sm mr-1">
            Ozgartirish
        </button>
        <button data-id="${data._id}" class="delete-me btn btn-danger btn-sm">Ochirish</button>
    </div>
</li>`
}

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function(e){
    e.preventDefault();
    axios.post("/create-item", {reja: createField.value})
    .then((response)=>{
        document.getElementById("item-list").insertAdjacentHTML("beforeend", itemTemplate(response.data));
        createField.value = "" ;
        createField.focus();
    })
    .catch((err)=>{
        console.log("Try again!!!");
    });

});

document.addEventListener("click", function(e){
    if(e.target.classList.contains("delete-me")){
        if(confirm("Are you sure to delete this plan?")){
            axios.post("/delete-item", {id: e.target.getAttribute("data-id")})
                .then((response)=>{
                    console.log(response.data);
                    e.target.parentElement.parentElement.remove();
                })
                .catch((err)=>{
                    console.log("please try again!");
                });
        }
    }

    if(e.target.classList.contains("edit-me")){
        let userInput = prompt("Edit the plan:", e.target.parentElement.parentElement.querySelector(".item-text").innerHTML);
        if (userInput){
            axios.post("edit-item", {id: e.target.getAttribute("data-id"), new_input: userInput})
            .then((response)=>{
                e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput;
            })
            .catch((err)=>{
                console.log("Try again to edit!");
            });
        }
    }
});

document.getElementById("clean-all").addEventListener("click", ()=>{
    axios.post("/delete-all", {delete_all: true})
    .then((response)=>{
        alert(response.data.state);
        document.location.reload();
    })
    .catch((err)=>{
        console.log("Try again to delete all plans!");
    });
})