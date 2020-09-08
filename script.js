(function(){
    const but = document.querySelector("#cor");
    const cor = document.querySelector("body");
    const hex_value = document.querySelector(".cor_nome");
    const cores = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    
    but.addEventListener('click', main);

    function main(){
        let audio = document.getElementById("musica");

        audio.play();
        changeHex();

    }

    function changeHex(){
        let hex = "#";

        for(let i = 0; i<6; i++){
            const index = Math.floor(Math.random()*cores.length)
            hex += cores[index]
        }
        hex_value.textContent = hex;
        cor.style.backgroundColor = hex; 
    }

    }
    )

()