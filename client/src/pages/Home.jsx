import React from 'react'
import { Link } from 'react-router-dom'
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa'
import Products from '../components/Products'


function Home() {
  return (
    <>
      <main>
        <section className='heading'>
            <h1>What do you need help with ?</h1>
            <p>Please choose from an option below</p>
        </section>
        <Link to='/new-ticket' className='btn btn-reverse btn-block'>
            <FaQuestionCircle /> Create New Ticket
        </Link>
        <Link to='/tickets' className='btn tn-block'>
            <FaQuestionCircle /> View My Tickets
        </Link>
      </main>
      <Products />
    </>
  )
}

export default Home
