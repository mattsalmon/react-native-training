import { Text } from "react-native";

const User = ({ isDarkMode = true }) => {
    async function fetchData() {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        console.log(response);
        return "Hello";
    }
    fetchData();
    return <Text>Users component</Text>
}


export default User;