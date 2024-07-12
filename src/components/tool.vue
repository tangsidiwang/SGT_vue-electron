<script setup>
import { reactive } from 'vue'
import Head_gh from './head.vue'
  const appmain = reactive({//响应式
    tableData: [1,2,3,4],
  })


  const generateGrid=(rows,cols)=>{
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
const anniu=async ()=>{
    console.log(await tongs.sbsb1())
}
</script>

<template>
  <Head_gh/>
  <div class="biao">
    <table >
    <tr v-for="value in appmain.tableData">
      <td><p>功能{{ value }}</p></td>
      <td><button>设置</button><input type="text"></td>
      <td ><input type="checkbox" class="biao_checkbox"></td>
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
