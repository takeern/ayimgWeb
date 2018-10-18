import React, { Component } from 'react'
import ListLine from './ListLine'

export default class App extends Component {
  handleClick (e) {
    if(e.target.nodeName === 'LI') {
      this.props.onSelect(e.target.getAttribute('value'))
    }
  }
  render() {
    const listShow = listJson.map((item, index) => 
      <ListLine items={item.items} title={item.title} key={index} />
    )
    return (
      <aside className='list' onClick={(e) => this.handleClick(e)}>
        {listShow}
      </aside>
    )
  }
}

const listJson = [
  {
    title: '灰化/grayscale',
    items: [
      {
        name: '平均值灰度',
        value: 'grayScale/average',
      },
      {
        name: '最大值灰度',
        value: 'grayScale/max',
      },
      {
        name: '加权灰度',
        value: 'grayScale/weight',
      },
    ], 
  },
  {
    title: '二值化/binary',
    items: [
      {
        name: '大津法',
        value: 'binary/otsu',
      },
      {
        name: '灰度平均值法',
        value: 'binary/avg',
      },
      {
        name: '均值双谷峰法（k取0.15）',
        value: 'binary/ptile',
      },
    ], 
  },
  {
    title: '过滤/fiter',
    items: [
      {
        name: '均值滤波',
        value: 'fiter/avg',
      },
      {
        name: '中值滤波',
        value: 'fiter/median',
      },
      {
        name: 'k近邻平滑均值滤波',
        value: 'fiter/knnA',
      },
      {
        name: 'k近邻平滑中值滤波',
        value: 'fiter/knnM',
      },
      {
        name: '对称近邻均值滤波器',
        value: 'fiter/snn',
      },
    ], 
  },
  {
    title: '二值图像预处理',
    items: [
      {
        name: '开运算',
        value: 'opening/1',
      },
      {
        name: '闭运算',
        value: 'closing/1',
      },
      {
        name: '腐蚀',
        value: 'erosive/1',
      },
      {
        name: '膨胀',
        value: 'dilate/1',
      },
    ], 
  },
  {
    title: '边缘识别/sharpen',
    items: [
      {
        name: 'priwitt算子锐化',
        value: 'sharpen/priwitt',
      },
      {
        name: 'sobel算子锐化',
        value: 'sharpen/sobel',
      },
      {
        name: 'roberts算子锐化',
        value: 'sharpen/roberts',
      },
      {
        name: 'wallis算子锐化',
        value: 'sharpen/wallis',
      },
    ], 
  },
  {
    title: '实验/reflect',
    items: [
      {
        name:'reflect',
        value: 'reflect',
      },
    ],
  },
]