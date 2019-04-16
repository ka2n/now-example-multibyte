import Link from "next/link";
import Header from "../components/header";

function Show(props) {
  return (
    <main>
      <Header />
      <section>
        {JSON.stringify(props.query)}
      </section>
    </main>
  );
}

Show.getInitialProps = ({query}) => {
  return {query}
}

export default Show;
