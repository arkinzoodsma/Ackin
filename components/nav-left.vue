<template>
  <div
    id="left"
    class="flex flex-auto justify-start space-x-2 text-sm text-white m-2"
  >
    <div class="flex">
      <fa-icon class="fad fa-atom fa-spin fa-2x"></fa-icon>
      <nav-link />
      <nav-link />
    </div>
  </div>
</template>

<script>
import NavLink from '@/components/NavLink'

export default {
  name: 'NavLeft',
  components: { NavLink },
}
</script>

<style scoped lang="stylus"></style>
