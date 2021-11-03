AFRAME.registerComponent("comics", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "tinkle1",
        title: "Tinkle",
        url: "./assets/thumbnails/tinkle.jpg",
      },
      {
        id: "tinkle2",
        title: "Tinkle: \n Special Edition",
        url: "./assets/thumbnails/tinkle2.jpg",
      },
      {
        id: "cab1",
        title: "Weirdos From \n Another Planet",
        url: "./assets/thumbnails/CalvinAndHobbes.jpg",
      },
      {
        id: "cab2",
        title: "The Revenge \n Of \n Baby Sat",
        url: "./assets/thumbnails/CalvinAndHobbes2.jpg",
      },
    ];
    let preXpos = -85;

    for (var item of thumbNailsRef) {
      const posX = preXpos + 35;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      preXpos = posX;
      const border = this.createBorder(position, item.id)
      const thumbnail = this.createThumbnail(item)
      border.appendChild(thumbnail)
      const title = this.createTitle(position, item)
      border.appendChild(title)
      this.placesContainer.appendChild(border);
    }
  },
  createBorder: function(position, id){
    const entity = document.createElement('a-entity')
    entity.setAttribute('id', id)
    entity.setAttribute('visible', true)
    entity.setAttribute('geometry', {primitive: 'ring', radiusInner: 14, radiusOuter: 15})
    entity.setAttribute('position', position)
    entity.setAttribute('material', {color: 'purple', opacity:1})
    entity.setAttribute('cursorlistener', {})
    return entity
  },
  createThumbnail: function(item){
    const entity = document.createElement('a-entity')
    entity.setAttribute('visible', true)
    entity.setAttribute('geometry', {primitive: 'circle', radius: 14})
    entity.setAttribute('material', {src: item.url})
    return entity
  },
  createTitle: function(position, item){
    const entity = document.createElement('a-entity')
    entity.setAttribute('text', {value: item.title, font:'exo2bold', align: 'center', width: 100, color: 'black'})
    const elPos = position
    elPos.y = -30
    entity.setAttribute('position', elPos)
    entity.setAttribute('visible', true)
    return entity
  }
});
 
