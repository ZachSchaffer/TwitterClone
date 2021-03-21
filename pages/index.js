import Head from 'next/head';

export async function getStaticProps(context) {
  const data = await fetch('http://localhost:5001/twitterclone-bf407/us-central1/helloWorld')
    .then((response) => response.json());

  return {
    props: { firebaseResponse: data }, // will be passed to the page component as props
  };
}

export default function Home(props) {
  const { firebaseResponse } = props;
  console.log(firebaseResponse);

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>Hello world</p>
        <p>
          Response:
          {' '}
          {firebaseResponse.message}
        </p>
      </main>
    </div>
  );
}
