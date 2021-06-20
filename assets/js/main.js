const dropItems = document.getElementById('drop-items')

new Sortable(dropItems, {
    animation: 350,
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    store: {
        set: (sortable) =>{
            const order = sortable.toArray()
            localStorage.setItem(sortable.options.group.name, order.join('|'))
        },

        get: (sortable) =>{
            const order = localStorage.getItem(sortable.options.group.name)
            return order ? order.split('|') : []
        }
    }
});