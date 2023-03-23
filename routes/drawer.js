import { createDrawerNavigator } from "@react-navigation/drawer";
import {createAppContainer} from '@react-navigation/native';
import About from "../screens/About";
import Home from "../screens/Home";
//import { createAppContainer } from 'react-navigation';
import AboutStack from './aboutStack' ;
import HomeStack from './homestack';


// const RootDrawerNavigator = createDrawerNavigator({
//     About:{
//         screen:AboutStack,
//     },
//     Home:{
//         screen:HomeStack,
//     },
    
// });

// export default createAppContainer(RootDrawerNavigator);


const Drawer = createDrawerNavigator();

export default Navigator = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
    )
}
