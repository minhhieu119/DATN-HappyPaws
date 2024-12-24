<template>
  <div class="header-view">
    <header-admin />
  </div>
  <div class="container">
    <div class="row">
      <div :class="collapse ? 'col-1' : 'col-3'">
        <staff-sider-view @update:collapse="handleCollapseChange" />
      </div>
      <div :class="collapse ? 'col-9 m-5' : 'col-8 mt-5 ms-3'">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderAdmin from "@/components/header/HeaderAdmin.vue";
import StaffSiderView from "@/views/staff/StaffSiderView.vue";
import { ref } from "vue";

const collapse = ref(false);

const handleCollapseChange = (newColl) => {
  collapse.value = newColl;
  // console.log(collapse.value);
};
</script>

<style scoped>
.header-view {
  background: #e9feed;
}


</style>