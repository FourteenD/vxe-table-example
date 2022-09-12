import { defineComponent, reactive, ref } from "vue";
import { VxeGridInstance, VxeGridProps } from "vxe-table";

export default defineComponent({
  setup() {
    const xGrid = ref<VxeGridInstance>();
    const gridOptions = reactive<VxeGridProps>({});

    return () => (
      <>
        <vxe-grid ref={xGrid} {...gridOptions}></vxe-grid>
      </>
    );
  },
});
