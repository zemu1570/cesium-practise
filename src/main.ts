import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueCesium from 'vue-cesium'

import App from './App.vue'
import router from './router'

import 'vue-cesium/dist/index.css'

if (typeof (window as any).global === 'undefined') {
  (window as any).global = window
}

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(VueCesium, {
  cesiumPath: "/Cesium/Cesium.js",
  accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyNzY4MjE2MC0zM2E5LTQ4YTAtOTk1YS1kMDhiOTJhZmNkZGQiLCJpZCI6MTI3ODk0LCJpYXQiOjE2NzgzMjgxOTJ9.qAW7JlqoaRChH4UjlS7gmzgZ1Qc8WN7nnAFTuljSDKA",
})

app.mount('#app')
