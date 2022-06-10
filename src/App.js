import './App.css';
import React from 'react';
import {Header} from './components/common';
import Container from '@mui/material/Container';

function App() {
  return (
    <div className="App">
  <Header/>
      <section>
      <Container maxWidth='lg'>
      <p>
            We are a Veteran Organization with a faith in Christ, Our Nations Hero’s and the Outdoors, and our mission is to serve those who sacrifice for this country.  
    We are a Christian based non-profit (501C3 in process) that uses the outdoors as a tool to make Veteran’s, Police and Fireman feel appreciated, loved and wanted. 
    We volunteer our time to take these brave men and women, and their families, out hunting and fishing around the country for free to thank them for their service, 
    help them get away from the stress in their life, and help them be able to live in the moment. We are here for you as Veteran Brothers and Sisters, 
    and as a Family that you can reach out to if you need someone to be there.
    </p>
    </Container>
      </section>
 
    </div>
        
   
        
  );
}

export default App;
