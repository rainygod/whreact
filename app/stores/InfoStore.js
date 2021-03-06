import { observable, action } from 'mobx'
import fetch from 'isomorphic-fetch'

export default class InfoStore {
    @observable data = []

    constructor(){
        this.getInfo = this.getInfo.bind(this)
    }

    @action
    getInfo(){
        fetch('http://ficloud.top:9999')
            .then(response => response.ok ? response.json() : {})
            .then(data => { 
                console.log(data)
                this.data.replace(data)
            })
    }
}