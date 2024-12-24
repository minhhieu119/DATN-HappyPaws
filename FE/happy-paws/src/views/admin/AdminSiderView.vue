<template>
  <aside :class="{ sidebar: true, collapsed: collapse }">
    <header class="siderbar-header">
      <button class="toggler" @click="toggleBtn">
        <span class="material-symbols-rounded">
          {{ collapse ? "menu" : "chevron_left" }}
        </span>
      </button>
    </header>

    <nav class="sidebar-nav">
      <ul class="nav-list primary-nav">
        <li class="nav-item" v-for="item in listMenuItems" :key="item.id">
          <router-link
            :to="item.path"
            class="nav-link"
            active-class="active-link"
          >
            <span class="nav-icon material-symbols-rounded">
              {{ item.icon }}</span
            >
            <span class="nav-label"> {{ item.label }} </span>
          </router-link>
          <span class="nav-tooltip">{{ item.label }}</span>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import { ROUTES_CONSTANTS } from "@/constants/path";
import { ref } from "vue";

const listMenuItems = [
  {
    id: 1,
    label: "Quản lý lịch đặt",
    icon: "event",
    path: ROUTES_CONSTANTS.ADMIN.children.LICH_DAT.path,
  },
  {
    id: 2,
    label: "Quản lý chuồng",
    icon: "check_box_outline_blank",
    path: ROUTES_CONSTANTS.ADMIN.children.CHUONG.path,
  },
  {
    id: 3,
    label: "Quản lý dịch vụ",
    icon: "linked_services",
    path: ROUTES_CONSTANTS.ADMIN.children.DICH_VU.path,
  },
  {
    id: 4,
    label: "Quản lý hóa đơn",
    icon: "receipt_long",
    path: ROUTES_CONSTANTS.ADMIN.children.HOA_DON.path,
  },
  {
    id: 5,
    label: "Quản lý voucher",
    icon: "card_membership",
    path: ROUTES_CONSTANTS.ADMIN.children.KHUYEN_MAI.path,
  },
  {
    id: 6,
    label: "Quản lý nhân viên",
    icon: "person",
    path: ROUTES_CONSTANTS.ADMIN.children.NHAN_VIEN.path,
  },
  {
    id: 7,
    label: "Quản lý khách hàng",
    icon: "group",
    path: ROUTES_CONSTANTS.ADMIN.children.KHACH_HANG.path,
  },
  {
    id: 8,
    label: "Thống kê",
    icon: "bar_chart",
    path: ROUTES_CONSTANTS.ADMIN.children.THONG_KE.path,
  },
  {
    id: 9,
    label: "Quản lý bài viết",
    icon: "description",
    path: ROUTES_CONSTANTS.ADMIN.children.BAI_VIET.path,
  },
];

const collapse = ref(false);

const emit = defineEmits(["update:collapse"]);

const toggleBtn = () => {
  if (!collapse.value) {
    collapse.value = true;
    emit("update:collapse", collapse.value);
  } else {
    collapse.value = false;
    emit("update:collapse", collapse.value);
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.sidebar {
  width: 290px;
  margin-top: 16px;
  border-radius: 15px;
  position: fixed;
  background: #e9feed;
  height: calc(100vh - 32px);
  transition: 0.4s ease;
}

.sidebar.collapsed {
  width: 85px;
}

.siderbar-header {
  display: flex;
  padding: 25px 20px;
  align-items: center;
  justify-content: end;
}

.siderbar-header .toggler {
  height: 35px;
  width: 35px;
  border: none;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 8px;
  background: #264653;
  transition: 0.1s ease;
}

.siderbar-header .toggler:hover {
  background: #565656;
}

.siderbar-header .toggler span {
  font-size: 1.75rem;
}

.sidebar-nav .nav-list {
  list-style: none;
  display: flex;
  gap: 4px;
  padding: 0 15px;
  flex-direction: column;
}

.sidebar-nav .nav-link {
  color: black;
  display: flex;
  gap: 12px;
  border-radius: 8px;
  align-items: center;
  padding: 12px 15px;
  text-decoration: none;
  transition: 0.1s ease;
  white-space: nowrap;
}

.sidebar .nav-link.active-link {
  background: #264653;
  color: #fff;
}

.sidebar-nav .nav-link:hover {
  background: #264653;
  color: #fff;
}

.sidebar-nav .nav-link .nav-label {
  transition: 0.4s ease;
}

.sidebar.collapsed .sidebar-nav .nav-link .nav-label {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.sidebar-nav .nav-item {
  position: relative;
}

.sidebar-nav .nav-tooltip {
  position: absolute;
  top: -10px;
  opacity: 0;
  display: none;
  pointer-events: none;
  left: calc(100% + 25px);
  background: #264653;
  color: #fff;
  padding: 6px 12px;
  border-radius: 8px;
  white-space: nowrap;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  transition: 0s;
}

.sidebar.collapsed .sidebar-nav .nav-tooltip {
  display: block;
}

.sidebar-nav .nav-item:hover .nav-tooltip {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(50%);
  transition: 0.4s ease;
}
</style>