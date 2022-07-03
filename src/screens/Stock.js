import React, {useCallback, useMemo, useRef, useState} from 'react';
import {
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import {
  Text,
  Center,
  Heading,
  IconButton,
  Input,
  Button,
  ScrollView,
  VStack,
  Box,
  HStack,
} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import tw from 'twrnc';
import ListItem from '../components/ListItem';
import {RNCamera} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';

import RBSheet from 'react-native-raw-bottom-sheet';
import tailwind from 'twrnc';
import FieldData from '../components/FieldData';

const listData = [
  {
    title: 'Cylinder Mesin',
    kategori: 'Komponen Mesin',
    subtitle: '112223556467737',
    iconName: 'library',
    field: 'qty',
    value: '123',
  },
  {
    title: 'Cylinder Mesin',
    kategori: 'Komponen Mesin',
    subtitle: '112223556467737',
    iconName: 'library',
    field: 'qty',
    value: '123',
  },
  {
    title: 'Cylinder Mesin',
    kategori: 'Komponen Mesin',
    subtitle: '112223556467737',
    iconName: 'library',
    field: 'qty',
    value: '123',
  },
  {
    title: 'Cylinder Mesin',
    kategori: 'Komponen Mesin',
    subtitle: '112223556467737',
    iconName: 'library',
    field: 'qty',
    value: '123',
  },
  {
    title: 'Cylinder Mesin',
    kategori: 'Komponen Mesin',
    subtitle: '112223556467737',
    iconName: 'library',
    field: 'qty',
    value: '123',
  },
  {
    title: 'Cylinder Mesin',
    kategori: 'Komponen Mesin',
    subtitle: '112223556467737',
    iconName: 'library',
    field: 'qty',
    value: '123',
  },
  {
    title: 'Cylinder Mesin',
    kategori: 'Komponen Mesin',
    subtitle: '112223556467737',
    iconName: 'library',
    field: 'qty',
    value: '123',
  },
  {
    title: 'Cylinder Mesin',
    kategori: 'Komponen Mesin',
    subtitle: '112223556467737',
    iconName: 'library',
    field: 'qty',
    value: '123',
  },
  {
    title: 'Cylinder Mesin',
    kategori: 'Komponen Mesin',
    subtitle: '112223556467737',
    iconName: 'library',
    field: 'qty',
    value: '123',
  },
];

const Stock = () => {
  const refRBSheet = useRef(null);
  const refCamera = useRef(null);
  const [scan, setScan] = useState(false);

  const onSuccess = e => {
    console.warn(e);
  };

  const reqPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <SafeAreaView>
      {scan ? (
        <Center p={34} background="amber.100">
          <TouchableOpacity onPress={() => setScan(false)}>
            <Text color="black">Test</Text>
          </TouchableOpacity>
          <QRCodeScanner
            onRead={onSuccess}
            // flashMode={RNCamera.Constants.FlashMode.torch}
            topContent={
              <Text>
                Go to <Text>wikipedia.org/wiki/QR_code</Text> on your computer
                and scan the QR code.
              </Text>
            }
            bottomContent={
              <TouchableOpacity>
                <Text>OK. Got it!</Text>
              </TouchableOpacity>
            }
          />
        </Center>
      ) : (
        <Box w="full">
          <ScrollView showsVerticalScrollIndicator={false}>
            <Center
              p={12}
              pb="24"
              background="lightBlue.300"
              borderBottomLeftRadius="3xl">
              <Heading size="md" color="white">
                PO Approval
              </Heading>
            </Center>
            <VStack>
              <VStack
                space={5}
                alignSelf="center"
                borderRadius="3xl"
                mt="-64px"
                p="6"
                mx={4}
                background="white">
                <Heading fontSize="sm" fontWeight="medium">
                  Find Items
                </Heading>
                <Input
                  placeholder="Place an ID or Scan a QRCode"
                  width="100%"
                  borderRadius="4"
                  py="3"
                  px="2"
                  fontSize="14"
                  InputRightElement={
                    <IconButton
                      onPress={() => {
                        reqPermission();
                      }}
                      mr={2}
                      size="lg"
                      _icon={{
                        as: MaterialIcons,
                        name: 'qr-code-scanner',
                      }}
                    />
                  }
                />
                <Button
                  onPress={() => {
                    refRBSheet.current.open();
                  }}>
                  <Text style={tw`text-sm font-semibold text-white`}>Cari</Text>
                </Button>
              </VStack>
              <VStack px={4} py="6">
                <Heading size="sm">Latest Items</Heading>
                {listData.map((item, key) => (
                  <ListItem
                    key={key}
                    iconName={item.iconName}
                    title={item.title}
                    subtitle={item.subtitle}
                    kategori={item.kategori}
                    field={item.field}
                    value={item.value}
                  />
                ))}
              </VStack>
            </VStack>
          </ScrollView>
          <RBSheet
            ref={refRBSheet}
            customStyles={{
              container: tailwind.style('rounded-t-xl'),
            }}>
            <View style={tailwind.style('p-3 rounded-t-md', {flex: 1})}>
              <VStack p={5} space={3}>
                <HStack justifyContent="space-between">
                  <Text
                    fontSize="md"
                    fontWeight="semibold"
                    color="coolGray.500">
                    Opname Items
                  </Text>
                  <Button
                    p={1}
                    onPress={() => refRBSheet.current.close()}
                    background="coolGray.400"
                    borderRadius="md">
                    <MaterialIcons name="close" color="#fff" size={18} />
                  </Button>
                </HStack>
                <HStack flexWrap="wrap">
                  <FieldData field="Name" value="Cylinder Head Gear" />
                  <FieldData field="Kategori" value="Head Machine" />
                  <FieldData field="Gudang" value="Gudang 01" />
                  <FieldData field="Rak" value="5B" />
                </HStack>
                <HStack space={2}>
                  <TextInput
                    keyboardType="numeric"
                    style={tailwind`flex-1 border border-gray-400 rounded-md px-3`}
                  />
                  <Button>Simpan</Button>
                  <Button variant="outline" colorScheme="secondary">
                    <MaterialIcons name="close" size={16} />
                  </Button>
                </HStack>
              </VStack>
            </View>
          </RBSheet>
        </Box>
      )}
    </SafeAreaView>
  );
};

export default Stock;
