<template>
  <base-heading />
</template>


<script setup lang="ts">
import {h, defineComponent, reactive} from 'vue'

interface Props {
  title: string
  renderAs: string
  cls?: string
}


const props = withDefaults(defineProps<Props>(), {
  title: '',
  renderAs: 'div',
  cls: ''
})

const state = reactive({ headingCls: 'text-2xl lg:text-3xl' })


const BaseHeading = defineComponent({
  render() {
    return h(props.renderAs, { class: state.headingCls },props.title)
  }
})

</script>

<style scoped>

</style>