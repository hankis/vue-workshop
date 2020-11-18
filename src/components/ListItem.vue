<template>
  <td>
      <span class="warning">
          <slot name="warning"></slot>
      </span>
      <slot></slot>
  </td>
</template>

<style scoped>
.warning {
    color: orange;
}
</style>
