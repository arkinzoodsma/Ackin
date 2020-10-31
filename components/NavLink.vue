<template>
  <div class="flex border-2 border-white rounded h-6 my-1 p-1 bg-orange-500">
    <fa-icon class="{{icon}}"></fa-icon>
    <nuxt-link :to="linkPath">{{ link.name }}</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'NavLink',
  props: ['icon', 'link'],
  computed: {
    linkPath() {
      return `${this.link.path}`
    },
  },
}
</script>
i

<style scoped lang="stylus"></style>
