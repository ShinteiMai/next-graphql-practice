import Link from "next/link";
import Layout from "../components/Layout";
import { LoginComponent } from "../generated/apolloComponents";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>

      <LoginComponent>
        {(mutate) => (
          <button
            onClick={async () => {
              const response = await mutate({
                variables: { email: "test@test.com", password: "password" },
              });
              console.log(response);
            }}
          >
            Call Login Mutation
          </button>
        )}
      </LoginComponent>
    </p>
  </Layout>
);

export default IndexPage;
