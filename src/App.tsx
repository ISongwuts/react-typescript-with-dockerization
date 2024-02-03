import { ChangeEvent, useState } from 'react'

function App() {
  let buttonState:number = 0;
  const [user, setUser] = useState<User>({
    name: '',
    age: '',
    addr: ''
  });

  const [listUser, setListUser] = useState<Array<User>>([]);

  const formItems: string[] = ['name', 'age', 'addr'];

  const onUserChange = (e: ChangeEvent<HTMLFormElement>): void => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const onUserSubmit = (e:any): void => {
    e.preventDefault();
    if(buttonState === 0)setListUser((prev) => ([...prev, user]));
    else setListUser([]);
    console.log(listUser);
  }

  return (
    <div className='heroContainer'>
      <form action="" className='heroForm' onChange={onUserChange} onSubmit={onUserSubmit}>
        <h1>User Form Input</h1>
        {
          formItems.map((item: string, index: number) => (
            <div className='inputContainer' key={index}>
              <label htmlFor="">{item}</label>
              <input type="text" name={item} autoComplete='off' />
            </div>
          ))
        }
        <div className='buttonContainer'>
          <button type='submit' className='heroButton' onClick={()=>(buttonState = 0)}>Add</button>
          <button className='heroButton' onClick={()=>(buttonState = 1)}>Clear</button>
        </div>
      </form>
      <div className='cardContainer'>
        {
          listUser && listUser.map((user: User, index: number) => (
            <div key={index} className='heroCard'>
              <div>name: {user.name}</div>
              <div>age: {user.age}</div>
              <div>addr: {user.addr}</div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App
