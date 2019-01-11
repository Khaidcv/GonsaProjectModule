<template>
  <section class="sidebar">
    <ul class="sidebar-menu" data-widget="tree" data-animation-speed="0">
      <li class="header">MAIN NAVIGATION</li>
      <li class="treeview">
        <router-link to="/" class="">
          <i class="fa fa-dashboard"></i> Bảng điều kiển
        </router-link>
      </li>
      <MainMenu v-for="m in parent_menus" v-bind:key="m.menuID" v-bind:parentID="m.menuID"></MainMenu>
    </ul>
  </section>
</template>
<script>
  import MainMenu from "./Controls/MainMenu";
  export default {
    components: {
      MainMenu
    },
    async created() {
      let response = await this.$http.get('/api/ApiAccount/ApiGetMenu');
      this.$store.state.Menus = response.data;
    },
    computed: {
      parent_menus() {
        return this.$store.state.Menus.filter(function (item) {
          return item.parentID == "";
        });
      }
    }
  };
</script>
