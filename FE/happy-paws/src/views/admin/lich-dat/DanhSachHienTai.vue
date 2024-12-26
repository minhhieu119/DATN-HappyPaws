<template>
  <div>
    <table-example
      :columns="columns" 
      :data="users" 
      :pageSize="pageSize" 
      @update:pageSize="handlePageSizeChange"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import TableExample from "@/components/table/TableExample.vue";
const columns = ref(["Name", "Age", "Country"]);
const users = ref([
  { Name: "John Doe", Age: 28, Country: "USA" },
  { Name: "Jane Smith", Age: 34, Country: "Canada" },
  { Name: "Samuel Johnson", Age: 25, Country: "UK" },
  { Name: "Alice Brown", Age: 30, Country: "Australia" },
  { Name: "Bob White", Age: 45, Country: "USA" },
  { Name: "Charlie Black", Age: 22, Country: "USA" },
  { Name: "David Green", Age: 31, Country: "Canada" },
  { Name: "Eve Blue", Age: 29, Country: "UK" },
  { Name: "Frank Gray", Age: 33, Country: "Australia" },
  { Name: "Grace Red", Age: 27, Country: "USA" },
  { Name: "Alice Brown", Age: 30, Country: "Australia" },
  { Name: "Bob White", Age: 45, Country: "USA" },
  { Name: "Charlie Black", Age: 22, Country: "USA" },
  { Name: "David Green", Age: 31, Country: "Canada" },
  { Name: "Eve Blue", Age: 29, Country: "UK" },
  { Name: "Frank Gray", Age: 33, Country: "Australia" },
  { Name: "Grace Red", Age: 27, Country: "USA" },
]);
const pageSize = ref(10);

// Hàm để thay đổi pageSize khi nhận sự kiện từ component con
const handlePageSizeChange = (newPageSize) => {
  pageSize.value = newPageSize;
};
</script>
