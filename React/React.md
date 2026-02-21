# What is React ?

- it is a javascript library for front-end development.
- React js is declarative , effective , efficient and flexible js library for building reusable ui component in react js
- it is open source , component based front-end js library  only for the view layer
- it was created and maintained by jordan walke , who is working as SE at the FB in 2002.
- FB developed react js in 2011 but it was released the public in the month of may 2013 as open source License.

React is javascript library which used to build the spa and reusable ui component.

# its advantage

-- it is composable
-- it is declarative
-- it is simple
-- seo friendly
-- fast,efficient, easy and easy to learn.
-- it guarantees stable code.


A Library is a collection of pre-written code which you can use in your program to perform a specific task.
Key Point :You are in control of the program flow
You decide:
When to call the library
Which function to use
How to use it

A Framework is a complete structure that provides:
Design
Flow
Architecture of the application
Key Point:Framework is in control of the program flow
Framework decides:
When your code will run
Where your code will run
How your code will run

# What is SPA:

-- Single Page Application

1. update the current page : instead of loading new pages, SPAs update the current page with new data from the web server.
2. Improve user experience : SPAs provide a smooth user experience by avoiding interrupting the user between pages.
3. improve performance : SPAs use less bandwidth and have faster loading times.

JSX: its faster than normal js.

- it make easier or creating a template in react js
- jsx stands for javascript and xml
- jsx allows us to write html code in react js.
- jsx make it easier to write and add html code in react app

const root =ReactDOM.createRoot(document.getElementById("root"))
root.render(

  <div>
  <h2>hello React js</h2>
  </div>
)

node_Modules : this folder contains all react js dependencies.

public : means it is visible to all inside public and outside the public

src : (source folder) src is one of the main folder in react js that contains all the important file.

index.js
gitignore: used by source control tools to identify which files and folder should be included or ignored during the code commit.

package-json: this file contain dependencies and scripts request for the project.

# What is difference between NPM and NPX

- NPM is a node package manager used to install , delete , and update javascript package on your machine.
- NPX is a node package executer, and it is used to execute javascript packages directly without installing them.

NPM installs packages globally , which means that your machine may be polluted by packages that are not required anymore in long run.

NPX does not install packages, so package pollution on the machine is not a concern.

React.Fragment
React fragments are extra that lets you group multiple elements together without adding extra nodes to the DOM. This helps keep the DOM structure clean and efficient

# what is component ?

Components are independent and reusable bits of code.
components is function or class of javascript that returns markup,styles and configures functionality

# components come in two types,

1. Class component
2. Functional component

class component
- A class component requires you to extend from React. Component and create a render function
- A class component must include the extends React.Component statement. this statement creates and inheritance to React.Component, and gives your component access to React.Component's functions. component also requires a render() method, this method returns html.

Before react 16.8 , class components were the only way to track state and lifecycle on react component. Functions components were considered "state less"

```
class Sample extends React.Component{
  render(){
    return(
      <>
      <h2>class component example</h2>
      </>
    )
  }
}
export default Sample
```

Functional component
A Function component also returns HTML, and behaves much the same way as a class component , but Function components can be written using much less code , are easier o understand.

- A functional component is just a plain JavaScript pure function that accepts props as an argument 
```
function Sample(){
  return (<>
  <h2>
  functional component
  </h2>
  </>)
}

const sample=()=>{
  return (
<>
  <h2>
  functional component
  </h2>
  </>
  )
}
```

import and export

```
const name="Raushan Singh"
const arr=[1,2,3,4,5]
var emp={
id:11,
name:"Raushan",
email:"raushan@gmail.com"
}
function display(){
  return(
    <><h2>
  function component
  </h2>

    </>
  )
}

export default Sample extends React.Component{
  render(){
    return (
       <><h2>
  class component
  </h2>

    </>
    )
  }
}

export {
  name,arr,emp,display
}

```

# State management in react js

State management in react js is the process of managing the data that determines how a react application behaves and looks

# what is state ?

State is a mutable javascript object that stores the current state of a component and functions as its memory. it can change over time due to user interactions, network or others events.

