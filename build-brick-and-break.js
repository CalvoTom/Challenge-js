export function build(nbBrick){
        let id = 1;
        let interval = setInterval(function (qualifiedName, value) {
            const newBrick = document.createElement("div");
            newBrick.id = "brick-"+id.toString();
            newBrick.innerText = id.toString();
            if (id%2 === 0){
                newBrick.foundation = "true";
            }
            document.body.appendChild(newBrick);
            id++
            if (id > nbBrick) {
                clearInterval(interval);
            }
        },100);
}

export function repair(...ids){
    ids.forEach((id) =>{
        const currentBrick = document.querySelector("#"+id);
        if (!("foundation" in currentBrick.dataset)) {
            currentBrick.repaired = "in progress";
            currentBrick.innerText += "-in progress";
        }else{
            currentBrick.repaired = "true";
           currentBrick.innerText += "-repaired";
        }
    });

}

export function destroy (){
    document.querySelector('body > div:last-of-type').remove();
}