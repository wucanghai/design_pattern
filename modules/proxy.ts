/**
 * @desc 代理模式是为一个对象提供一个代用品或占位符，以便控制对它的访问
 * @author patric 2023.02.07
 */

const myImage = (function () {
  const imgNode = document.createElement('img')
  document.body.append(imgNode)

  return {
    setSrc: function (src: string) {
      imgNode.src = src
    },
  }
})()

const ProxyImage = (function () {
  const img = new Image()

  img.onload = function () {
    myImage.setSrc(img.src)
  }

  return {
    setSrc: function (src: string) {
      img.src = src
      // myImage.setSrc('https://baidu.tup.com')
    },
  }
})()

// ProxyImage.setSrc('https://google.map.tup.jpg')

export default ProxyImage