```
export default class Statemanagement extends Component{
  constructor(){
    super()
    this.num=1
  }
  increment(){
    this.num++;

  }
  decrement(){
    this.num--;
  }
  render(){
    return(
      <hr>
      <h2>
      Statemangemen example
      </h2>
      <hr></hr>
       <h2>
{this.num}      </h2>
<button onClick{()=>this.increment()}>Increment</button>
<button onClick={()=>{this.decrement()}}></button>
      </>
    )
  }
}
```

```
export default class Statemanagement extends Component{
  constructor(){
    super()
    this.state={num:1}
  }
  increment(){
   this.setState({num:this.state.num+1})

  }
  decrement(){
    if(this.state.num>1)
    this.setState({num:this.state-1});
  }
  render(){
    return(
      <hr>
      <h2>
      Statemangemen example
      </h2>
      <hr></hr>
       <h2>
{this.num}      </h2>
<button onClick{()=>this.increment()}>Increment</button>
<button onClick={()=>{this.decrement()}}></button>
      </>
    )
  }
}
```
# functional component
```
export default function stateMangement(){
  var[num,setNum]=useState(1);
  function increment(){
    setNum(++num)
  }
  function decrement(){
    if(num>1)
    setNum(--num)
  }
  return (
    <>
    <h2>
      Statemangemen example
      </h2>
      <hr></hr>
       <h2>
{this.num}      </h2>
<button onClick{increment}>Increment</button>
<button onClick={decrement}></button></>

  )
}
```

# lifting stat up react
Lifting state up is a react technique that moves state from child components to parent component . this allows multiple components to share and update the same state, which is important for maintaining data consistency and making an application more robust

what is props:
React, props are a keyword that stands for properties and is used to pass data between components . props are similar to html attributes and function argument in javascript

# Parent to child
parent.jsx
```
class Parent extends React.Component{
  render(){
    return(
          <>
          <h2> This is parent component</h2>
          <Child name="raushan" email="raushan@gmail.com"/>
          </>
    )
  }
}
```
child.jsx
```
class Child extends React.Component{
  render(){
    return(
      <>
            <h2> This is child component</h2>
             <h2> Name:{this.props.name}</h2>
      </>
    )
  }
}
```
# Functional component parent to child
```
export default function Parent(){
  return (
     <>
          <h2> This is parent component</h2>
          <Child name="raushan" email="raushan@gmail.com"/>
          </>
  )
}

export default function Child({props}){
  return (
    <>
            <h2> This is child component</h2>
             <h2> Name:{props.name}</h2>
      </>
  )
}
```

# Child to parent class component
```
class Parent extends React.Component{
  constructor(){
    super()
    this.state={
      id:"",
      name:""
    }
  }
  getData=(int data)=>{
  this.setSate({
    id:data.id,name:data.name
  })
  }
  render(){
    return(
      <>
      <h2>Parent Component</h2>
      <h2>Id:{this.state.id}</h2>
      <h2>Id:{this.state.name}</h2>
      <Child getData={this.getData}/>

       </>
      )
  }
}

export default Child extends React.Component{
  render(){
    return(
      <h2>Child Component</h2
            <button onClick={()=>{
              this.props.getData({
                id:101,
                name:"raushan"
              })
            }}>Send data to parent</button>
       </>
    )
  }
}
```

# functional component child to parent
```
export default function Parent(){

   function getData(data){
    console.log(data);
   }
   return(
     <h2>Parent Component</h2>
      <h2>Id:{this.state.id}</h2>
      <h2>Id:{name}</h2>
      <Child getData={getData}/>

   )
}

export default function Child(props){
  return(
    <>
    <h2>Child Component</h2>
    <button onClick={
      ()=>{
         props.getData({
           id:101,
            name:"raushan"
         })
      }
    }></button>
    </>
  )
}

```


# Conditional statement 
-- conditional rendering in react works the same ways condition in javascript
-- conditional rendering is a term to describe the ability to render different user interface if condition is true or false

```


```

