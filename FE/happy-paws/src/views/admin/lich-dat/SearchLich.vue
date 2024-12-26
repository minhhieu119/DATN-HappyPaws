<template>
    <div class="p-3 mb-3">
        <h3 class="mb-5">Tìm kiếm chuồng</h3>
        <form>
            <div class="row mb-4">
                <label for="startDate" class="col-sm-2 col-form-label">Ngày bắt đầu:</label>
                <div class="col-sm-10">
                    <input type="date" class="form-control" id="startDate" name="startDate" required>
                </div>
            </div>

            <div class="row mb-3">
                <label for="endDate" class="col-sm-2 col-form-label">Ngày kết thúc:</label>
                <div class="col-sm-10">
                    <input type="date" class="form-control" id="endDate" name="endDate" required>
                </div>
            </div>

            <div class="text-center">
                <button type="submit" class="btn-form">Tìm kiếm</button>
            </div>
        </form>
    </div>
</template>

<script setup>
</script>
