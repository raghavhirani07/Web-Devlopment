// If user add a note , add it to the localStorage
shownote();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);

    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    //   console.log(notesObj);
    shownote();
});

function shownote() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index) {
        html += ` <div class="card note" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">feedback${index +1}</h5>
            <p class="card-text">${element}</p>
            <button href="#" class="btn btn-primary" id="${index}" onclick=deleteNote(this.id)>Remove</button>
        </div>
    </div>`;
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html
    } else {
        notesElm.innerHTML = `nothuing here `
    }
}
// Function to delete a note
function deleteNote(index) {
    //   console.log("I am deleting", index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);

    localStorage.setItem("notes", JSON.stringify(notesObj));
    shownote();
}
let search = document.getElementById('serchtxt')
search.addEventListener("input", function() {
    let inputval = search.value.toLowerCase();
    let notecard = document.getElementsByClassName('note')
    Array.from(notecard).forEach(function(element) {
        //console.log(element)
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        // console.log(cardtxt)
        if (cardtxt.includes(inputval)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    })
})