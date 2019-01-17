<template>
</template>
<script>
  export default {
    mounted() {
     try{
       var url = this.$route.params.url;
       if (this.$route.query) {
         url += "?" + $.param(this.$route.query);
       }
       this.$router.push("/" + url);
    }catch(e){
       this.$router.push("/");
  }
    }
  }
</script>
