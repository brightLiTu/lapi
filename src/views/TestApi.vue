<template>
  <div class="layout">
    <lHeader/>
    <div class="wrapper-container">
      <Row>
        <Col span="4">
        <lSider/>
        </Col>
        <Col span="20">
        <TestApiC/>
        </Col>
      </Row>
    </div>
  </div>
</template>
<script>
import lHeader from "@/components/layout/Header";
import lSider from "@/components/layout/Sider";
import TestApiC from "@/components/layout/TestApiC";

export default {
  components: {
    lHeader,
    lSider,
    TestApiC
  }
};
</script>
<style lang="less">
.layout {
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}

.wrapper-container {
  background: #fff;
  margin: 80px auto 15px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
}
</style>
