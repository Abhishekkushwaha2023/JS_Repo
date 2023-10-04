/*["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L", " "],
  ["Enter", "z", "X", "C", "V", "B", "N", "M", "<"]*/

  var height = 6;
  var width = 5;

  var row = 0;
  var col = 0;
  
  var gameOver = false;

  var wordList = ["apple","banana","cat","dog","english","hen"]
  var guessList = ["apple","banana","cat","dog","english","hen","gril","ten"]

  guessList = guessList.concat(wordList);

  var word =wordList[Math.floor(Math.random()*wordList.length)].toUpperCase();
  console.log(word); 


    window.onload = function(){
        initialize();
    }

    function initialize(){
        for (let r = 0; r < height; r++){

            for (let c = 0; c < width; c++){
                let tile = document.createElement("span");
                tile.id = r.toString()+ "-"+ c.toString();
                tile.classList.add("tile");
                tile.innerText = " ";
                document.getElementById("board").appendChild(tile);
            }
        }
    

     // keyboard
     let keyboard =[
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L", " "],
        ["Enter", "Z", "X", "C", "V", "B", "N", "M", "<"]
    ]


        for (let i = 0; i < keyboard.length; i++){
            let currRow = keyboard[i];
            let keyboardRow = document.createElement("div");
            keyboardRow.classList.add("keyboard-row");

            for (let j = 0; j < currRow.length; j++){
            let keyTile = document.createElement("div");

            let key = currRow[j];
            keyTile.innerText = key;
            if (key == "Enter"){
                keyTile.id = "Enter";
            }
            else if (key == "<"){
                keyTile.id = "Backspace"
            }
            else if("A" <= key && key <= "Z")
            {
                keyTile.id = "Key" + key;
            }
            keyTile.addEventListener('click', processKey);


            if( key == "Enter"){
                keyTile.classList.add("enter-key-Tile");
            }else{ 
                keyTile.classList.add("key-Tile");
            }
            keyboardRow.appendChild(keyTile);
            }
            document.body.appendChild(keyboardRow);
            }
            document.addEventListener("keyup", (e) => {
            processInput(e);
            }) 
            }

            function processKey(){
            e = {"code" : this.id};
            processInput(e);
            }

            function processInput(e){
               if (gameOver) return;

                if ("KeyA" <= e.code && e.code <= "KeyZ"){
                    if (col < width){
                        let currTile = document.getElementById(row.toString() + '-' + col.toString());
                        if(currTile.innerText == " "){
                           currTile.innerText = e.code[3];
                           col+1
                        }
                    }
                }
                else if (e.code == "Backspace"){
                    if(0 < col && col <= width){
                        col-=1;
                    }
                    let currTile = document.getElementById(row.toString()+'-'+col.toString());
                    currTile.innerText = " ";
                }
                else if(e.code == "Enter"){
                    update();
                }

                if(!gameOver && row == height){
                    gameOver = true;
                    document.getElementById("answer").innerText = word;
                }
            }


            function update() {
                let guess = "";
                document.getElementById("answer").innerText = "";

                for (let c = 0; c < width; c++){
                    let currTile = document.getElementById(row.toString()+'-'+col.toString());
                    let letter = currTile.innerText;
                    guess += letter;
                }
                guess = guess.toLocaleLowerCase();
                console.log(guess);

                if(!guessList.includes(guess)){
                    document.getElementById("answer").innerText = "Not in word list";
                    return;
                }

                let correct = 0;
                let letterCount = {};
                for( let i = 0; i<word.length; i++){
                    let letter = word[i];
                    if (letterCount[letter]){
                        letterCount[letter]+=1;
                    }
                    else {
                        letterCount[letter] = 1;
                    }
                }
                console.log(letterCount); 

                for (let c = 0; c<width; c++){
                    let currTile = document.getElementById(row.toString()+'-'+col.toString());

                    if(word[c] == letter){
                        currTile.classList.add("correct");

                        let keyTile = document.getElementById("Key"+letter);
                        keyTile.classList.romove("present");
                        keyTile.classList.add("correct");
                        correct +=1 ;
                        letterCount[letter] -=1;
                    }
                    if(correct == width){
                        gameOver = true;
                    }
                }

                console.log(letterCount);

                for (let c = 0; c < width; c++){
                    let currTile = document.getElementById(row.toString()+'-'+col.toString());

                    if(!currTile.classList.contains("correct")){
                        if(word.includes(letter) && letterCount[letter]>0){
                            currTile.classList.add("present");

                            let keyTile = document.getElementById("Key" + letter);
                            if(!keyTile.classList.contains("correct")){
                                keyTile.classList.add("present");
                            }
                            letterCount[letter] -= 1;
                        }
                        else{
                            currTile.classList.add("absent");
                            let keyTile = document.getElementById("Key"+ letter);
                            keyTile.classList.add("absent")
                        }
                    }
                }
                row += 1;
                col = 0;
            }

         
   
  
  
