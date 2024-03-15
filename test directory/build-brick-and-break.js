export function build(nbBrick){
        let id = 1;
        let interval = setInterval(function (qualifiedName, value) {
            const newBrick = document.createElement("div");
            newBrick.id = "brick-"+id.toString();
            newBrick.innerText = id.toString();
            if (id%3 === 2){
                newBrick.setAttribute("foundation","true");
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
        if (currentBrick.getAttribute("foundation") === "true") {
            currentBrick.setAttribute("repaired", "in progress");
            let idMiddle = currentBrick.getAttribute("id");
            idMiddle.replace('brick-', '');
            currentBrick.innerText = idMiddle + "-in progress";
        }else{
            currentBrick.setAttribute("repaired", "true");
            let idExt = currentBrick.getAttribute("id");
            idExt.replace('brick-', '');
            currentBrick.innerText = idExt + "-repaired";
        }
    });

}

export function destroy (){
    document.querySelector('body > div:last-of-type').remove();
}