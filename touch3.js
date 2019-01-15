cc.Class({
    extends: cc.Component,

    properties: {
        play:cc.Node,
        bg:cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.bg.on("touchstart",this.touchStart,this);
        this.bg.on("touchmove",this.touchMove,this);
        this.bg.on("touchend",this.touchEnd,this);
        this.bg.on("touchcancel",this.touchEnd,this);
    },

    start () {

    },

    touchStart(event){

    },

    touchMove(event){
        let delta = event.getDelta();
        this.play.x +=delta.x;
        this.play.y +=delta.y;
    },

    touchEnd(event){

    },

    // update (dt) {},
});
