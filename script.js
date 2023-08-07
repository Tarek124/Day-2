const dragArea = document.querySelector('.container'),
    dragText = dragArea.querySelector("h3"),
    btn = dragArea.querySelector('button'),
    input = dragArea.querySelector('input');

let Myfile;

btn.addEventListener('click', () => {
    input.click()
})

input.addEventListener('change', () => {
    Myfile = this.files[0]
    dragArea.classList.add("active")
    showMe()
})

dragArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    dragArea.classList.add("active")
    dragText.innerText = 'Relese to Upload File'
})

dragArea.addEventListener('dragleave', (e) => {
    dragArea.classList.remove('active')
    dragText.innerText = 'Drag & Drop'
})


dragArea.addEventListener('drop', (e) => {
    e.preventDefault();
    Myfile = e.dataTransfer.files[0];
    showMe()
})

function showMe() {
    let filetype = Myfile.type;
    let ValidEx = ['image/jpeg', 'image/jpg', 'image/png'];
    if (ValidEx.includes(filetype)) {

        let fileReader = new FileReader();

        fileReader.onload = () => {
            let imgUrl = fileReader.result;
            let img = `<img src="${imgUrl}" alt="">`

            dragArea.innerHTML = img
        }
        fileReader.readAsDataURL(Myfile);

    } else {
        alert('This file is not Valid')
        dragArea.classList.remove("active")
        dragText.textContent = "Drag & Drop"
    }
}