import Link from "next/link";
import React from "react";
import styles from "../../styles/Bugattis.module.scss";

interface IBugatti {
  id: number;
  name: string;
  username: string;
  email: string;
}

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      people: data as Array<IBugatti> | undefined,
    },
  };
};

const Index = ({ people }: { people: Array<IBugatti> | undefined }) => {
  return (
    <>
      <h1>Bugatti Employees</h1>

      {people?.map((person) => (
        <Link
          href={`/bugattis/${person.id}`}
          key={person.id}
          className={styles.card}
        >
          <p>{person.name}</p>
        </Link>
      ))}

      {!people && "No gattis found"}
    </>
  );
};

export default Index;
