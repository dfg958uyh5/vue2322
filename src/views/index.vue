<template>
  <div>
    <el-container>
      <el-aside>
        <asides></asides>
      </el-aside>

      <el-container>
        <el-header>
          <headers></headers>
        </el-header>

        <el-main>
          <mains></mains>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>
import headers from "./headers/index"; //引入组件路径
import asides from "./asides/index"; //引入组件路径
import mains from "./mains/index"; //引入组件路径
export default {
  components: {
    headers,
    asides,
    mains
  },
  methods: {}
};
</script>


<style>
.el-header,
.el-footer {
  /* background-color: #b3c0d1; */
  color: #333;
  text-align: center;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 100%;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  padding: 0px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>