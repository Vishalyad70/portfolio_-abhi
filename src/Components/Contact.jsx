import React from 'react'
import { Banner_contact } from './Contact/Banner_contact'
import { Hire_form } from './Contact/Hire_form';
import { useEffect } from 'react';

export  function Contact() {
  useEffect(() => {
    window.scroll(0,0);
  }, [])
    return (
        <div className="contact">
          <Banner_contact />
          <Hire_form />
        </div>
    )
}
