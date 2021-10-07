import styled from 'styled-components'

export const PrivacyPolicy: React.FC = () => {
  return (
    <PolicyWrapper>
      <Title>Privacy Policy</Title>
      <Header>What data do we collect?</Header>
      <List>
        <ListElement>Email</ListElement>
        <ListElement>Name</ListElement>
        <ListElement>Background Image/Video title and URL</ListElement>
      </List>
      <Header>Payment Information</Header>
      <StandardText>
        To upgrade to Atlas Premium, your credit card number, credit card
        expiration date, and security code are required. All payment processing
        is done through Stripe. When paying with a credit card, the card details
        do not pass through our servers, they are sent directly to Stripe and
        are stored securely, as per their Privacy and Security policies.
      </StandardText>
      <Header>How do we collect your data?</Header>
      <List>
        <ListElement>Create an account</ListElement>
        <ListElement>Change settings or upload media</ListElement>
      </List>
      <Header>How do we use your data?</Header>
      <List>
        <ListElement>Save your settings</ListElement>
      </List>
      <Header>How do we store your data?</Header>
      <StandardText>Atlas securely stores your data in PostreSQL</StandardText>
      <Header>What are your data protection rights?</Header>
      <List>
        <ListElement>
          The right to access – You have the right to request Atlas for copies
          of your personal data. We may limit the number of times this request
          can be made to depending on the size of the request.
        </ListElement>
        <ListElement>
          The right to rectification – You have the right to request that Atlas
          correct any information you believe is inaccurate. You also have the
          right to request Atlas to complete the information you believe is
          incomplete.
        </ListElement>
        <ListElement>
          The right to erasure – You have the right to request that Atlas erase
          your personal data, under certain conditions..
        </ListElement>
        <ListElement>
          The right to restrict processing – You have the right to request that
          Atlas restrict the processing of your personal data, under certain
          conditions..
        </ListElement>
        <ListElement>
          The right to object to processing – You have the right to object to
          Atlas processing of your personal data, under certain conditions.
        </ListElement>
        <ListElement>
          The right to data portability – You have the right to request that The
          YouTube Thumbnail Game transfer the data that we have collected to
          another organization, or directly to you, under certain conditions.
        </ListElement>
      </List>
      <Header>What vendors are used?</Header>
      <List>
        <ListElement>Unsplash (Photo API)</ListElement>
        <ListElement>Google Analytics</ListElement>
      </List>
      <Header>Changes to our privacy policy</Header>
      <StandardText>
        Atlas Game keeps its privacy policy under regular review and places any
        updates on this web page. The Monkeytype privacy policy may be subject
        to change at any given time without notice. This privacy policy was last
        updated on 9 September 2021.
      </StandardText>
      <Header>How to contact us</Header>
      <StandardText>Email: atlasdashextension@gmail.com</StandardText>
    </PolicyWrapper>
  )
}

const PolicyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  margin: auto;
`

const Title = styled.div`
  font-size: 40px;
  font-family: 'Gothic Bold';
  align-self: center;
`

const Header = styled.div`
  margin-top: 35px;
  font-size: 22px;
  font-family: 'Gothic Bold';
`

const StandardText = styled.div`
  font-family: 'Helvetica';
  padding: 5px;
`

const List = styled.ul``

const ListElement = styled.li`
  font-family: 'Helvetica';
  padding: 5px;
`
