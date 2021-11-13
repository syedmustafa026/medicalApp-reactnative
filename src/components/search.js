import React from 'react';
import {
    VStack,
    Input,
    Icon,

} from 'native-base';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { style } from 'dom-helpers';
export default function SearchBar() {
    return (
        <VStack width="100%" space={5} alignItems="center">
            <Input
                placeholder="    Search"
                bg="#fff"
                width="100%"
                borderRadius="4"
                py="3"
                px="1"
                fontSize="14"
                _web={{
                    _focus: { borderColor: '#181461', style: { boxShadow: 'grey' } },
                }}
                InputRightElement={

                    <Icon
                        m="2"
                        mr="3"
                        paddingLeft="10"
                        size="6"
                        color="gray.400"
                        as={<MaterialIcons name="search" />}
                    />
                }
            />
        </VStack>
    );
}

// export default function () {
//   return (
//     <NativeBaseProvider>
//       <Center flex={1} px="2">
//         <SearchBar/>
//       </Center>
//     </NativeBaseProvider>
//   );
// }
