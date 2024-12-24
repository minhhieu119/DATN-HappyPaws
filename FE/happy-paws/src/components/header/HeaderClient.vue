<template>
  <div class="container header-view">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand font-size-logo" href="#">#HappyPaws</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
            <li class="nav-item">
              <a class="nav-link font-size-btn" aria-current="page" href="#"
                >Trang chủ</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link font-size-btn" href="#">Thú cưng</a>
            </li>
            <li class="nav-item">
              <a class="nav-link font-size-btn" href="#">Người dùng</a>
            </li>
            <li class="nav-item">
              <a class="nav-link font-size-btn" href="#">Dịch vụ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link font-size-btn" aria-disabled="true">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link font-size-btn" aria-disabled="true"
                >Về chúng tôi</a
              >
            </li>
          </ul>
          <button class="btn-dang-nhap">Đăng nhập</button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
</script>

<style scoped>

.header-view {
    height: 130px;
    border-bottom: 1px solid #000;
}

.font-size-logo {
  color: black;
  font-weight: bold;
  font-size: 26px;
}

.font-size-btn {
  color: black;
  font-weight: bold;
  font-size: 16px;
}

nav {
  padding-top: 60px;
}
</style>