import React from 'react'

function Payment() {
  return (
    <div className="payment">
        <h1>Payment Method:</h1>
        <form>
        <input type="radio" name="fruit" value="apple" />PSE <br/>
        <input type="radio" name="fruit" value="orange" />Nequi <br/>
        <input type="radio" name="fruit" value="watermelon" />Credit Card <br/>
        </form>
    </div>
  )
}

export default Payment