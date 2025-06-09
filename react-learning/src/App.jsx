import React from 'react'

const App = () => {

  const userInfo = [
    {
      userName: 'John Doe',
      email: 'johndoe@example.com',
      location: 'USA'
    },
    {
      userName: 'Jane Smith',
      email: 'janesmith@example.com',
      location: 'Canada'
    },
    {
      userName: 'Sam Wilson',
      email: 'samwilson@example.com',
      location: 'UK'
    }
  ];
  
  return (
    <>
      {userInfo.map((user)=>(
        <ul key={Math.random}>
          <li>{user.userName}</li>
        </ul>
      ))}
    </>
  )
}

export default App