<template>
  <div class="input-card">
    <h4>下属行政区查询</h4>
    <div v-for="level in levels" :key="level" class="input-item">
      <div class="input-item-prepend">
        <span class="input-item-text">{{ levelOptions[level] }}</span>
      </div>
      <select :id="level" v-model="formData[level]" @change="handleSelect(level)">
        <option disabled value>--请选择--</option>
        <option v-for="item in districtList[level]" :key="item.code" :value="item.code">
          {{ item.name }}
        </option>
      </select>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { onMounted, reactive } from 'vue'
  import type { ICLevelKey, IDistrictItem, ILevelKey } from './interface'
  import { fetchDistrictList, nextLevel } from './utils'
  const polygons: any[] = []

  const props = defineProps({
    map: Object,
    default: null
  })

  const levelOptions = {
    province: '省市区',
    city: '地级市',
    district: '区县',
    street: '街道'
  }

  const levels = Object.keys(levelOptions) as ICLevelKey[]
  const districtList = reactive<any>({
    province: [],
    city: [],
    district: [],
    street: [],
  })
  const formData = reactive<Record<string, any>>({
    province: '',
    city: '',
    district: '',
    street: ''
  })

  function setBoundaries(boundaries: any[] = []) {
    if (props.map && boundaries.length) {
      for (let i = 0, l = boundaries.length; i < l; i++) {
        const polygon = new AMap.Polygon({
          map: props.map,
          strokeWeight: 1,
          strokeColor: '#0091ea',
          fillColor: '#80d8ff',
          fillOpacity: 0.2,
          path: boundaries[i]
        });
        polygons.push(polygon);
      }
      props.map.setFitView() // 地图自适应
    }
  }

  function clearProvince() {
    formData.city = ''
    formData.district = ''
    formData.street = ''
    districtList.city = []
    districtList.district = []
    districtList.street = []
  }

  function clearCity() {
    formData.district = ''
    formData.street = ''
    districtList.district = []
    districtList.street = []
  }
  function clearDistrict() {
    formData.street = ''
    districtList.street = []
  }

  // 清除地图上所有覆盖物
  function clearPolygons() {
    for (let i = 0, l = polygons.length; i < l; i++) {
      polygons[i].setMap(null)
    }
  }

  // 选择省市区街道
  const handleSelect = (level: ILevelKey) => {
    if (formData[level]) {
      clearPolygons()
      fetchDistrictList(level, formData[level]).then(({ list, boundaries }) => {
        districtList[nextLevel(level)] = list
        setBoundaries(boundaries)
      })
    } else {
      switch (level) {
        case 'province': clearProvince();break
        case 'city': clearCity();break
        case 'district': clearDistrict();break
      }
    }
  }

  onMounted(() => {
    fetchDistrictList().then(({ list }) => {
      districtList.province = list
    })
  })
</script>
<style lang="scss" scoped>
  .input-card {
    top: 5rem !important;
    left: 17.85rem !important;
    right: unset !important;
    bottom: unset !important;
  }

  select {
    font-size: 1rem;
    color: #495057;
  }
</style>
