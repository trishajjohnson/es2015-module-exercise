function choice(array) {
    const rand = Math.floor(Math.random() * array.length);

    return array[rand];
}

function remove(items, item) {
    for(let x=0; x < items.length; x++) {
        if(items[x] === item) {
            let removedItem = items.splice(x, 1);

            return removedItem;
        }
    }

    return undefined;
}

export { choice, remove };