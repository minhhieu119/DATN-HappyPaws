<template>
  <div class="m-3">
    <h5>Trạng thái chuồng</h5>
    <div class="row">
      <div class="col-3 card" v-for="chuong in listChuongs" :key="chuong.id">
        <div class="card-body">
          <h5 class="card-title"> {{chuong.name}}</h5>
          <a href="#" class="btn btn-primary">Go</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const listChuongs = [
    {
        id: 1,
        name: "Chuồng 1",
        status: "EMPTY"
    },
    {
        id: 2,
        name: "Chuồng 2",
        status: "NOTEMPTY"
    },
    {
        id: 3,
        name: "Chuồng 3",
        status: "EMPTY"
    },
    {
        id: 4,
        name: "Chuồng 4",
        status: "NOTEMPTY"
    },
    {
        id: 5,
        name: "Chuồng 5",
        status: "EMPTY"
    },
    {
        id: 6,
        name: "Chuồng 6",
        status: "NOTEMPTY"
    },
    {
        id: 7,
        name: "Chuồng 7",
        status: "EMPTY"
    },
    {
        id: 8,
        name: "Chuồng 8",
        status: "NOTEMPTY"
    },
    {
        id: 9,
        name: "Chuồng 9",
        status: "EMPTY"
    },
    {
        id: 10,
        name: "Chuồng 10",
        status: "NOTEMPTY"
    },
    {
        id: 11,
        name: "Chuồng 11",
        status: "EMPTY"
    },
    {
        id: 12,
        name: "Chuồng 12",
        status: "EMPTY"
    },
]

</script>

