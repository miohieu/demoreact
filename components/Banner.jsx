
const Banner = () => {
  return (
    <div className='container-xl border border-secondary-subtle text-center' style={
        {height: "50vh"}

    }>
      <h1 className="banner-title">A warm welcome! </h1>
      <div className="banner-text">Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</div>
      <button className="btn btn-primary">Call to action</button>
      </div>
  )
}

export default Banner
