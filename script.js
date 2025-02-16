//your JS code here. If required.
 document.getElementById("submit").addEventListener("click", (event)=>{
       
        let title = document.getElementById("title").value
        let author = document.getElementById("author").value
        let isbn = document.getElementById("isbn").value
        let table = document.querySelector(".book-list");
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${title}</td>
            <td>${author}</td>
            <td>${isbn}</td>
            <td><button class="delete">Delete</button></td>
        `;
        if (title === "" || author === "" || isbn === "") {
            alert("Please fill in all fields.");
            return;
        }
        table.appendChild(row);
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("isbn").value = "";
    });
    document.querySelector(".book-list").addEventListener("click", function (event) {
        if (event.target.tagName === "BUTTON") {
            event.target.parentElement.parentElement.remove();
        }
    });

