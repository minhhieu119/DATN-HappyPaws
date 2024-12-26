<template>
    <search-lich class="main-background"/>
    <div class="d-flex justify-content-between">
        <div class="main-background" style="flex: 1">
            <danh-sach-chuong/>
        </div>
        <div class="main-background" style="flex: 1; margin-left: 16px">
            <form-dat-lich/>
        </div>
    </div>
    <danh-sach-hien-tai class="main-background mt-3"/>
</template>

<script setup>
    import DanhSachChuong from "./DanhSachChuong.vue";
    import DanhSachHienTai from "./DanhSachHienTai.vue";
    import FormDatLich from "./FormDatLich.vue";
    import SearchLich from "./SearchLich.vue"
</script>

<style scoped>
    .main-background {
        border: 2px solid #e9feed;
        border-radius: 12px;
    }
</style>