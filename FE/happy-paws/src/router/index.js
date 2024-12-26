import { createRouter, createWebHistory } from "vue-router";
import { ROUTES_CONSTANTS } from "@/constants/path";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/home/HomeClient.vue"),
    },
    {
      path: ROUTES_CONSTANTS.ADMIN.path,
      name: ROUTES_CONSTANTS.ADMIN.name,
      component: () => import("@/views/home/HomeAdmin.vue"),
      redirect: ROUTES_CONSTANTS.ADMIN.children.DAT_LICH.path,
      children: [
        {
          path: ROUTES_CONSTANTS.ADMIN.children.LICH_DAT.path,
          name: ROUTES_CONSTANTS.ADMIN.children.LICH_DAT.name,
          children: [
            {
              path: ROUTES_CONSTANTS.ADMIN.children.DAT_LICH.path,
              name: ROUTES_CONSTANTS.ADMIN.children.DAT_LICH.name,
              component: () => import("@/views/admin/lich-dat/LichDatView.vue"),
            },
            {
              path: ROUTES_CONSTANTS.ADMIN.children.XAC_NHAN_LICH.path,
              name: ROUTES_CONSTANTS.ADMIN.children.XAC_NHAN_LICH.name,
              component: () => import("@/views/admin/lich-dat/XacNhanLich.vue"),
            }
          ]
        },
        {
          path: ROUTES_CONSTANTS.ADMIN.children.CHUONG.path,
          name: ROUTES_CONSTANTS.ADMIN.children.CHUONG.name,
          component: () => import("@/views/admin/chuong/ChuongView.vue"),
        },
        {
          path: ROUTES_CONSTANTS.ADMIN.children.DICH_VU.path,
          name: ROUTES_CONSTANTS.ADMIN.children.DICH_VU.name,
          component: () => import("@/views/admin/dich-vu/DichVuView.vue"),
        },
        {
          path: ROUTES_CONSTANTS.ADMIN.children.HOA_DON.path,
          name: ROUTES_CONSTANTS.ADMIN.children.HOA_DON.name,
          component: () => import("@/views/admin/hoa-don/HoaDonView.vue"),
        },
        {
          path: ROUTES_CONSTANTS.ADMIN.children.KHUYEN_MAI.path,
          name: ROUTES_CONSTANTS.ADMIN.children.KHUYEN_MAI.name,
          component: () => import("@/views/admin/voucher/VoucherView.vue"),
        },
        {
          path: ROUTES_CONSTANTS.ADMIN.children.NHAN_VIEN.path,
          name: ROUTES_CONSTANTS.ADMIN.children.NHAN_VIEN.name,
          component: () => import("@/views/admin/nhan-vien/NhanVienView.vue"),
        },
        {
          path: ROUTES_CONSTANTS.ADMIN.children.KHACH_HANG.path,
          name: ROUTES_CONSTANTS.ADMIN.children.KHACH_HANG.name,
          component: () => import("@/views/admin/khach-hang/KhachHangView.vue"),
        },
        {
          path: ROUTES_CONSTANTS.ADMIN.children.THONG_KE.path,
          name: ROUTES_CONSTANTS.ADMIN.children.THONG_KE.name,
          component: () => import("@/views/admin/thong-ke/ThongKeView.vue"),
        },
        {
          path: ROUTES_CONSTANTS.ADMIN.children.BAI_VIET.path,
          name: ROUTES_CONSTANTS.ADMIN.children.BAI_VIET.name,
          component: () => import("@/views/admin/bai-viet/BaiVietView.vue"),
        }
      ],
    },
    {
      path: ROUTES_CONSTANTS.STAFF.path,
      name: ROUTES_CONSTANTS.STAFF.name,
      component: () => import("@/views/home/HomeStaff.vue"),
      redirect: ROUTES_CONSTANTS.STAFF.children.LICH_DAT.path,
      children: [
        {
          path: ROUTES_CONSTANTS.STAFF.children.LICH_DAT.path,
          name: ROUTES_CONSTANTS.STAFF.children.LICH_DAT.name,
          component: () => import("@/views/staff/lich-dat/StaffLichDatView.vue"),
        },
        {
          path: ROUTES_CONSTANTS.STAFF.children.CHUONG.path,
          name: ROUTES_CONSTANTS.STAFF.children.CHUONG.name,
          component: () => import("@/views/staff/chuong/StaffChuongView.vue"),
        },
        {
          path: ROUTES_CONSTANTS.STAFF.children.DICH_VU.path,
          name: ROUTES_CONSTANTS.STAFF.children.DICH_VU.name,
          component: () => import("@/views/staff/dich-vu/StaffDichVuView.vue"),
        },
        {
          path: ROUTES_CONSTANTS.STAFF.children.HOA_DON.path,
          name: ROUTES_CONSTANTS.STAFF.children.HOA_DON.name,
          component: () => import("@/views/staff/hoa-don/StaffHoaDonView.vue"),
        },
        {
          path: ROUTES_CONSTANTS.STAFF.children.KHUYEN_MAI.path,
          name: ROUTES_CONSTANTS.STAFF.children.KHUYEN_MAI.name,
          component: () => import("@/views/staff/voucher/StaffVoucherView.vue"),
        },
        {
          path: ROUTES_CONSTANTS.STAFF.children.NHAN_VIEN.path,
          name: ROUTES_CONSTANTS.STAFF.children.NHAN_VIEN.name,
          component: () => import("@/views/staff/nhan-vien/StaffNhanVienView.vue"),
        },
        {
          path: ROUTES_CONSTANTS.STAFF.children.KHACH_HANG.path,
          name: ROUTES_CONSTANTS.STAFF.children.KHACH_HANG.name,
          component: () => import("@/views/staff/khach-hang/StaffKhachHangView.vue"),
        }
      ],
    },
  ],
});

export default router;
