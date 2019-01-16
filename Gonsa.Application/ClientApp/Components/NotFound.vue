<template>
  <section class="content-header">
    <h1>
      Không tìm thấy trang bạn yêu cầu
      <small></small>
    </h1>
  </section>
</template>
<script>
  export default {
    mounted() {
      this.$store.state.show_loading = false;
    }
  }
</script>
