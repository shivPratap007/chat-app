import Header from "./Header";

 const Applayout=(WrappedComponent)=>{
  return (props)=>{
    return(
      <div>
        <div><Header/></div>
        <WrappedComponent {...props}/>
        <div>Footer</div>
      </div>
    )
  }
}

export default Applayout;