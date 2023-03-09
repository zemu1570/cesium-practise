<script setup lang="ts">
</script>

<template>
    <vc-viewer>
        <vc-terrain-provider-tianditu 
            ref="provider"
            token="436ce7e50d27eede2f2929307e6b33c0"
        />
        <vc-layer-imagery>
            <vc-imagery-provider-tianditu 
                map-style="img_c"
                token="436ce7e50d27eede2f2929307e6b33c0"
            />
        </vc-layer-imagery>
        <vc-layer-imagery>
            <vc-imagery-provider-tianditu 
                map-style="cva_c"
                token="436ce7e50d27eede2f2929307e6b33c0"
            />
        </vc-layer-imagery>
        <vc-layer-imagery>
            <vc-imagery-provider-arcgis
                url="http://39.170.82.136:6080/arcgis/rest/services/%E6%B1%9F%E4%B8%9C%E6%9D%91%E6%AD%A3%E5%B0%841207/JDC1207/MapServer"
            />
        </vc-layer-imagery>    
    </vc-viewer>
</template>