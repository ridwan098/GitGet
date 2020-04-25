var btn = document.getElementById("btn");
var text = document.getElementById("txt");
var detail = document.getElementById("emptyText");

var client_id = " Iv1.28dec2a34b9057bb";
var client_secret = "12f8f940a393cf7789b56a763b145c74f5ddb760";

const fecthUsers = async (user) => {
    const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`);

    const data = await api_call.json();

    return {
        data
    }


    // .then(response => response.json())
    //     .then(data => console.log('data is', data))
    //     .catch(error => console.log('error is', error));
}

const showData = () => {
    fecthUsers(text.value).then((res) => {
        console.log(res);
        console.log(res.data);
        var info = JSON.stringify(res);



        if (res.data.message == "Not Found") {
            detail.innerHTML = "User Not Found";
        } else {
            console.log("look here: " + info);
            // for (var i of info) {
            //     console.log(i);

            // }
            detail.innerHTML = info;
        }



    })
}
btn.addEventListener("click", (e) => {
    e.preventDefault();
    showData();


})