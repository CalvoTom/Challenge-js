export function getArchitects (){
    const ArrayTagA = document.getElementsByTagName("a")
    const ArrayNonArchitect = document.getElementsByTagName("span")
    const Array = [ArrayTagA, ArrayNonArchitect]
    return Array
}

export function getClassical(){
    const ArrayClassClassical = document.getElementsByClassName("classical")
    const ArrayNonClassical = document.getElementsByClassName("modern baroque")
    const Array = [ArrayClassClassical, ArrayNonClassical]
    return Array
}

export function getActive (){
    const ArrayClassClassicalActive = document.querySelectorAll("a.classical.active")
    const ArrayClassClassicalNotActive = document.querySelectorAll("a.classical:not(.active)")
    const Array = [ArrayClassClassicalActive, ArrayClassClassicalNotActive]
    return Array
}

export function getBonannoPisano (){
    const IdBonannoPisano = document.getElementById("BonannoPisano")
    const ArrayClassClassicalActive = document.querySelectorAll("a.classical.active")
    const Array = [IdBonannoPisano, ArrayClassClassicalActive]
    return Array
}