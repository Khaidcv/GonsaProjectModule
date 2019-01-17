// mixin dungf chung cho list va form.
export default {
  data() {
    return {
      show : false
    }
  },
  async mounted() {
    try {
      let response = await this.$http.get('/api/ApiAccount/ApiGetMenu');
      if (response.data) {
       // Check xem co menu khong.
        var check = response.data.find((item) => { return item.menuID == "81003" });
        if (check) {
          this.show = true; // de show form, gia tri duoc gan trong form.
        } else {
          this.$router.push("/");
        }
      }
    } catch (e) {
      this.$router.push("/");
    }
  },
  filters: {
    filterStatus(status) {
      if (status == -1) {
        return `<span class='label label-default'>Đã lưu</span>`;
      } else if (status == 101) {
        return `<span class='label label-primary'>Đã post</span>`;
      } else if (status == 201) {
        return `<span class='label label-info'>Team Lead đã duyệt</span>`;
      } else if (status == 0) {
        return `<span class='label label-warning'>Trả về chờ chỉnh sửa</span>`;
      } else if (status == 301) {
        return `<span class='label label-default'>Đã lập phiếu bán</span>`;
      } else if (status == 401) {
        return `<span class='label label-default'>Hàng đang giao</span>`;
      } else if (status == 501) {
        return `<span class='label label-success'>Hoàn tất</span>`;
      } else {
        return "";
      }
    }
  }
}
