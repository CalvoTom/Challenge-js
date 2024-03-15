export function getArchitects (){
    const ArrayTagA = document.querySelectorAll("body a")
    const ArrayNonArchitect = document.querySelectorAll("body span")
    const Array = [ArrayTagA, ArrayNonArchitect]
    return Array
}

export function getClassical(){
    const ArrayClassClassical = document.querySelectorAll("a.classical")
    const ArrayNonClassical = document.querySelectorAll("a:not(.classical)")
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