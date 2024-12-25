<template>
  <div class="header-view">
    <header-admin />
  </div>
  <div>
    <div class="row d-flex justify-content: flex-end;">
      <div :class="collapse ? 'col-1 mt-3' : 'col-3 mt-3 pe-3'">
        <admin-sider-view @update:collapse="handleCollapseChange" />
      </div>
      <div :class="collapse ? 'col-11 mt-3 ps-3' : 'col-9 mt-3 ps-0 pe-3'">
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