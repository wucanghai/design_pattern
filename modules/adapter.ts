/**
 * @desc 适配器模式是用来解决两个接口不兼容的情况，不需要改变已有的接口，通过包装一层的方式，实现两个接口正常协作
 * @author patric 2023.02.07
 *
 * @class Adaper
 */

class BaiduMap {
  constructor() {
    this.render()
  }

  public render() {
    console.log('渲染百度地图')
  }
}

class GoogleMap {
  constructor() {
    this.render()
  }

  public render() {
    console.log('渲染google地图')
  }
}

class TengXunMap {
  constructor() {
    this.render()
  }

  public render() {
    console.log('渲染腾讯地图')
  }
}

class GaoDeMap {
  constructor() {
    this.render()
  }

  public render() {
    console.log('渲染高德地图')
  }
}

interface RenderType {
  baidu: () => BaiduMap
  google: () => GoogleMap
  tengxun: () => TengXunMap
  gaode: () => GaoDeMap
  [index: string]: any
}

class Adaper {
  type: string

  constructor(type: string) {
    this.type = type

    this.init()
  }

  public init() {
    const renderType: RenderType = {
      baidu: () => new BaiduMap(),
      google: () => new GoogleMap(),
      tengxun: () => new TengXunMap(),
      gaode: () => new GaoDeMap(),
    }

    if (renderType[this.type]) {
      return renderType[this.type]()
    }

    throw '未找到需要渲染的地图！'
  }
}

export default Adaper
