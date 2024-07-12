import {defineStore} from 'pinia'
import { reactive,ref } from 'vue'


export const userWebStore =defineStore('stores', ()=>{//wbe是命名空间
    const app_stores = reactive({
        route: 0,
    })


    return {
        app_stores,
    }
})