import React from 'react'
import {Container} from '@styles/blocks';
import Brokerage from '@components/Brokerage';
import RequestInfo from '@components/RequestInfo';
import ContactForm from '@components/ContactForm';
import InvestmentTable from '@components/InvestmentTable';

function Review() {
  return (
    <React.Fragment>
        <Container>
            <Brokerage />
            <RequestInfo />
            <ContactForm />
            <InvestmentTable />
        </Container>
    </React.Fragment>
  )
}

export default Review