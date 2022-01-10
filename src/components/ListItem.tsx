//import type { User } from "../types/user";

type User = {
  id: number;
  name: string;
  age: number;
  personalColor: string;
};

export const ListItem = (props: User) => {
  const { id, name, age } = props;

  return (
    <p>
      {id} : {name}({age})
    </p>
  );
};
