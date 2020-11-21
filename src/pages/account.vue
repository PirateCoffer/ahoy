<template>
  <nuxt-child/>
</template>

<script>
export default {
  name: 'AccountWrapper',
  middleware: 'authenticated',
  data: () => ({
  }),
  computed: {
  },
  created() {
  },
  mounted () {
  },
  methods: {
  },
}
</script>
