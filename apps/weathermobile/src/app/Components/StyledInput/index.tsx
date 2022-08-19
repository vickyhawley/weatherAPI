import React from 'react';
import { TextInput } from 'react-native';

export interface IStyledInputProps {
  defaultValue: string;
  onChangeText: (value: React.SetStateAction<string>) => void;
  onKeyPress: (evt: any) => void;
  placeholder: string;
}

export function StyledInput({
  defaultValue: query,
  onChangeText: setQuery,
  onKeyPress: search,
  placeholder,
}: IStyledInputProps) {
  return (
      <TextInput
        style={{ color: 'black', marginBottom: 50 }}
        defaultValue={query}
        placeholder={placeholder}
        placeholderTextColor="#0000"
        onChangeText={(e) => setQuery(e)}
        onKeyPress={search}
      ></TextInput>
  );
}
