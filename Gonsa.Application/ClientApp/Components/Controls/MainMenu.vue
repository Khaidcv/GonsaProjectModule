<template>
  <li v-bind:class="{treeview : get_child_by_parent.length>0}">
    <template v-if="get_child_by_parent.length>0">
      <a href="#">
        <i v-bind:class="currentMenu.menuIcon"></i>
        <span>
          {{currentMenu.menuDscpt}}
        </span>
        <span class="pull-right-container">
          <i class="fa fa-angle-left pull-right"></i>
        </span>
      </a>
      <ul class="treeview-menu tree">
        <MainMenu v-for="(m,index) in get_child_by_parent"
                  v-bind:key="index"
                  v-bind:parentID="m.menuID"></MainMenu>
      </ul>
    </template>
    <template v-else>
      <router-link v-bind:to="get_router_link(currentMenu.menuID)">
        <i v-bind:class="currentMenu.menuIcon"></i><span>{{currentMenu.menuDscpt}}</span>
      </router-link>
    </template>
  </li>
</template>
<script>
  import MainMenu from "./MainMenu.vue";
  export default {
    name: "MainMenu",
    props: ["parentID"],
    components: {
      MainMenu
    },
    data() {
      return {
        currentMenu: {
          menuDscpt: "",
          menuIcon: ""
        }
      };
    },
    methods: {
      get_router_link(menuID) {
        if (menuID == "81003") {
          return "/navigate/new-web-contract";
        } else if (menuID == '83') {
          return "/navigate/web-contract?status=101";
        }  else if (menuID == '82') {
          return "/in-process";
        } else {
          return "/in-process";
        }
      }
    },
    mounted() {
      var pId = this.parentID;
      if (this.parentID != "") {
        this.currentMenu = this.$store.state.Menus.find(function (item) {
          return item.menuID == pId;
        });
      }
      // console.log("currentMenu : ", this.currentMenu);
    },
    computed: {
      get_child_by_parent() {
        var pId = this.parentID;
        var parentList = this.$store.state.Menus.filter(item => {
          return item.parentID == pId;
        });
        return parentList;
      }
    }
  };
</script>
