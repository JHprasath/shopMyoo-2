import React from 'react'

const register = () => {
  return (
    <div>
      <div>
        <h1>Register Account</h1>
        <p>If you already have an account us, please login at the <span>login page</span></p>
        <h4>Your Personal Details</h4>
        <hr />
        <form action="text">
            <label htmlFor="">First Name</label>
            <input type="text" placeholder='First Name'/>
            <label htmlFor="">Last Name</label>
            <input type="text" placeholder='Last Name'/>
            <label htmlFor="">E-Mail</label>
            <input type='email' placeholder='E-mail id'/>
            <label htmlFor="">Telephone</label>
            <input type='tel' placeholder='Telephone'/>
            <label htmlFor="">Fax</label>
            <input type='text' placeholder='Fax'/>
        </form>
        <h4>Your Address</h4>
        <hr/>
        <form action="text">
            <label htmlFor="">Company</label>
            <input type="text" placeholder='Company'/>
            <label htmlFor="">Address1</label>
            <input type="text" placeholder='Address1'/>
            <label htmlFor="">Address2</label>
            <input type="text" placeholder='Address2'/>
            <label htmlFor="">City</label>
            <input type="text" placeholder='City'/>
            <label htmlFor="">Post Code</label>
            <input type="text" placeholder='Post Code'/>
            <label htmlFor="country">Country</label>
            <select name="select the country" id="country">
                <option value="India">India</option>
                <option value="India">America</option>
                <option value="India">Taiwan</option>
                <option value="India">India</option>
            </select>
            <label htmlFor="">Company</label>
            <input type="text" placeholder='Company'/>
        </form>
        <h4>Your Password</h4>
        <hr/>
        <form action="">
        <label htmlFor="">Password</label>
        <input type="password" placeholder='Password'/>
        <label htmlFor="">Password Confirm</label>
        <input type="password" placeholder='Password Confirm'/>
        </form>
        <h4>Your Password</h4>
        <hr/>

      </div>
      <div></div>
    </div>
  )
}

export default register
