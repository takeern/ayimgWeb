import React, { Component } from 'react'
import Ayimg from 'ayimg'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgsSrc:[
        './src/static/img/patchEasy.jpeg',
        './src/static/img/patch.jpeg',
        './src/static/img/gaosi.jpeg',
      ],
      imgPage:2,
      file:'',
    }
  }
  componentDidMount() {
    const reader = new FileReader()
    this.reader = reader
    reader.addEventListener('load', () => {
      this.refs.canvas.innerHTML = ''
      this.initImg(reader.result)
    })
    const ayimg = new Ayimg()
    this.ayimg = ayimg
    this.initImg()
  }
  componentDidUpdate(prevProps, prevState) {
    if(this.state.imgPage !== prevState.imgPage) {
      this.refs.canvas.innerHTML = ''
      this.initImg()
    }
    const { chooseFn } = prevProps
    const { ayimg } = this
    ayimg.reload()
    chooseFn.map((item) => {
      return item.code ? ayimg[item.fnName](item.code) : ayimg[item.fnName]
    })
    ayimg.show()
    return null
  }
  initImg(imgObj) {
    imgObj = imgObj || this.state.imgsSrc[this.state.imgPage]
    this.ayimg.init(imgObj, this.refs.canvas).then((ayimg) => {
      ayimg.show()
    })
  }
  handleClick(e) {
    const { onRemove } = this.props
    if (e.target.nodeName === 'LI' || e.target.nodeName === 'UL') return 
    while(e.target.nodeName !== 'LI') {
      e.target = e.target.parentNode 
    }
    onRemove(e.target.getAttribute('value'))
  }
  handleTurn(command) {
    let { imgPage, imgsSrc } = this.state
    if(command === 'left') {
      if(imgPage === 0) {
        imgPage = imgsSrc.length
      } else {
        imgPage -= 1 
      }
    } else {
      if(imgPage === imgsSrc.length - 1) {
        imgPage = 0
      } else {
        imgPage += 1 
      }
    }
    this.setState({
      imgPage,
    })
  }
  handleChange() {
    this.reader.readAsDataURL(this.refs.input.files[0])
  }
  handleUploadImg() {
    this.refs.input.click()
  }
  render () {
    const { chooseFn } = this.props
    const items = chooseFn.map((item, index) => 
      <li key={index} value={index}>
        {item.fnName}
        <span>
          <i className="iconfont">&#xe659;</i>
        </span>
      </li>
    )
    if (items.length !== 0) items.push(
    <li key={items.length+1} value='all'>
      <span className='last-span'>
        <i className="iconfont">&#xe659;</i>
      </span>
      </li>
    )
    return(
      <article className='content'>
        <ul onClick={(e) => this.handleClick(e)}>{items}</ul> 
        <div ref='canvas' className='canvas'></div>
        <div className='turn-page'>
          <span onClick={() => this.handleTurn('left')}><i className="iconfont">&#xe732;</i></span>
          <span onClick={() => this.handleTurn('right')}><i className="iconfont">&#xe731;</i></span>
          {/* <input type='file' ref='input' onChange={() => this.handleChange()} /> */}
          <span className='upload' onClick={() => this.handleUploadImg()}><i className="iconfont">&#xe665;</i></span>
        </div>
      </article>
    )
  }
}
