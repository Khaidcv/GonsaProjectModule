<template>
  <div>
    <select class="form-control" ref="select" style="width:100%;">
      <option value="">{{placeholder}}</option>
      <option v-if="get_selected_data" v-bind:value="value">
        <strong>{{get_selected_data().text}}</strong>
      </option>
    </select>
  </div>
</template>
<script>
  export default {
    props: ["value", "templateResult", "templateSelection", "options", "skey", "placeholder", "matcher", "ajax","get_selected_data"],
    mounted() {
      var vm = this;
      var el = $(this.$refs.select);
      // phần trên này không cần, do khi dùng v-if nó sẽ không render ra nên giwof phải làm trong đây.
      var opt = {
        allowClear: true,
        placeholder: vm.placeholder,
        data: $.map(vm.options, function (obj) {
          obj.id = obj[vm.skey];
          return obj;
        })
      };
      if (this.ajax) {
        opt.delay = 15000;
        opt.ajax = this.ajax;
      }
      if (this.templateSelection) {
        opt.templateSelection = this.templateSelection;
      }
      if (this.templateResult) {
        opt.templateResult = this.templateResult
      }
      if (this.matcher) {
        opt.matcher = this.matcher;
      }
      el.select2(opt);
      el.val(this.value).trigger('change');

      if (this.ajax) {
        
      }

      // phần trên này không cần, do khi dùng v-if nó sẽ không render ra nên phải render lại. khi v-if render sẽ gọi hàm mounted.
      el.on('select2:select', function () {
        vm.$emit("change", this.value);
      });
      el.on('select2:unselect', function () { //set null
        vm.$emit("change", null)
      });
      el.on('select2:unselecting', function () { //close lai khi clear
        $(this).data('unselecting', true);
      });
      el.on('select2:opening', function (e) { //close lai khi clear
        if ($(this).data('unselecting')) {
          $(this).removeData('unselecting');
          e.preventDefault();
        }
      });
    },
    watch: {
      options() {
        if (this.ajax) return;
        var vm = this;
        var el = $(this.$refs.select);
        var opt = {
          allowClear: true,
          placeholder: vm.placeholder,
          data: $.map(vm.options, function (obj) {
            obj.id = obj[vm.skey];
            return obj;
          })
        };
        if (this.templateSelection) {
          opt.templateSelection = this.templateSelection;
        }
        if (this.templateResult) {
          opt.templateResult = this.templateResult
        }
        if (this.matcher) {
          opt.matcher = this.matcher;
        }
        el.select2(opt);
      },
      value() {
        $(this.$refs.select).val(this.value).trigger('change');
      }
    },
    beforeDestroy: function () {
      if (this.$refs.select) {
        try {
          $(this.$refs.select).off().select2('destroy');
        } catch (e) {
        }
      }
    }
  }
</script>
<style>
  .select2-selection__clear {
    font-size: 22px;
  }
    .select2-selection__clear:hover {
      color: #8d1111;
    }
</style>
