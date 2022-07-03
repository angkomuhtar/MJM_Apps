import React from 'react';
import {BottomSheetModal, BottomSheetTextInput} from '@gorhom/bottom-sheet';
import {Button, HStack, Text, VStack} from 'native-base';
import FieldData from './FieldData';
import tailwind from 'twrnc';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const BottomModal = () => {
  return (
    <VStack p={5} space={3}>
      <HStack justifyContent="space-between">
        <Text fontSize="md" fontWeight="semibold" color="coolGray.500">
          Opname Items
        </Text>
        <Button p={1} background="coolGray.400" borderRadius="md">
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
        <BottomSheetTextInput
          keyboardType="numeric"
          style={tailwind`flex-1 border border-gray-400 rounded-md px-3`}
        />
        <Button>Simpan</Button>
        <Button variant="outline" colorScheme="secondary">
          <MaterialIcons name="close" size={16} />
        </Button>
      </HStack>
    </VStack>
  );
};

export default BottomModal;
