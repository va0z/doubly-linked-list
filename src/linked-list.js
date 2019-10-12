const Node = require('./node');

class LinkedList {
    
    constructor() {
        this.list=[];   
    }
    

    append(data) {
        let node = new Node(data);
        this.list.push(node);
        return this;
    }

    get _head () {
        console.log("_head: " + this.list.length + " data: " + this.list[0].data);
        return this.list[0].data;
    }

    get _tail () {
        console.log("_tail: " + this.list.length + " data: " + this.list[this.list.length-1].data);
        return this.list[this.list.length-1].data;
    }

    get length() {
        return this.list.length;
    }

    head() {
        if (this.list.length == 0) return null;
        else return this.list[0].data;
    }

    tail() {
        if (this.list.length == 0) return null;
        else return this.list[this.list.length-1].data;
    }

    at(index) {
        return this.list[index].data;
    }

    insertAt(index, data) {
        this.list.splice(index, 0, new Node(data));
    }

    isEmpty() {
        if (this.list.length == 0) return true;
        else return false ;
    }

    clear() {
        this.list.length = 0;
        return this;
    }

    deleteAt(index) {
        this.list.splice(index, 1);
        return this;
    }

    reverse() {
        this.list.reverse();
        return this;
    }

    indexOf(data) {
        let num = this.list.length;
        for (let i = 0; i < num; i++) {
            if (this.list[i].data == data) { return i;}
        }
        return -1;
    }

}

module.exports = LinkedList;
