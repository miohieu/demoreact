import Card from './Card'
import Banner from './Banner'
const Body = () => {
  return (
      <>
      <div className="banner">
      <Banner></Banner>
      </div>
    <div className='row'>
      <div className='col-4'>
      <Card></Card>
      </div>
      <div className='col-4'>
      <Card></Card>
      </div>
      <div className='col-4'>
      <Card></Card>
      </div>
      <div className='col-4'>
      <Card></Card>
      </div>
      </div>
      </>
  )
}

export default Body
