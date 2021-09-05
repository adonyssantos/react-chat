import React from 'react';
import { Channel, Layout } from '../components';

function Home({ user }) {
  return (
    <Layout>
      <Channel user={user} />
    </Layout>
  );
}

export default Home;
