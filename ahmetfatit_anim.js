class fatih_deneme extends Animator  {
    constructor() {
        super();
        this.author = 'fatih'
        this.desc = 'Smooth color change'
        let b = ["purple", "blue"]
        this.anim = { background: b }
        this.elt = document.createElement('div')
        this.elt.style = "width: 100%; height: 100%;"
        this.time = 6000
    }
    update() { }  //no code is needed here
}