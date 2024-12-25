<template>
  <div class="header-view">
    <header-admin />
  </div>
  <div>
    <div class="row d-flex justify-content: flex-end;" style="width: 1915px">
      <div :class="collapse ? 'col-1 mt-3' : 'col-2 mt-3 pe-0'">
        <admin-sider-view @update:collapse="handleCollapseChange" />
      </div>
      <div :class="collapse ? 'col-11 mt-3 ps-3' : 'col-10 mt-3 ps-0 pe-0'">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderAdmin from "@/components/header/HeaderAdmin.vue";
import AdminSiderView from "@/views/admin/AdminSiderView.vue";
import { ref } from "vue";

const collapse = ref(false);

const handleCollapseChange = (newColl) => {
  collapse.value = newColl;
//   console.log(collapse.value);
};
</script>

<style scoped>

.header-view {
  background: #e9feed;
}
</style>