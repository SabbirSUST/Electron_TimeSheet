'use strict'

class Helper{
    constructor(options){
        this.options = options
    }

    GetCurrentDateTime(){
        var d = new Date();

        var month = d.getMonth()+1;
        var day = d.getDate();
        var hour = d.getHours();
        var minute = d.getMinutes();
        var second = d.getSeconds();

        return d.getFullYear() + '-' +
        ((''+month).length<2 ? '0' : '') + month + '-' +
        ((''+day).length<2 ? '0' : '') + day + ' ' +
        ((''+hour).length<2 ? '0' :'') + hour + ':' +
        ((''+minute).length<2 ? '0' :'') + minute + ':' +
        ((''+second).length<2 ? '0' :'') + second;
    }
}

module.exports = Helper


