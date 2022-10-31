import { View, Text, SafeAreaView,Image, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {ChevronDownIcon,
UserIcon,
SearchIcon,
AdjustmentsIcon
} from 'react-native-heroicons/outline'
const Home = () => {

    const navigation=useNavigation();

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false,
        })
    },[])

  return (
    <SafeAreaView className="flex-1">

        <Text className="text-green-700">
            
            <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4">
                    <Image
                                source={{
                                    uri:"https://links.papareact.com/wru",
                                }}
                                className="h-7 w-7 bg-gray-300 rounded-full px-4"
                        />

                    <View className="flex-1">
                        
                            <Text className="font-bold text-gray-400 text-xs"> 
                            Deliver Now!
                            </Text>

                            <Text className="font-bold text-xl">
                                Current Location
                            
                            </Text>
                    </View>

              



            </View>

            {/*search*/}

            {/*Content*/}
        </Text>
    </SafeAreaView>
    
     
  )
}

export default Home