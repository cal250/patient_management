import { Query, ID } from "node-appwrite";
import { users } from "../appwrite.config";

export const createUser = async (user: CreateUserParams) => {
  // Your createUser logic here
  console.log("formdata", user);

  try {
    const newUser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.name
    );
    console.log("new user", newUser);
    console.log("Created user:", user);
    return (newUser);
  } catch (error: any) {
    console.log("error creating user", error);
    //check existing user
    if (error && error?.code === 409) {
      const documents = await users.list([Query.equal("email", [user.email])]);

      return documents?.users[0];
    }
  }
};

export const getUser = async (userId: string) => {

  try{
    const user = await users.get(userId);

    return (user);


  }catch (error) {
    console.log(error)

  }
}