<script lang="ts">
import { h } from "@vue/runtime-core";
export default {
  props: {
    render: Function,
  },
  render(props) {
    return props.render && props.render(h);
  },
};
</script>

<style scoped></style>
