<script setup>
import { reactive,onMounted} from 'vue'
import Head_gh from './head.vue'
  const appmain = reactive({//响应式，在下面定义的变量
    tableData: [
      {name: '功能1', value: '1', checked: false},
      {name: '功能2', value: '2', checked: false},
      {name: '功能3', value: '3', checked: false},
      {name: '功能4', value: '4', checked: false},//功能行数，可以根据需要增加
    ],
    //其他变量
  })


const generateGrid=(rows,cols)=>{//这是当时生成二维数组的函数，可以根据需要修改
      const grid = [];
      for (let row = 0; row < rows; row++) {
        const rowData = [];
        for (let col = 0; col < cols; col++) {
          // 在这里可以根据需要设置初始值
          rowData.push({});
        }
        grid.push(rowData);
      }
      return grid;
    }
//初始函数，可以进行初始化操作，如使用生成数组的函数为tableData赋值来调节表格大小
onMounted(() => {
    console.log("mounted")
  })
const anniu=async ()=>{
    console.log(await tongs.sbsb1())
}
const checkbox=(index)=>{//复选框点击事件,index为第index个复选框
  
  if(appmain.tableData[index].checked){//判断第index个复选框是否选中
    console.log(index+"选中")
  }
  else{
    console.log(index+"未选中")
  }
  
}

</script>

<template>
  <Head_gh/>
  <div class="biao">
  <table >
    <tr v-for="(item,index) in appmain.tableData" :key="index">
      <td><p>功能{{ index }}</p></td>
      <td><button>设置</button><input type="text"></td>
      <td ><input type="checkbox" class="biao_checkbox" v-model="item.checked" @change="checkbox(index)" ></td>
    </tr>
  </table>  
  </div>
  
</template>

<style scoped>


table {
  margin: auto;
  border-collapse: collapse;
  width: 100%;
}
th, td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
tr:hover {background-color:#f5f5f5;}

.biao{
  margin: auto;
  width: 80%;
  padding: 10px;
  border-radius: 25px;
  margin-top: 20px;
}
.biao_checkbox{
  float: right;
}
</style>
