import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  render () {
    const { items, title } = this.props
    const lis = items.map((item, index) => <li key={index} value={item.value}>{item.name}</li>)
    return(
      <section>
        <div className='list-header'>{title}</div>
        <ul className='list-body'>{lis}</ul>
      </section>
    )
  }
}