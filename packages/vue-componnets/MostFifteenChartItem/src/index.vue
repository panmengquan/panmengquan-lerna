<template>
  <el-tooltip popper-class="tip-class" :disabled="txt.length <15" :content="txt" placement="bottom">
    <span >{{ getMost15Str(txt) }}</span>
  </el-tooltip>
</template>

<script>

export default {
  name:'MostFifteenChartItem',
  props: {
      txt: {
        type: String,
        default: ''
      },
      myEnable:{
        type: Boolean,
        default: true,
      }
  },
  data() {
    return {
      item: null
    }
  },
  watch: {
   
  },

  methods: {
    getMost15Str(title){
	if (title.length <= 15) {
        return title
    } else {
        return title.substring(0, 15) + "..."
    }
    }

  }
}
</script>

<style lang="less" scoped>

</style>
