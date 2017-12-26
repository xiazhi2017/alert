;
window.onclick = function() {
    function btnAlert(obj) {
        this.obj = obj;
        this.cont = this.obj.cont;
        this.btn = document.getElementById('btn');
        this.wrap = document.querySelector('.wrap');

        this.init();
    }
    btnAlert.prototype = {
        constructor: btnAlert,
        init: function() {
            this.maskLayer();
            this.spnBtn();
        },
        maskLayer: function() {
            var that = this;
            this.btn.onclick = function() {
                this.mask = document.createElement('div');
                this.mask.className = 'mask';
                that.wrap.appendChild(this.mask);
                that.addBox();
            }
        },
        addBox: function() {
            this.box = document.createElement('div');
            this.box.className = 'box';
            this.pp = document.createElement('p');
            this.spn = document.createElement('span');
            this.pp.innerHTML = this.cont;
            this.spn.innerHTML = '×';
            this.box.appendChild(this.spn);
            this.box.appendChild(this.pp);
            this.wrap.appendChild(this.box);
        },
        spnBtn: function() {
            var that = this;
            this.spn = document.querySelector('.box span');
            this.box = document.querySelector('.box');
            this.mask = document.querySelector('.mask');
            this.spn.onclick = function() {
                that.wrap.removeChild(that.box);
                that.wrap.removeChild(that.mask);
            }
        }
    }
    var slider = new btnAlert({
        cont: '欢迎来到英雄联盟！！！'
    });
}