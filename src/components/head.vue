<script setup>
import {reactive} from "vue"//引入reactive响应式数据
import { routerStore } from "../stores/stores";//引入全局数据


const router=routerStore()
const Tool=()=>{
    router.app_stores.route=0
}
const Sett=()=>{
    router.app_stores.route=1
}
const About=()=>{
    router.app_stores.route=2
}
</script>

<template>
    <div class="head">
        <img  class="img_top"src="/src/assets/border.png" alt="top">
        <p class="title" :class="{active:router.app_stores.route==0 }"><router-link class="link" to="/" @click="Tool">Tool</router-link></p>
        <p class="title" :class="{active:router.app_stores.route==1 }"><router-link class="link" to="/sett" @click="Sett">Sett</router-link></p>
        <p class="title" :class="{active:router.app_stores.route==2 }"><router-link class="link" to="/About"  @click="About">About</router-link></p>
    </div>
</template>

<style scoped>
 .head{
  height: 50px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
}

.title {
  float: right;
  padding:0px;
  margin: 0;

}

.head .title .link {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

p a:hover {
  background-color: #111;
}
.active {
  background-color: #4CAF50;
}
.img_top{
  float: left;
  padding:0px;
  margin: 0;
  height: 100%;
}
</style>
