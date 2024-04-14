import { StatusBar } from 'expo-status-bar';
import {Text} from 'react-native';

export default function MyApp() {

  function getFullName(fname, lname){
    return fname + " " + lname
  }

  const pet = "dog";
  return (
    
      <Text>
       {"\n\n\n\n\n\n"} 
       Hello, I am a student in CIS340! {"\n"}
       My full name is {getFullName("Matthias", "Sandrock" )}. {"\n"}
       I have a {pet}!
      </Text>
    
  );
}


