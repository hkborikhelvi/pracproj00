import React from 'react'
import userData from '../../assets/Data/userData'
import Card from './Card/Card';

// const VIP = (val) => {
//   return (
//     <Card
//       img={val.imgsrc}
//       name={val.name}
//       age={val.age}
//       sport={val.sport}
//       country={val.country}
//       status={val.status} />
//   );
// }

const Home = () => {
  return (
    <>
      {/* <div className="container">
        <div className="d-flex justify-content-evenly">
          {userData.map(VIP)}
        </div>
      </div> */}



      <div className="d-flex flex-wrap justify-content-center mt-5">
        {userData.map((val, i) => {
          return (
            <Card
              key={i}
              img={val.imgsrc}
              name={val.name}
              age={val.age}
              sport={val.sport}
              country={val.country}
              status={val.status}
            />
          );
        })}
      </div>
    </>
  )
}

export default Home