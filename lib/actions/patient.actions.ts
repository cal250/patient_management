
import { Query ,ID} from "node-appwrite"
import { users } from "../appwrite.config"


export const createUser = async (user: CreateUserParams) => {
    // Your createUser logic here
    try {
    const newUser = await users.create(
        ID.unique(),
        user.email,
        user.phone,
        undefined,
        user.name,
    )
    console.log({newUser})

    return JSON.stringify(newUser);

}
catch(error: any){
    //check existing user
    if ( error && error?.code ===409 ){
        const documents = await users.list([
            Query.equal('email',[user.email])
        ])

        return documents?.users[0]
    }

}
  };
  
