import AMapLoader from '@amap/amap-jsapi-loader'

export function mapLoader(plugins: string[] = []): Promise<any> {
  if (!(window as any)._AMapSecurityConfig) {
    (window as any)._AMapSecurityConfig = {
      securityJsCode: '46d036ca31a1033c1d4fa96f3cdae0d5'
    }
  }
  return AMapLoader.load({
    key: 'c4e60965ed48ee32705e58a59675a874', // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: plugins, // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  })
}