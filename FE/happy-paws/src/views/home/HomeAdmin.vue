<template>
  <div class="header-view">
    <header-admin />
  </div>
  <div class="container">
    <div class="row">
      <div :class="collapse ? 'col-1' : 'col-3'">
        <admin-sider-view @update:collapse="handleCollapseChange" />
      </div>
      <div :class="collapse ? 'col-10 m-3' : 'col-8 mt-3 ps-0 pe-3'">
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