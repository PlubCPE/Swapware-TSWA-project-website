import { FC } from 'react'

const Home: FC = () => {
  return (
    <>
     <div className='container' style={{backgroundColor: '#cdf5f6', marginBottom: '20px', marginTop: '20px', borderRadius: '10px'}} >
      <h4 className='text-flex'>
        About Project 
        <p style={{ color: '#36454f', fontSize: '18px', fontStyle: 'sans-serif', marginBottom: '10px', marginTop: '10px', marginLeft: '10px' }}>
          this website is mainly created to store information about our project TSWA (Task Scheduling and Workflow Automation) 
          and enjoy explore the website of our project. If you have any question feel free to contact us
        </p>
      </h4>
    </div>
    </>
  )
}

export default Home