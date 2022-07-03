import {View, Text, TextInput} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Controller} from 'react-hook-form';

const InputForm = ({field, control, name, rules = {}, ...props}) => {
  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({field: {value, onBlur, onChange}, fieldState: {error}}) => (
        <View style={tw.style('flex pt-3')}>
          <Text
            style={tw.style('capitalize ', {
              fontFamily: 'Raleway',
              fontWeight: '700',
            })}>
            {field}
          </Text>
          <TextInput
            {...props}
            onChangeText={onChange}
            onBlur={onBlur}
            style={tw.style(
              'bg-white shadow-sm border border-gray-300 rounded-md px-4 my-2',
            )}
          />
          {error && (
            <View style={tw.style('flex flex-row items-center')}>
              <Ionicons
                name="alert-circle"
                style={tw.style('text-red-600 text-lg')}
              />
              <Text style={tw.style('text-red-600 text-xs ml-1')}>
                {error.message}
              </Text>
            </View>
          )}
        </View>
      )}
    />
  );
};

export default InputForm;
