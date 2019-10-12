import {  tasks  } from "./sample";
import User from "./models/User";
import user from "./models/User";

export const resolvers = {
    Query: {
        hello: () => {
            return 'Hello Word with GraphQl'
        },
        geetz(root, {  name }, ctx) {
            console.log(ctx);
            return `Hello ${name}!`;
        },
        tasks(){
            return tasks;
        },
        async users(){
            return await User.find();
        }
    },
    Mutation: {
        createTask(_,{input}){
            input._id = tasks.lenght;
            tasks.push(input);
            return input; 
        },
        async createUser(_,{input}){
            const NewUser = new User(input)
            await NewUser.save();
            return NewUser;

        },
        async deleteUser(_,_id){
            return await User.findByIdAndDelete(_id);
        },
        async updateUser(_,{_id,input}){
            return await User.findByIdAndUpdate(_id, input, { new: true });
        }

    }
};