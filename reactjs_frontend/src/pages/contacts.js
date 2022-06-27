import React, {useEffect} from 'react'
import axios from "axios";
import Head from "react-helmet";

const Contacts = () => {

  // const getContacts = async() => {

  //   const getContactsReq = await fetch("http://localhost:5000/api/users/http://localhost:5000/api/users/62b8e222e4cf6d3c4010b720/get_contacts")
  //   const getContactsRes = await getContactsReq.json()

    
  // }
  useEffect(() => {

    const contacts = async() => {
      
      const getContactsReq = await axios({
        method: "GET",
        url: "http://localhost:5000/api/users/62b8e222e4cf6d3c4010b720/get_contacts",
        headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhaGFAZ21haWwuY29tIiwiaWF0IjoxNjU2MjgzMDU2fQ.qwjl7Qrtv1Uz5jrgFFTi55uK0TycOFRl_b-TB2ln0bs"
        }
      })
      // const getContactsRes = await getContactsReq.json()

      console.log(getContactsReq);
    }
    contacts()

  }, []);

  // getContacts()


  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="description" content="Free surveys creator" />
        <meta name="author" content="Abdul Aziz Kharraz" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My contacts</title>
      </Head>
      <div className='content_wrapper'>
      <main>
        <div className="container">
          <div className='address_book_heading'>
            <h2>Address Book</h2>
          </div>

          <div className="contacts">
            <table>

              <thead>
                <tr>
                  <th>FULL NAME</th>
                  <th>PHONE NUMBER</th>
                  <th>RELATIONSHIP STATUS</th>
                  <th>EMAIL</th>
                  <th>LOCATION</th>
                </tr>
              </thead>
              <tbody>
                <tr id='search'>
                  <td><input type="text" placeholder='Filter by name' /></td>
                  <td><input type="text" placeholder='Filter by phone number' /></td>
                  <td><input type="text" placeholder='Filter by relationship status' /></td>
                  <td><input type="text" placeholder='Filter by email' /></td>
                </tr>
                <tr>
                  <td>Janet Ellen</td>
                  <td>96397940</td>
                  <td>Single</td>
                  <td>janet@gmail.com</td>
                  <td>122, 30</td>
                </tr>
                <tr>
                  <td>Tony Hahn</td>
                  <td>96139940</td>
                  <td>Married</td>
                  <td>tony@gmail.com</td>
                  <td>12, 390</td>
                </tr>
                <tr>
                  <td>Bob Louden</td>
                  <td>96134875</td>
                  <td>Married</td>
                  <td>bob@gmail.com</td>
                  <td>122, 90</td>
                </tr>
              </tbody>

            </table>
          </div>
          

        </div>
      </main>

      </div>

    </>
  )
}

export default Contacts