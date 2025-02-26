<script setup lang="ts">
import { ref } from 'vue'

const dropdownVisible = ref(false)
const modalVisible = ref(false)
const customVisible = ref(false)

const toggleDropdown = () => {
  dropdownVisible.value = !dropdownVisible.value
}

const toggleModal = () => {
  modalVisible.value = !modalVisible.value
}

const toggleCustom = () => {
  customVisible.value = !customVisible.value
}

const handleClickOutside = () => {
  console.log('点击了外部区域')
}
</script>

<template>
  <div class="section">
    <h2>v-click-outside 指令示例</h2>

    <!-- 下拉菜单示例 -->
    <div class="demo-box">
      <h3>基础用法 - 下拉菜单</h3>
      <div class="dropdown">
        <button @click.stop="toggleDropdown">
          点击显示下拉菜单
        </button>
        <div
          v-if="dropdownVisible"
          v-click-outside="() => dropdownVisible = false"
          class="dropdown-menu"
        >
          <div class="dropdown-item">
            选项 1
          </div>
          <div class="dropdown-item">
            选项 2
          </div>
          <div class="dropdown-item">
            选项 3
          </div>
        </div>
      </div>
    </div>

    <!-- 模态框示例 -->
    <div class="demo-box">
      <h3>模态框</h3>
      <button @click.stop="toggleModal">
        打开模态框
      </button>
      <div
        v-if="modalVisible"
        class="modal-overlay"
      >
        <div
          v-click-outside="() => modalVisible = false"
          class="modal"
        >
          <h4>模态框标题</h4>
          <p>点击模态框外部区域关闭</p>
        </div>
      </div>
    </div>

    <!-- 自定义配置示例 -->
    <div class="demo-box">
      <h3>自定义配置</h3>
      <div class="custom-container">
        <button @click.stop="toggleCustom">
          自定义点击外部行为
        </button>
        <div
          v-if="customVisible"
          v-click-outside="{
            handler: () => {
              customVisible = false
              handleClickOutside()
            },
            immediate: false,
          }"
          class="custom-content"
        >
          <p>延迟关闭的内容面板</p>
          <p>点击外部区域将在控制台打印信息</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 160px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.dropdown-item {
  padding: 8px 16px;
  cursor: pointer;
}

.dropdown-item:hover {
  background-color: #f5f5f5;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  min-width: 300px;
  max-width: 500px;
}

.custom-container {
  position: relative;
}

.custom-content {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
  padding: 16px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

button {
  padding: 8px 16px;
  background-color: #409eff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #66b1ff;
}

.demo-box {
  margin-bottom: 24px;
}

h3 {
  margin-bottom: 16px;
  color: #333;
}

h4 {
  margin: 0 0 12px;
  color: #333;
}
</style>
