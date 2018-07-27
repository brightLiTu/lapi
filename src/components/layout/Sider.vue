<template>
  <Menu active-name="0-2" width="auto" :open-names="[0]">

    <Submenu class="sider-subitem" v-for="(item, index) in tree[0]" :key="index" :name="index">
      <template slot="title">
        <Icon type="android-folder-open"></Icon>
        <span class="m-length">{{item.title}}</span>
        <Dropdown class="sider-subitem-more" transfer>
          <Icon type="more" size="22"></Icon>
          <DropdownMenu slot="list">
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem disabled>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem divided>北京烤鸭</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </template>
      <MenuItem class="sider-item" v-for="(itemM, indexM) in tree[item.id]" :key="indexM" :name="index+'-'+indexM">
      <span class="label-method" :class="'method-'+itemM.method">{{itemM.method|methodCut}}</span>
      <span class="m-length">{{itemM.title}}</span>
      <Dropdown class="sider-item-more" trigger="hover" transfer>
        <Icon type="more" size="22"></Icon>
        <DropdownMenu slot="list">
          <DropdownItem>驴打滚</DropdownItem>
          <DropdownItem>炸酱面</DropdownItem>
          <DropdownItem disabled>豆汁儿</DropdownItem>
          <DropdownItem>冰糖葫芦</DropdownItem>
          <DropdownItem divided>北京烤鸭</DropdownItem>
        </DropdownMenu>
      </Dropdown>

      </MenuItem>
    </Submenu>

  </Menu>
</template>
<script>
export default {
  data() {
    return {
      tree: {
        0: [
          { title: 'item 1', id: 1, pid: 0 },
          { title: 'item 1', id: 2, pid: 0 },
          { title: 'item 1', id: 3, pid: 0 },
        ],
        1: [
          { title: 'Option 1sdafasasdfasfd', id: 11, pid: 1, method: 'POST' },
          { title: 'Option 2', id: 21, pid: 1, method: 'PATCH' },
          { title: 'Option 3', id: 31, pid: 1, method: 'PUT' },
          { title: 'Option 4', id: 31, pid: 1, method: 'DELETE' },
          { title: 'Option 5', id: 31, pid: 1, method: 'GET' },
          { title: 'Option 5', id: 31, pid: 1, method: 'OPTIONS' },
        ],
        2: [
          { title: 'Option 1', id: 111, pid: 2, method: 'POST' },
          { title: 'Option 2', id: 211, pid: 2, method: 'POST' },
        ],
        3: [
          { title: 'Option 1', id: 1111, pid: 3, method: 'POST' },
          { title: 'Option 2', id: 2111, pid: 3, method: 'POST' },
        ],
      }
    }
  },
  filters: {
    methodCut: function (value) {
      if (!value) return ''
      return value.length > 4 ? value.slice(0, 3) : value
    }
  }
};
</script>
<style lang="less">
.label-method {
  font-weight: bold;
  display: inline-block;
  vertical-align: middle;
  width: 44px;
  color: #913d88;
}
.method-POST {
  color: #f4b350;
}
.method-GET {
  color: #3fc380;
}
.method-DELETE {
  color: #f03434;
}
.method-PUT {
  color: #446cb3;
}
.method-PATCH {
  color: #81cfe0;
}
.m-length {
  display: inline-block;
  max-width: 110px;
  min-width: 50px;
  line-height: 21px;
  height: 21px;
  overflow: hidden;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.sider-subitem-more,
.sider-item-more {
  position: absolute;
  right: 8px;
  top: 14px;
  display: none;
}
.sider-subitem .ivu-menu-submenu-title:hover .sider-subitem-more,
.sider-item:hover .sider-item-more {
  display: block;
}
</style>

