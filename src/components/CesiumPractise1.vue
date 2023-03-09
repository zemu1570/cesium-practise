<script setup lang="ts">
import { VcViewer } from "vue-cesium"
import type { VcReadyObject } from "vue-cesium/es/utils/types"

const onViewerReady = (readyObj: VcReadyObject) => {
    const { Cesium, viewer } = readyObj

    const layer = new Cesium.ArcGisMapServerImageryProvider({
        url: "http://39.170.82.136:6080/arcgis/rest/services/%E6%B1%9F%E4%B8%9C%E6%9D%91%E6%AD%A3%E5%B0%841207/JDC1207/MapServer"
    })
    viewer.imageryLayers.addImageryProvider(layer)
}
</script>

<template>
    <vc-viewer @ready="onViewerReady"> </vc-viewer>
</template>