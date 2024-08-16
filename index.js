const btn = document.getElementById("btn");
const riddle = document.getElementById("mid");
const answer = document.getElementById("answer");
const btn2 = document.getElementById("btn2");



const key = "YqIKjpnVYWCxy7fBzq1hCA==QlTHAvyR7LXiZOOC";

const url = "https://api.api-ninjas.com/v1/riddles";

const options = {
    method: "GET",
    headers: {
        'X-Api-Key': key,
    }

}

async function getrid() {
    riddle.innerHTML = "waiting for your riddle...."
    btn.disabled = true;
    btn.innerHTML = "loading"
    const response = await fetch(url, options);
    const data = response.json();
    data.then((full) => {
        riddle.innerText = (full[0].question);
    });

    btn.disabled = false;
    btn.innerHTML = "Click to generate riddle";

    answer.innerText = "";

    btn2.style.display = "block";

    
    function getans() {
        if(answer.innerText === ""){
            data.then((full) => {
                answer.innerText = "Answer: " + (full[0].answer);
                btn2.innerHTML = "Hide Answer";
                console.log("clicked1");
            });
        }
         
      else{
            answer.innerText = "";
            btn2.innerHTML = "Show Answer";
            console.log("clicked2");
        }
    
        return;
    }

    btn2.addEventListener('click', getans);
}

btn.addEventListener('click', getrid);

