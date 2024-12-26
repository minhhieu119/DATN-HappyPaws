<template>
  <div class="m-3">
    <table class="table-bill table-bordered table-hover">
      <thead class="table-head">
        <tr>
            <th>STT</th>
          <th v-for="(column, index) in columns" :key="index">{{ column }}</th>
        </tr>
      </thead>
      <tbody v-if="pagedData.length > 0">
        <tr v-for="(row, rowIndex) in pagedData" :key="rowIndex">
            <td>{{ getRowIndex(rowIndex) }} </td>
          <td v-for="(column, colIndex) in columns" :key="colIndex">
            {{ row[column] }}
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td :colspan="columns.length" class="text-center">
            No data available
          </td>
        </tr>
      </tbody>
    </table>

    <div class="d-flex justify-content-between align-items-center">
      <div>
        <button
          class="btn-form"
          :class="{'btn-disabled': currentPage <= 1}"
          @click="changePage(currentPage - 1)"
        >
          Trang trước
        </button>

        <span class="mx-3"> Trang {{ currentPage }} / {{ totalPages }} </span>

        <button
          class="btn-form"
          @click="changePage(currentPage + 1)"
          :class="{'btn-disabled': currentPage >= totalPages}"
        >
          Trang sau
        </button>
      </div>

      <div class="d-flex align-items-center">
        <div class="me-5">
            <span>Số bản ghi/ 1 trang</span>
          <select
            id="pageSize"
            class="form-select w-auto"
            v-model="localPageSize"
            @change="updatePageSize"
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </div>

        <div>
            <span>Đến trang</span>
            <input
          class="form-control w-auto"
          type="number"
          v-model.number="jumpPage"
          :max="totalPages"
          :min="1"
          @change="changePage(jumpPage)"
          placeholder="Go to page"
        />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, defineProps, defineEmits } from "vue";
const props = defineProps({
  columns: {
    type: Array,
    required: true,
  },
  data: {
    type: Array,
    required: true,
  },
  pageSize: {
    type: Number,
    default: 10,
  },
});

const currentPage = ref(1);
const jumpPage = ref(1);
const localPageSize = ref(props.pageSize);

const totalPages = computed(() => {
  return Math.ceil(props.data.length / localPageSize.value);
});

const pagedData = computed(() => {
  const start = (currentPage.value - 1) * localPageSize.value;
  const end = currentPage.value * localPageSize.value;
  return props.data.slice(start, end);
});

const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    jumpPage.value = page;
  }
};

const updatePageSize = () => {
  // Chỉ gọi emit khi pageSize thay đổi
  if (localPageSize.value !== props.pageSize) {
    emit("update:pageSize", localPageSize.value);
    resetPagination();
  }
};

const resetPagination = () => {
  currentPage.value = 1;
  jumpPage.value = 1;
};

const getRowIndex = (index) => {
      return (currentPage.value - 1) * localPageSize.value + index + 1;
    }

// Theo dõi thay đổi trong pageSize và thay đổi nó
watch(
  () => props.pageSize,
  (newPageSize) => {
    if (newPageSize !== localPageSize.value) {
      localPageSize.value = newPageSize;
    }
  }
);

const emit = defineEmits("update:pageSize");
</script>

<style scoped>

.table-bill {
  width: 100%;
  margin-bottom: 20px;
  border-collapse: collapse;
  text-align: center;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  overflow: hidden;
}

.table-head {
  background-color: #264653;
  color: white;
  font-weight: bold;
}

.table-head th {
  padding: 12px 16px;
  text-transform: uppercase;
  font-size: 14px;
}

/* Dòng dữ liệu */
.table-bill tbody tr {
  transition: background-color 0.3s ease;
}

.table-bill tbody tr:nth-child(odd) {
    background-color: #ffffff;
}

.table-bill tbody tr:hover {
  background-color: #e9feed;
}

.table-bill tbody td,
.table-bill tbody th {
  padding: 12px 16px;
  /* Khoảng cách bên trong ô */
  font-size: 14px;
}

.table-bill,
.table-bill th,
.table-bill td {
  border: 1px solid #ddd;
  /* Màu đường viền */
}
/* .table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 8px 12px;
  border: 1px solid #ddd;
  text-align: left;
} */

.pagination {
  margin-top: 10px;
}

.page-size {
  margin-top: 10px;
  text-align: center;
}

.btn-next:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.btn-disabled {
  background-color: red; /* Màu đỏ khi trang < 1 */
  color: white;
}
</style>
