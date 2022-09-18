import './Book.css';

import {Component} from 'react'

 const Image=(props)=>{
     return <img src={props.img} alt=''/>
 }

 const Title=(props)=>{
    return <h1>{props.title} </h1>
 }

  const Author=(props)=>{
    return <h4>{props.author} </h4>
 }
class Book  extends Component {

  clickHandler(){
   alert('Hello world')
  }

    render(){
         const {img, title, author} = this.props.book
        return (
            <div className='book'>
                   <img src={img} alt=''/>
                   <h1 onClick={()=>this.clickHandler()}>{title} </h1>
                  <h4>{author} </h4>
            </div>
        )
    }
}

export default Book
