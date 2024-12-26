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
            v-if="!item.children"
            :to="item.path"
            class="nav-link"
            active-class="active-link"
          >
            <span class="nav-icon material-symbols-rounded">
              {{ item.icon }}</span
            >
            <span class="nav-label"> {{ item.label }} </span>
          </router-link>
          <!-- Nếu có children, hiển thị menu con -->
          <div v-else>
            <div class="nav-link">
              <span class="nav-icon material-symbols-rounded">{{
                item.icon
              }}</span>
              <span class="nav-label">{{ item.label }}</span>
              <span class="material-symbols-rounded down-item">
                keyboard_arrow_down
              </span>
            </div>
            <ul class="sub-menu">
              <li
                v-for="child in item.children"
                :key="child.id"
                class="sub-nav-item"
              >
                <router-link
                  :to="child.path"
                  class="nav-link"
                  active-class="active-link"
                >
                  <span class="nav-icon material-symbols-rounded">{{
                    child.icon
                  }}</span>
                  <span class="nav-label">{{ child.label }}</span>
                </router-link>
                <span class="nav-tooltip-1">{{ child.label }}</span>
              </li>
            </ul>
          </div>
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
    isOpen: false,
    path: ROUTES_CONSTANTS.ADMIN.children.LICH_DAT.path,
    children: [
      {
        id: 1,
        label: "Đặt lịch tại quầy",
        icon: "add_circle",
        path: ROUTES_CONSTANTS.ADMIN.children.DAT_LICH.path,
      },
      {
        id: 2,
        label: "Xác nhận lịch",
        icon: "visibility",
        path: ROUTES_CONSTANTS.ADMIN.children.XAC_NHAN_LICH.path,
      },
    ],
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

/* Set toàn bộ màn */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Set sidebar chung */
.sidebar {
  width: 330px;
  border-radius: 0 15px 15px 0;
  background: #e9feed;
  height: calc(100vh - 32px);
  transition: 0.4s ease;
}

/* Sidebar khi thu nhỏ */
.sidebar.collapsed {
  width: 85px;
}

.siderbar-header {
  display: flex;
  padding: 25px 20px;
  align-items: center;
  justify-content: end;
}

/* Nút đóng mở sidebar */
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

/* Danh sách list item */
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
  font-weight: bold;
}

/* Khi chọn vào link thì sẽ selected */
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

/* Label, item khi đóng collapse */
.sidebar.collapsed .sidebar-nav .nav-link .nav-label {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.sidebar-nav .nav-item {
  position: relative;
}

/* Tooltip cha */
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

/* Hiện tooltip */
.sidebar.collapsed .sidebar-nav .nav-tooltip {
  display: block;
}


.sidebar-nav .nav-item:hover .nav-tooltip {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(50%);
  transition: 0.4s ease;
  z-index: 9999;
}

/* Menu con */
.sub-menu {
  display: none;
}

/* Menu con khi hover */
.nav-item:hover .sub-menu {
  display: block;
}

 /* Khi sidebar không collapsed */
.sidebar:not(.collapsed) .sub-nav-item {
  position: relative;
  list-style: none;
  margin-top: 4px;
  width: 250px;
  float: right;
}

/* Khi sidebar ở trạng thái collapsed */
.sidebar.collapsed .sub-nav-item {
  position: relative;
  list-style: none;
  margin-top: 4px
}

/* Hover vào menu con hiện ra tooltip */
.sub-nav-item:hover .nav-tooltip-1 {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(50%);
  transition: 0.4s ease;
  z-index: 9999;
}

/* Chỉnh tooltip menu con */
.sub-nav-item .nav-tooltip-1 {
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

/* Hiển thị tooltip menu con */
.sidebar.collapsed .sidebar-nav .nav-tooltip-1 {
  display: block;
}

/* Nút menu xổ xuống ẩn khi collapse */
.sidebar.collapsed .down-item {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

</style>