import React from 'react';
import {
  Actionsheet,
  Text,
  Box,
  Button,
  Center,
  Heading,
  HStack,
  IconButton,
  Input,
  KeyboardAvoidingView,
  ScrollView,
  useDisclose,
  VStack,
} from 'native-base';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import tw from 'twrnc';

const Stock = () => {
  const {isOpen, onOpen, onClose} = useDisclose();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Center
        p={12}
        pb="24"
        background="lightBlue.300"
        borderBottomLeftRadius="3xl">
        <Heading size="md" color="white">
          Stock Opname
        </Heading>
      </Center>

      <KeyboardAvoidingView
        h={{
          base: '500px',
          lg: 'auto',
        }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <VStack
          space={5}
          alignSelf="center"
          borderRadius="3xl"
          mt="-64px"
          p="6"
          mx={4}
          background="white">
          {/* <Heading fontSize="lg">Find Items</Heading> */}
          <Input
            placeholder="Place an ID or Scan a QRCode"
            width="100%"
            borderRadius="4"
            py="3"
            px="2"
            fontSize="14"
            InputRightElement={
              <IconButton
                mr={2}
                size="lg"
                _icon={{
                  as: MaterialIcons,
                  name: 'qr-code-scanner',
                }}
              />
            }
          />
          <Button onPress={onOpen}>
            <Text style={tw`text-sm font-semibold text-white`}>Cari</Text>
          </Button>
        </VStack>
        <VStack p={4}>
          <Heading size="sm">Latest Items</Heading>
          <VStack>
            <HStack
              py="4"
              space="3"
              justifyContent="space-between"
              alignItems="center"
              borderBottomColor="coolGray.400"
              borderBottomWidth={1}>
              <Center p="4" background="lightBlue.200" borderRadius="md">
                <MaterialIcons name="view-in-ar" size={28} />
              </Center>
              <VStack flex={1}>
                <Text color="coolGray.700" fontSize="md" fontWeight="bold">
                  Cylinder Mesin
                </Text>
                <Text fontWeight="hairline" fontSize="xs">
                  Komponen Mesin
                </Text>
                <Text fontWeight="light" fontSize="xs">
                  112223556467737
                </Text>
              </VStack>
              <VStack>
                <Text fontWeight="light" fontSize="xs">
                  Qty
                </Text>
                <Text color="coolGray.700" fontSize="md" fontWeight="bold">
                  128
                </Text>
              </VStack>
            </HStack>
            <HStack
              py="4"
              space="3"
              justifyContent="space-between"
              alignItems="center"
              borderBottomColor="coolGray.400"
              borderBottomWidth={1}>
              <Center p="4" background="lightBlue.200" borderRadius="md">
                <MaterialIcons name="view-in-ar" size={28} />
              </Center>
              <VStack flex={1}>
                <Text color="coolGray.700" fontSize="md" fontWeight="bold">
                  Cylinder Mesin
                </Text>
                <Text fontWeight="hairline" fontSize="xs">
                  Komponen Mesin
                </Text>
                <Text fontWeight="light" fontSize="xs">
                  112223556467737
                </Text>
              </VStack>
              <VStack>
                <Text fontWeight="light" fontSize="xs">
                  Qty
                </Text>
                <Text color="coolGray.700" fontSize="md" fontWeight="bold">
                  128
                </Text>
              </VStack>
            </HStack>
            <HStack
              py="4"
              space="3"
              justifyContent="space-between"
              alignItems="center"
              borderBottomColor="coolGray.400"
              borderBottomWidth={1}>
              <Center p="4" background="lightBlue.200" borderRadius="md">
                <MaterialIcons name="view-in-ar" size={28} />
              </Center>
              <VStack flex={1}>
                <Text color="coolGray.700" fontSize="md" fontWeight="bold">
                  Cylinder Mesin
                </Text>
                <Text fontWeight="hairline" fontSize="xs">
                  Komponen Mesin
                </Text>
                <Text fontWeight="light" fontSize="xs">
                  112223556467737
                </Text>
              </VStack>
              <VStack>
                <Text fontWeight="light" fontSize="xs">
                  Qty
                </Text>
                <Text color="coolGray.700" fontSize="md" fontWeight="bold">
                  128
                </Text>
              </VStack>
            </HStack>
          </VStack>
        </VStack>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Stock;
