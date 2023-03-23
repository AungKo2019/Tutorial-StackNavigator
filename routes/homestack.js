import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ReviewDetail from '../screens/ReviewDetail';
import { createAppContainer } from 'react-navigation';



const screens={
    Home :{
        screen: Home,
        navigationOptions:{
            title:'Game Zone',
            // headerStyle:{backgroundColor:'red'}
        }
    },
    ReviewDetail:{
        screen: ReviewDetail,
        navigationOptions:{
            title:'Reviews Detail',
            // headerStyle:{backgroundColor:'red'}
        }
    },
}
const HomeStack=createNativeStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'white',
        headerStyle:{backgroundColor:'green' , height:100}
    }
});

//export default createAppContainer(HomeStack);
export default HomeStack;