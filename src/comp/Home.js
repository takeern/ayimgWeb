import React, { Component } from 'react'
import List from './List'
import Content from './Content'
import Header from './Header'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chooseFn: [],
    }
  }
  handleListClick (str) {
    const { chooseFn } = this.state
    const command = str.split('/')
    chooseFn.push({
      fnName: command[0],
      code: command.length > 1? command[1]: null,
    })
    this.setState({
      chooseFn,
    })
  }
  handleRemove (index) {
    const { chooseFn } = this.state
    if(index === 'all') {
      chooseFn.length = 0
    } else {
      chooseFn.splice(parseInt(index), 1)
    }
    this.setState({
      chooseFn,
    })
  }
  render () {
    const { chooseFn } = this.state
    return(
      <div>
        <header>
          <Header />
        </header>
        <aside className='container'>
          <div className='sider-container'>
            <List onSelect={(str) => { this.handleListClick(str)}}/>
          </div>
          <div className='content-container'>
            <Content chooseFn={chooseFn} onRemove={(index) => this.handleRemove(index)}/>
          </div>
        </aside>
      </div>
    )
  }
}
