/// <reference path="./global.d.ts" />
// @ts-check

export function cookingStatus(timer = undefined) {
    if (timer === undefined) return 'You forgot to set the timer.';
    else if (timer === 0) return 'Lasagna is done.';
    return 'Not done, please wait.';
};

export function preparationTime(layers = Array.from(''), t_per_l = 2){
    return layers.length*t_per_l;
};


export function quantities(layers =  Array.from('')){
    let quant = { noodles: 0, sauce: 0 };
    for (let layer of layers){
        if (layer === 'sauce') quant.sauce += 0.2;
        if (layer === 'noodles') quant.noodles +=50;
    }
    return quant;
};

export function addSecretIngredient(friendList = Array.from(''), myList = Array.from('')){
    const secret = friendList[friendList.length-1] === undefined ? '' : friendList[friendList.length-1]
    myList.push(secret);
};

export function scaleRecipe(recipe = new Object(),portions = 2){

    let copy = {...recipe};

    for(let key of Object.keys(copy)) {
        copy[key] = copy[key] * portions/2;
    }

    return copy;
};