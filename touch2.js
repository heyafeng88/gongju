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
        this.point = cc.v2(0,0);
        this.area = this.play.parent;
    },

    touchStart(event){
        this.isTouched = true;
        this.point = this.area.convertToNodeSpaceAR(event.getLocation());
    },

    touchMove(event){
        // let delta = event.getDelta();
        // this.play.x +=delta.x;
        // this.play.y +=delta.y;

        this.point = this.area.convertToNodeSpaceAR(event.getLocation());  
    },

    touchEnd(event){
        this.isTouched = false;
    },

    update (dt) {
        if(this.isTouched){
            var e = this.point.sub(this.play.position);
            if(Math.abs(e.x)>1 || Math.abs(e.y)>1){
                this.play.x += dt*e.x*10;
                this.play.y += dt*e.y*10;
                console.log(e);
            }
        }
    },
});
