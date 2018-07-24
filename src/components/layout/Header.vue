<template>
  <div class="wrapper-header">
    <Menu mode="horizontal" active-name="1">
      <div class="wrapper-header-nav">
        <div class="layout-logo">
          LAPI
        </div>
        <div class="layout-nav">
          <MenuItem name="1">
          <Icon type="paperclip" size="16"></Icon>
          API
          </MenuItem>
          <MenuItem name="2">
          <Icon type="ios-keypad"></Icon>
          mack
          </MenuItem>
          <MenuItem name="3">
          <Icon type="document"></Icon>
          文档
          </MenuItem>
          <MenuItem name="4">
          <Icon type="person-stalker"></Icon>
          协作
          </MenuItem>
          <MenuItem name="5">
          <Poptip placement="bottom-end">
            <Badge count="3">
              <Icon class="header-bell" type="ios-bell"></Icon>
            </Badge>
            <div class="api" slot="content">
              <Card :bordered="false">
                <p slot="title">No border title</p>
                <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
              </Card>
            </div>
          </Poptip>
          </MenuItem>
          <MenuItem name="6">
          <Icon class="user-head" type="person"></Icon>
          </MenuItem>
        </div>
      </div>
    </Menu>
  </div>
</template>
<script>
export default {};
</script>

<style>
.layout-logo {
  height: 50px;
  margin-top: 8px;
  float: left;
}
.wrapper-header {
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  z-index: 1000;
}
.wrapper-header .ivu-menu-horizontal {
  height: 65px;
  line-height: 65px;
}
.wrapper-header .ivu-menu {
  z-index: 901;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
}
.layout-nav {
  width: 500px;
  margin: 0 auto;
  margin-right: 20px;
}
.wrapper-header-nav {
  width: 95%;
  height: 65px;
  margin: 0 auto;
}
.header-bell {
  font-size: 28px;
  vertical-align: middle;
}
.user-head {
  font-size: 28px;
  vertical-align: middle;
}
</style>

