<script setup lang="ts">
import { VcViewer } from "vue-cesium"
import type { VcReadyObject } from "vue-cesium/es/utils/types"

const onViewerReady = (readyObj: VcReadyObject) => {
    console.log(readyObj.Cesium)
    console.log(readyObj.viewer)
}
</script>

<template>
    <vc-viewer @ready="onViewerReady"> </vc-viewer>
</template>