import React from 'react'
import CommonNavBar from '../../HeaderNavs/CommonNavBar'
import Banner from '../Banner';
import styled from 'styled-components'
import HeadingBanner from '../HeadingBanner';
import ContactUsForm from '../ContactUsForm';

const Container = styled.div``;

function ContactUs() {

    async function handleFormData (formDetails) {
        const response = await fetch('https://ecommerce-website-data-default-rtdb.firebaseio.com/formdata.json',{
            method:"POST",
            body:JSON.stringify(formDetails),
            headers:{
                'content-type' : 'application/json'
            }
        })
        const formData = await response.json();
        console.log(formData)
    }



  return (
    <Container>
        <CommonNavBar/>
        <Banner/>
        <HeadingBanner text='To Contact Us, Fill the Form.'/>
        <ContactUsForm formDetails={handleFormData}/>
    </Container>
  )
}

export default ContactUs