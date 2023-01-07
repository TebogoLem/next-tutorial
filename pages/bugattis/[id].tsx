import React from "react";

interface IBugatti {
  id: number;
  name: string;
  username: string;
  email: string;
}

export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: Array<IBugatti> | undefined = await response.json();

  return {
    paths: data?.map((person) => ({
      params: {
        id: person.id.toString(),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + id
  );
  const data = await response.json();

  return {
    props: {
      person: data as IBugatti | undefined,
    },
  };
};

const Details = ({ person }: { person: IBugatti }) => {
  return (
    <div style={{ marginTop: "5em" }}>
      <h1>Details</h1>

      <p>{person.name}</p>
      <p>{person.email}</p>
      <p>{person.username}</p>
    </div>
  );
};

export default Details;
