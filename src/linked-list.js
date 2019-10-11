const Node = require('./node');

class LinkedList {
    
    constructor() {
        // arr (pN, N, nN)
        // this.list=[];
        this.list=[];
        
    }
    

    append(data) {
        this.list.push(data);
        // console.log(this.list.join());
    }

    // get _head () {
    //     // console.log("_head: " + this.list.length + " data: " + this.list[0])
    //     console.log("h: " + this.list.join());
    //     return this.list[0];
    // }

    // get _tail () {
    //     console.log("_tail: " + this.list.length + " data: " + this.list[this.list.length-1])
    //     // console.log("t: " + this.list.join());
    //     return this.list[this.list.length-1];
    // }

    get length() {
        return this.list.length;
    }

    head() {
        if (this.list.length == 0) return null;
        else return this.list[0];
    }

    tail() {
        if (this.list.length == 0) return null;
        else return this.list[this.list.length-1];
    }

    at(index) {
        return this.list[index];
    }

    insertAt(index, data) {
        this.list.splice(index, 0, data);
        // this.list[index] = data;
    }

    isEmpty() {
        // console.log("!: " + this.list.length);
        if (this.list.length == 0) return true;
        else return false ;
    }

    clear() {
        console.log("1: " + this.list.join() + " l: " + this.list.length);
        this.list.length = 0;
        // this.list.splice(0, this.list.length);
        console.log("2: " + this.list.join() + " l: " + this.list.length);
    }

    deleteAt(index) {
        this.list.splice(index, 1);
    }

    reverse() {
        this.list.reverse();
    }

    indexOf(data) {
        return this.list.indexOf(data);
    }

}

module.exports = LinkedList;
