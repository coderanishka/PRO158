AFRAME.registerComponent('cursorlistener',{
    schema : {selectedItemId : {default: '', type: 'string'}},
    init: function(){
        this.handleMouseEnterEvents()
        this.handleMouseLeaveEvents() 
    },
    handleComicListState: function(){
        const id = this.el.getAttribute('id')
        const comics = ['cab2', 'cab1', 'tinkle2', 'tinkle1']
        if(comics.includes(id)){
            const comicsContainer = document.querySelector('#comics-container')
            comicsContainer.setAttribute('cursorlistener', {selectedItemId: id})
            this.el.setAttribute('material', {color: 'white', opacity: 1})
        }
    },

    handleMouseEnterEvents: function(){
        this.el.addEventListener('mouseenter', () => {
            this.handleComicListState()
        })
    },
    handleMouseLeaveEvents: function(){
        this.el.addEventListener('mouseleave', () => {
            const {selectedItemId} = this.data
            if(selectedItemId){
                const el2 = document.querySelector('#main-container')
                const el = document.querySelector(`#${selectedItemId}`)
                const id = el.getAttribute('id')
                if(id == selectedItemId){
                    el.setAttribute('material', {color: '#0077cc', opacity: 1})
                }
            }
        })
    }
})
 