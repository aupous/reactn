import { createStackNavigator, createAppContainer } from 'react-navigation'
import { Home, Test } from './screens'

const stackNav = createStackNavigator({
    Home,
    Test,
})

export default createAppContainer(stackNav)
