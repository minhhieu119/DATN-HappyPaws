export const ROUTES_CONSTANTS = {
    ADMIN: {
        path: "/admin",
        name: "admin",
        children: {
            LICH_DAT: {
                path: "/admin/lich-dat",
                name: "lich-dat"
            },
            CHUONG: {
                path: "/admin/chuong",
                name: "chuong"
            },
            DICH_VU: {
                path: "/admin/dich-vu",
                name: "dich-vu"
            },
            HOA_DON: {
                path: "/admin/hoa-don",
                name: "hoa-don"
            },
            KHUYEN_MAI: {
                path: "/admin/khuyen-mai",
                name: "khuyen-mai"
            },
            NHAN_VIEN: {
                path: "/admin/nhan-vien",
                name: "nhan-vien"
            },
            KHACH_HANG: {
                path: "/admin/khach-hang",
                name: "khach-hang"
            },
            THONG_KE: {
                path: "/admin/thong-ke",
                name: "thong-ke"
            },
            BAI_VIET: {
                path: "/admin/bai-viet",
                name: "bai-viet"
            },
        }
    },

    STAFF: {
        path: "/staff",
        name: "staff",
        children: {
            LICH_DAT: {
                path: "/staff/lich-dat",
                name: "staff-lich-dat"
            },
            CHUONG: {
                path: "/staff/chuong",
                name: "staff-chuong"
            },
            DICH_VU: {
                path: "/staff/dich-vu",
                name: "staff-dich-vu"
            },
            HOA_DON: {
                path: "/staff/hoa-don",
                name: "staff-hoa-don"
            },
            KHUYEN_MAI: {
                path: "/staff/khuyen-mai",
                name: "staff-khuyen-mai"
            },
            NHAN_VIEN: {
                path: "/staff/nhan-vien",
                name: "staff-nhan-vien"
            },
            KHACH_HANG: {
                path: "/staff/khach-hang",
                name: "staff-khach-hang"
            },
        }
    }
}