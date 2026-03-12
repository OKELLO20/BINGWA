const dialog = document.getElementById("modal")
const wrapper = document.querySelector(".wrapper")

function showLoginDialog(){
 dialog.showModal() }

function closeLogin(){
 dialog.close() }

dialog.addEventListener("click", (e) => {
if(!wrapper.contains(e.target)){dialog.close()}
})
       
