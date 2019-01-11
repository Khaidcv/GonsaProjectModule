<template>
  <section class="content-header">
    <h1>
      Chức năng chưa hoạt động, vui lòng quay lại sau.
      <small></small>
    </h1>
    <ol class="breadcrumb hidden">
      <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
      <li class="active">Dashboard</li>
    </ol>
  </section>
</template>
<script>
  export default {
    mounted() {
      this.$store.state.show_loading = false;
    }
  }
</script>
